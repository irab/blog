<script>

import { intros } from "svelte/internal";

</script>
<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>About</h1>
  <figure>
    <img src='dewang-gupta-ESEnXckWlLY-unsplash.jpg' alt='Colourful Clouds.'>
    <figcaption>Photo by <a href="https://unsplash.com/@dewang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dewang Gupta</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></figcaption>
  </figure>
  <p>Hi there! You've found my blog. Some musings will most likely appear on Systems Design, Cloud Security and playing with interesting things tech related.</p>
</div>
