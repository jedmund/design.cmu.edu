<?php

/**
  * Carnegie Mellon School of Design
  * Pit Prototype
  * 
  * Designed by Justin Edmund and David Yen
  *
  * Version 0.2
  * July 19, 2011
  *
  */

// Get the parts of the web server path.
$parts = explode(DIRECTORY_SEPARATOR, getcwd());
$junk  = array_shift($parts);
$junk  = (count($parts) > 4) ? array_pop($parts) : "";

// Put together the stringiified path with directory separators.
$path = '/' . implode('/', $parts);

// Make the global variable for the public path.
defined('DS') ? null : 
  define('DS', DIRECTORY_SEPARATOR);

defined('PUBLIC_PATH') ? null :
  define('PUBLIC_PATH', $path);
  
// Include Twig
require_once(PUBLIC_PATH.DS.'lib'.DS.'Twig'.DS.'Autoloader.php');
Twig_Autoloader::register();

// Load Twig
$loader = new Twig_Loader_Filesystem(PUBLIC_PATH.DS.'templates');
$twig   = new Twig_Environment($loader);

?>