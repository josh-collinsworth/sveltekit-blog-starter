---
title: Client-side Encryption
excerpt: Outlining one potential approach at client-side encryption
date: '2023-06-??'
slug: client-side-encryption-musings
coverImage: /images/?.png
coverWidth: 16
coverHeight: 9
categories:
  - encryption
  - cryptography
---

There seems to be a lot of interest in the homelab/self-hosted concept in the privacy and security community.
After all, if it's hosted in my basement and I'm smart about OpSec, then I can be sure that my data is secure and not being stolen and abused for another's gain.
Going with that thought though, it feels like we're gatekeeping digital privacy and security to those who are well-educated and already likely making plenty of money to pay for more privacy-respecting services.
Essentially, it's a model that is wholely inaccessible for the vast majority of people.
Even decentralized, federated services, like those considered part of the [Fediverse](https://en.wikipedia.org/wiki/Fediverse) are a) more complicated for those not in the tech community, and b) not necessarily any safer than using a centralized service (in the case of hopping on an open server, it's just a transfer of trust from some company we can be reasonably sure will abuse our data to some person that we're hoping has our best interests in mind).

Regardless of where we stand on centralized or decentralized services, I always come back to the idea that the only broadly accessible private solution we can trust is one where we don't need trust.
End-to-end encrypted services are becoming more mainstream, but they're still largely in the minority.
These will encrypt your data client-side (on your device) before ever sending it to the server, so all the operator sees is encrypted garbage.

I tried recently to see what it would take to implement client-side encryption with a web app, and what follows are my notes.

## Security Model

I've been really surprised at the lack of a path towards creating client-side encrypted apps.
There's a ton that needs to be done from the security side, and it doesn't seem well-documented at all.
I'm not a cryptographer and have spent the last couple months working out what I think might be reasonable (I'm very interested in feedback).


### Creating the keys

Given that this app involves communication between multiple people, in broadcasting, group, and DM scenarios, it seems necessary to establish a public key pair for each user.

If we were to encrypt each message within a group chat with the entirety of the group's public keys, we would find ourselves computationally challenged with any sort of reasonable group size.
Additionally, it becomes infeasible to ever rotate a key in that scenario since you'd have to re-encrypt every single message N times where N is the number of members in the group.
With 500 members, and 1,000 messages, your computer is in for some serious work that can't be moved to the server.

So, messages should be encrypted with a symmetric key, which is then encrypted N times for each member in the group using their public keys.
We'll then need a symmetric key for each group, timeline, group chat, which I'll refer to as an "encryption context" here.
Essentially, the largest possible environment where we can be sure that everyone involved should have access to the content.

So, from the client's perspective, when we create an encryption context (like the timeline or a new group), we need to do the following:
1. Generate a symmetric key to encrypt all the content in the group
2. Establish all the intended viewers
3. Fetch public keys for all the intended viewers (including ones-self)
4. Encrypt the symmetric key for each of those public keys
5. Send the encrypted content to the server (see Encrypted Symmetric Key Storage for details)

That's all fine and dandy, but we don't even have our own public key pair to be working with.
In order to do that, we need to delve into how we're going to generate that.
We need to be able to able to deterministically generate a key pair on every login so we are able to actually decrypt stuff.
From what I've found, there are a few ways to do this:
* A password-based key derivation function (PBKDF)
* WebAuthn
* FIDO2

I was thinking about using both passwords and a recovery key from the get-go for every user, both of which are treated as passwords in the context of deriving a key.
This means that every user will likely have 2+ public key pairs that they want to use to decrypt their symmetric keys.
However, it'd be much nicer from the interface side of things for each user to have a canonical public key that's easy to encrypt for.

This presents a desire to have a "master key pair" that can be used easily for encryption.
But since the server still can't see this while the service is retaining any form of end-to-end encryption, we try to encrypt the master private key with each of the user's client keys.

Here's what the model looks like right now:

User:
* N client public keys (password, recovery key, Yubikey))
* Master public key
* Encrypted master private key (encrypted for each client key)

Context:
* Encrypted symmetric key (encrypted for each member's master public key)

Message:
* Encrypted content (using the context's symmetric key)


So, let's walk through a user registration.
1. User enters in a username
2. Server checks if user exists, and if not, generates and presents a [challenge](https://www.w3.org/TR/webauthn-2/#sctn-cryptographic-challenges) and a cryptographic salt
3. User enters in a password
    * Client runs that password through a PBKDF to get a symmetric key
    * Client generates a random series of words to act as the recovery key, and runs that through a PBKDF to get another symmetric key
    * Client generates a random public key pair
    * Client signs the challenge string with the newly generate private key
    * Client encrypts the private key twice, once with the password based key, and secondly with the recovery words based key
    * Client sends the encrypted private keys (2 right now) to the server along with the public key and signed challenge string
4. Server verifies the signature, stores the required data, and generates an authorization token for the user




Encrypted symmetric key storage


### Encryption Algorithms

## Additional Notes

There are a number of resources out there that claim that web apps are incompatible with client-side encryption.
Most of these state that because web apps are served whenever they're requested (ie. there's no verifiable install step), they could serve a malicious version of the app that uploads all of your secret keys from the client, rendering all the client side encryption being done moot.
While that's definitely a valid concern, it definitely feels like letting perfect being the enemy of good.
Having the risk that a service is compromised and could expose your keys is still much better than your data never being encrypted in the first place, ready for inspection at any time by the service operator or anyone who is able to breach their network.
For especially sensitive applications, I would take heed of this advice and side towards the verifiable native apps, but deterring all services from client-side encryption seems unnecessary.


At this point, I have no idea what "Don't roll your own crypto" really means.
Obviously I won't be re-implementing some elliptic curve crypto library, but even creating a web app that relies on cryptography seems to be laden with pitfalls.


Revocation



