<?php
/**
 * @file
 * Custom div wrapper for navigation menu. I do this so that we can get
 * a custom hook for scripting (menu dropdown)
 * For more documentation, read: http://drupal.org/node/748022
 */
?>
<div class="contain-to-grid fixed">
<nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a href="#"><!-- Regeneration Church Oakland --></a></h1>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
  </ul>

  <section class="top-bar-section">
    <?php print render($content); ?>
  </section>
</nav>
</div>
