<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$file = 'test.txt';
$handle = fopen($file, 'w');
fwrite($handle, "Test");