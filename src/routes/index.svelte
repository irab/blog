<script>
  export let posts;
</script>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }
  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }
  }
}

</style>

<svelte:head>
  <title>I Can't Believe It's Another Tech Blog</title>
</svelte:head>

<div class="home-container">
<p>Thing</p>
</div>
