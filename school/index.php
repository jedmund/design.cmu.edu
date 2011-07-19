<?php

require_once('../lib/config.php');

$template = $twig->loadTemplate('school.what_is_design.html');
echo $template->render(array());

?>