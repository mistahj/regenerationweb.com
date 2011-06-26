<?php
/**
 * @file
 * Custom div wrapper for navigation menu. I do this so that we can get
 * a custom hook for scripting (menu dropdown)
 * For more documentation, read: http://drupal.org/node/748022
 */
?>
<div id="main-menu-nav">
  <?php print render($content); ?>
</div>