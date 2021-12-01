<script>
  import NavItem from "./NavItem.svelte";
  import { isMenuOpen } from '$lib/assets/js/store';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" aria-hidden={!$isMenuOpen}>
  <ul>
    <NavItem href="/blog">
      Blog
    </NavItem>
    <NavItem href="/about">
      About
    </NavItem>
    <NavItem href="/contact" >
      Contact
    </NavItem>
  </ul>
</nav>