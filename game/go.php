<?php


$id =$_GET["id"];
if ($id == "0") {$link = "http://www.1station.org";} //Default Blank 
if ($id == "1") {$link = "http://www.yahoo.com";} // COMMENT 
if ($id == "2") {$link = "http://www.google.com";} // COMMENT 
if ($id == "3") {$link = "http://www.webmasterworld.com";} // COMMENT


header('HTTP/1.1 301 Moved Permanently'); // Clean 301 header
header("Location: $link"); // Jump to the link
exit();

?>