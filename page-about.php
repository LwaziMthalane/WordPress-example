<?php
$gy_page='about';
$gy_desc='About G-Yeza: a fully accredited, 100% Black owned IT company with offices in Durban and Pretoria.';
get_header();
?><main>
  <section class="hero">
    <canvas data-scene="oct" aria-hidden="true"></canvas>
    <div class="w"><div class="copy">
      <p class="tag">About G-Yeza</p>
      <h1>People first. Technology that works.</h1>
      <p class="lead">A fully accredited IT company offering expert IT support and telecommunications, with great service at an affordable price anywhere in South Africa.</p>
      <a class="btn b1" href="/services/">Explore services</a>
    </div></div>
  </section>

  <section><div class="w split">
    <div class="rv"><p class="tag">Our story</p><h2>Connecting devices, people and applications.</h2>
    <p>Since 2017 we have helped businesses and homes get the technology they need: websites, servers and networks, fibre and voice, security and everyday support.</p>
    <p>We are a phone call or click away, with speedy support from technicians who explain things in plain language.</p></div>
    <!-- PHOTO SLOT: change the image in data.js (img.work) -->
    <div class="ph big rv"><img data-img="work" alt="G-Yeza team at work" loading="lazy"></div>
  </div></section>

  <section style="padding-top:0"><div class="w"><div class="vals">
    <div class="val rv"><h3>100% Black owned</h3><p>A proudly South African company.</p></div>
    <div class="val rv" style="--i:1"><h3>Service oriented</h3><p>Products and support built around you.</p></div>
    <div class="val rv" style="--i:2"><h3>Speedy support</h3><p>Responsive tech support when your team needs it.</p></div>
    <div class="val rv" style="--i:3"><h3>Affordable quality</h3><p>High-quality service at fair prices.</p></div>
  </div></div></section>

  <section class="price" id="team"><div class="w">
    <p class="tag">The team</p><h2 class="rv">The people behind the work.</h2>
    <div class="people" data-team></div>
  </div></section>

  <section><div class="w">
    <p class="tag">Where to find us</p><h2 class="rv">Two offices, one team.</h2>
    <div class="offices" data-offices></div>
  </div></section>

  <section class="alt" id="brands"><div class="w">
    <p class="tag">Brands we work with</p><h2 class="rv">Technology from brands we know and support.</h2>
    <div class="logos" data-brands></div>
  </div></section>

  <div class="band blb"><div class="w rv"><h2>Ready to work with us?</h2><a class="btn b1" href="/contact/">Start a project</a></div></div>
</main>
<?php get_footer(); ?>
