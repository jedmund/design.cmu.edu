<?php

  require_once('../lib/config.php');
  
  // Define the section variable
  $vars['section'] = 'school';
  
  
  $nav = generate_page_nav();
  $nav[0]['selected'] = 1; // fix this to actually figure out the selected #.
  
  // Sets current page number, with 1-base.
  // This controls the selected item in the sidenav as well as
  // the bottom bar's contextual links.
  $selected = 1;
  
  // Sets the variables for Twig.
  $vars['sidenav']  = $nav;
  $vars['page_no'] = $selected;
  
  // Render.
  $template = $twig->loadTemplate('school.what_is_design.html');
  echo $template->render($vars);

?>