<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

include_once 'NPDBClass.php';
include_once 'NPBooks.php';

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$Books = new Books($connection);

$auth = $_REQUEST['author'];
$tit = $_REQUEST['title'];
$pic = $_REQUEST['picture'];

$Books->create($auth,$tit,$pic);

$APIReturn = array();
$APIReturn["body"] = array();
$APIReturn["count"] = 1;

$p  = array(
    "error" => "success"
);

array_push($APIReturn["body"], $p);
echo json_encode($APIReturn);

// $stmt = $Books->create($auth,$tit,$pic);
?>
