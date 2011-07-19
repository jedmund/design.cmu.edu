<?php

require_once('lib/config.php');

$template = $twig->loadTemplate('index.html');
echo $template->render(array());

?>