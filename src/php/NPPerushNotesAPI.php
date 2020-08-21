<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

include_once 'NPDBClass.php';
include_once 'NPPerushNotes.php';

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$NPPerushNotes = new PerushNotes($connection);

$stmt = $NPPerushNotes->read();
$count = $stmt->rowCount();
if($count > 0){
    $AllPerushNotes = array();
    $AllPerushNotes["body"] = array();
    $AllPerushNotes["count"] = $count;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
      $p  = array(
        "author" => $row['Author'],
        "sefer" => $row['Sefer'],
        "chapter" => $row['Chapter'],
        "verse" => $row['Verse'],
        "note" => $row['Note'],
        "otherabout" => $row['OtherAbout'],
        "othercitation" => $row['OtherCitation'],
        "othersefer" => $row['OtherSefer']
      );
      array_push($AllPerushNotes["body"], $p);
    }
    echo json_encode($AllPerushNotes);
  }
else {
  echo json_encode(array("body" => array(), "count" => 0));
}

?>
