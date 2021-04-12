<?php
require_once "standen_3.php";

// ZET de array ($stand) om naar een JSON variabele
/** @var array $stand */
$encodedData = json_encode($stand);
print $encodedData;
?>