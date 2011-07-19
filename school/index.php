<?php

require_once('../lib/config.php');

// Define the section variable
$vars['section'] = 'school';

$xml_str = file_get_contents(PUBLIC_PATH.DS.'assets'.DS.'content'.DS.'school.sidebar.xml');
$sidenav = xmlstr_to_array($xml_str);
$sidenav = $sidenav['item'];

// Set current page
$sidenav[0]['selected'] = 1;

$vars['sidenav'] = $sidenav;


$template = $twig->loadTemplate('school.what_is_design.html');
echo $template->render($vars);

?>