<?php
$gy_page='services';
$gy_desc='G-Yeza services: websites, care plans, IT support, servers, fibre, Microsoft 365, cybersecurity, CCTV and more.';
get_header();
?><main>
  <section class="hero">
    <canvas data-scene="ico" aria-hidden="true"></canvas>
    <div class="w"><div class="copy">
      <p class="tag">Our services</p>
      <h1>Everything your business needs to stay connected.</h1>
      <p class="lead">From websites and fibre to servers, security and support, with clear packages that suit your budget.</p>
      <a class="btn b1" href="#pricing">See pricing</a>
    </div></div>
  </section>

  <section><div class="w">
    <div class="head rv"><h2>What we offer</h2><p>Pick a service to learn more, or jump straight to pricing.</p></div>
    <div class="grid" data-services></div>
  </div></section>

  <section class="price" id="pricing"><div class="w" data-pricing>
    <p class="tag">Pricing</p><h2 class="rv">Clear packages. No surprises.</h2>
    <p style="color:var(--sl);max-width:640px">Prices are in rand. Contact us for a tailored quote.</p>
    <div class="tabs" role="tablist"></div>
    <div class="plans"></div>
  </div></section>

  <div class="band blb"><div class="w rv"><h2>Not sure what you need?</h2><a class="btn b1" href="/contact/">Talk to our team</a></div></div>
</main>
<?php get_footer(); ?>
