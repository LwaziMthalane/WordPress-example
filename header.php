<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php if(!empty($gy_desc)): ?><meta name="description" content="<?php echo esc_attr($gy_desc); ?>"><?php endif; ?>
<?php wp_head(); ?>
</head>
<body data-page="<?php echo esc_attr(isset($gy_page)?$gy_page:'other'); ?>" <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="site-header"></div>
