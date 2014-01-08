<?php
$data = $_POST['data'];
$time = time();

$file = 'data.txt';
$handle = fopen($file, 'a');
fwrite($handle, $time . "\n\r");
fwrite($handle, var_export($data, true) . "\n\r\n\r");