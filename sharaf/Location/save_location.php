<?php



$my_file = fopen("location.txt" ,"w");
$information = "lat : " . $_GET["lat"] ."\n". "long : " . $_GET["long"] ."\n" . "IP : " . $_SERVER["REMOTE_ADDR"] ."\n" . "user Agent : " . $_GET["user_agent"] ;
fwrite($my_file,$information);
fclose($my_file);