---
title: 'Home Cloud Setup (NextCloud, Plex, and Traefik) Part 1'
excerpt: A simple, repeatable setup for a private cloud anyone can set up and start down their journey toward privacy
date: '2023-03-27'
slug: home-cloud-setup-nextcloud-plex-and-traefik-part-1
coverImage: /images/home-cloud-setup.png
coverWidth: 16
coverHeight: 9
categories:
  - homelab
---

## What this is

A simple, repeatable setup for a private cloud anyone can set up and start down their journey toward [privacy](https://www.reddit.com/r/privacy/wiki/index).

This setup goes through the installation of the following:

- [NextCloud](https://nextcloud.com/)
- [Plex](https://www.plex.tv/)
- Auto HTTPS via [Traefik](https://traefik.io/)
- Simple Networking

## Source Code

All code is hosted on [GitHub](https://github.com/michaeldbianchi/privatecloud)

## Why do this

In the last few years, I've become more aware and upset at the amount of data I've published to the public internet and to companies that should not be trusted to store our data securely.

This home setup is an effort to degoogle and reduce my reliance on "free" services that profit from my data.

For this to be more commonly adopted, the barrier of entry needs to decrease such that just about anyone could set up a secure and private cloud.

I am writing this guide so that others starting to see the value of a self-hosted cloud can easily stand up their own.

## Prereqs

Hardware:

- 1 system
  - Raspberry Pi
  - Old desktop or laptop
  - Rackmount server
  - Cloud instances
  - VM on any of the above

Software (on your development machine):

- [`docker`](https://tbd)
- `docker-compose` (Not needed if using a version of docker that natively includes compose - [Docker Desktop 3.4 or higher](https://www.docker.com/blog/announcing-compose-v2-general-availability/))

Domain Registration

- One domain that you can control DNS with (I use Cloudflare)

### Vagrant Instructions

If you just want to test this out in an ephemeral environment, I included a `Vagrantfile` in the source code repo.

```bash
vagrant plugin install vagrant-docker-compose
vagrant up
vagrant ssh

cd privatecloud
```

### Mac Install Instructions

```bash
brew install --formula docker  # docker cli
brew install --cask docker  # docker desktop
```

### Linux Install Instructions (Debian Based)

```bash
sudo apt-get install docker
sudo apt-get install docker-ce
sudo apt-get install docker-compose
```

## Quick Start

## Source Code

Clone the repo at the [michaeldbianchi/privatecloud](https://github.com/michaeldbianchi/privatecloud)

## Setup

Run the setup script, which will create `.env` files, userfiles, and any required docker resources (networks)

```sh
cd privatecloud
./bin/setup
```

Update configuration and secrets in `db.env` and `.env`.

```sh
# .env
DATA_DIR=${HOME}/data          # any directory for nextcloud and plex data to be stored
BASE_DOMAIN=example.com        # your domain - required for HTTPS to work
NEXTCLOUD_SUBDOMAIN=nextcloud. # trailing . required for interpolation
ROUTER_SUBDOMAIN=router.
TRAEFIK_SUBDOMAIN=traefik.

# db.env
POSTGRES_PASSWORD=<INSERTSTRONGPASSWORDHERE>
POSTGRES_DB=nextcloud
POSTGRES_USER=nextcloud
```

## Networking

You have 2 options here, either do the full setup (described later in the Appendix) which involves setting up DNS with your actual domain and port forwarding, or set up a local override, described below.

### Local DNS Override

Set up DNS overrides using `/etc/hosts` (Linux or Mac)

Usually requires `sudo` unless you are acting as root

[gist: set_dns_overrides.sh](https://gist.githubusercontent.com/michaeldbianchi/c9c79d37de8d125c2ac82df8a13773ff/raw/set_dns_overrides.sh)

This script is also included as an executable in the source code under `./bin/set_dns_overrides.sh`

NOTE: If you are setting this up on a remote host, feel free to change `127.0.0.1` with the IP address of the server.

## Run the app

```sh
docker-compose up -d    # run app in background
docker-compose -f logs  # tail the logs

open http://cloud.example.com  # open the browser for your cloud page
```

If you are using the local DNS override, you can expect errors from the browser as well as the Traefik service saying it is unable to generate SSL certificates. This is fine and won't impede local testing.

After bypassing the invalid certificate errors in your browser, you should be able to access your services as follows:

- Nextcloud
  - URL: http://cloud.example.com
  - Login: create your admin account on first open
- Traefik Dashboard
  - URL: http://traefik.example.com
  - Login: basic auth
    - username: admin
    - password: entered during `./bin/setup.sh` script
- Plex
  - URL: localhost:32400/web
  - Note: The Plex Media Server does not have it's own dashboard and will just redirect you to it's own application where you can proceed to configure the server

# Appendix

## Networking

If you want to just set up this project locally, follow the process in the Quick Start.

This will walk through the following steps:

1. DNS Setup
2. Port-forwarding

### DNS Setup

Set up DNS to point to your server/computer.

This is required for at least the subdomains you specified in the `.env` file. Optionally, you can add a wildcard (\*) resolution for your domain.

Implementation will vary by provider, but you will just need to add an A record pointing to your public IP address.

Find your public IP address

```plaintext
curl icanhazip.org
```

Create a(n) A record(s):

- `A *.`[`example.com`](http://example.com) `<public ip address>` for wildcard routing
- or -
- `A` [`cloud.example.com`](http://cloud.example.com) `<public ip address>`
- `A` [`traefik.example.com`](http://traefik.example.com) `<public ip address>`

### Dynamic DNS

Unless you are getting a static IP from your ISP or cloud provider, your public IP address will likely change on every reboot of your router.

A common solution is to use a DynamicDNS service or tool to automatically configure DNS to point at your most current public IP address. Since this will change by provider, I'll just link instructions on a handful of popular one:

- Cloudflare - [cloudflare-ddns](https://github.com/hugomd/cloudflare-ddns)
- Namecheap - [docs](https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/)
- Any provider - [ddns-updater](https://github.com/qdm12/ddns-updater)

### Port Forwarding

Now that we have DNS set up, a network request to your domain should arrive at your network router. However, your router will likely just block that request unless explicitly told to route it to some backend server.

Once again, each provider is different, but in most cases you'll need to access your router's admin page (often [http://192.168.1.0](http://192.168.1.0) or [http://192.168.1.1](http://192.168.1.1)), and set up port forwarding rules.

In order for this project to work, you'll need to route ports 80 and 443 to the server's internal IP address in your network.

- Port 80 is required for letsencrypt to validate your domain
- Port 443 is required for all other network traffic

[Find your internal IP address](https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108)

Depending on your setup, it may also be necessary to set a static IP for your machines. This should also be available in your router config.

### Validation

Verify the DNS by making sure your public IP and DNS IP match:

Uses [dig](https://docs.digitalocean.com/products/networking/dns/resources/use-dig/)

```plaintext
curl icanhazip.com
#=> 93.184.216.34
dig +short example.com
#=> 93.184.216.34
```

Now try navigating to your website (ie. [https://cloud.example.com](https://cloud.example.com)).

Check the logs if something's not working:

```plaintext
docker-compose logs -f
```
