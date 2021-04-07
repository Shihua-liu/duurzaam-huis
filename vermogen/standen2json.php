<?php
<<<<<<< HEAD
require_once "standen_3.php";
=======
require_once "standen_2.php";
>>>>>>> 0d199971b1f103fc59618242142346ec8eda88c8

// ZET de array ($stand) om naar een JSON variabele
/** @var array $stand */
$encodedData = json_encode($stand);
print $encodedData;
?>