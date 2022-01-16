<script>
  import MainNav from "./MainNav.svelte";
</script>

<footer>
  <nav>
    <ul>
      <li>
        <a href="/api/rss.xml" rel="external">RSS</a>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
  
  <MainNav />

  <p>&copy; {new Date().getFullYear()} by me.<br>(Find and change this text in the Footer.svelte file.)</p>
</footer>