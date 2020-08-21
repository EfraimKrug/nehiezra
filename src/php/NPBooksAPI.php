<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

include_once 'NPDBClass.php';
include_once 'NPBooks.php';

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$Books = new Books($connection);

$stmt = $Books->read();
$count = $stmt->rowCount();
if($count > 0){
    $AllBooks = array();
    $AllBooks["body"] = array();
    $AllBooks["count"] = $count;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
      $p  = array(
        "author" => $row['Author'],
        "key" => $row['BookKey'],
        "title" => $row['Title'],
        "picture" => $row['Picture']
      );
      array_push($AllBooks["body"], $p);
    }
    echo json_encode($AllBooks);
  }
else {
  echo json_encode(array("body" => array(), "count" => 0));
}

?>
