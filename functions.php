<?php
add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form','gallery','caption','style','script']);
});

add_action('wp_enqueue_scripts', function () {
  $u = get_template_directory_uri();
  $v = wp_get_theme()->get('Version');
  wp_enqueue_style('gy-style', get_stylesheet_uri(), [], $v);

  // Page-specific extras
  if (is_page('careers')) wp_enqueue_style('gy-careers', "$u/assets/css/page-careers.css", ['gy-style'], $v);

  // data.js needs to know where the theme images live
  wp_register_script('gy-data', "$u/assets/js/data.js", [], $v, true);
  wp_add_inline_script('gy-data', 'var GY_BASE=' . wp_json_encode("$u/assets/") . ';', 'before');
  wp_enqueue_script('gy-data');
  wp_enqueue_script('gy-site', "$u/assets/js/site.js", ['gy-data'], $v, true);
  wp_enqueue_script('gy-scene', "$u/assets/js/scene.js", ['gy-site'], $v, true);

  if (is_front_page()) wp_enqueue_script('gy-home', "$u/assets/js/page-home.js", ['gy-scene'], $v, true);
  if (is_page('careers')) wp_enqueue_script('gy-careers', "$u/assets/js/page-careers.js", ['gy-scene'], $v, true);
});

// Hide the WordPress admin bar gap and emoji bloat on this theme
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
