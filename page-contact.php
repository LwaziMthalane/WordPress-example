<?php
$gy_page='contact';
$gy_desc='Contact G-Yeza. Call, email or send us a message and we will be in touch soon.';
get_header();
?><main>
  <section class="hero" style="min-height:380px">
    <canvas data-scene="knot" aria-hidden="true"></canvas>
    <div class="w"><div class="copy" style="padding:90px 0 70px">
      <p class="tag">Contact us</p>
      <h1>Let's talk about what you need.</h1>
      <p class="lead">Send us a message and we'll be in touch soon. Prefer to talk? Call us Monday to Friday, 08:00 to 16:30.</p>
    </div></div>
  </section>

  <section><div class="w layout">
    <!-- FORM: set formAction in data.js to your real endpoint -->
    <form data-form novalidate class="rv">
      <h2 style="font-size:36px">How can we help?</h2>
      <div class="row2">
        <div class="f"><label for="name">Name *</label><input id="name" name="name" autocomplete="name" required></div>
        <div class="f"><label for="email">Email *</label><input id="email" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="row2">
        <div class="f"><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>
        <div class="f"><label for="service">Service</label>
          <select id="service" name="service"><option>General enquiry</option><option>Website development</option><option>Care plans</option><option>Server &amp; network support</option><option>Internet &amp; fibre</option><option>IT support</option><option>Microsoft 365</option><option>Cybersecurity</option><option>CCTV &amp; access control</option><option>E-waste</option></select></div>
      </div>
      <div class="f"><label for="message">Message</label><textarea id="message" name="message"></textarea></div>
      <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn b3" type="submit">Send message</button>
      <p class="msg" role="status" aria-live="polite"></p>
    </form>

    <div class="side rv" style="--i:1">
      <div class="box"><h3>Get in touch</h3><p><a href="tel:+27310010984">+27 31 001 0984</a></p><p><a href="mailto:info@g-yeza.co.za">info@g-yeza.co.za</a></p><p>Mon–Fri, 08:00–16:30</p></div>
      <div data-offices style="display:grid;gap:16px"></div>
      <!-- MAP SLOT: replace this div with a Google Maps <iframe> embed -->
      <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.134728402566!2d31.018616075486346!3d-29.860388122765627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9b808500001%3A0x4d27af583a8a7759!2sSte%20201b%2C%20DOONE%20HOUSE%2C%20379%20Anton%20Lembede%20St%2C%20Durban%20Central%2C%20Durban%2C%204001!5e0!3m2!1sen!2sza!4v1791135599473!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
    </div>
  </div></section>
</main>
<?php get_footer(); ?>
