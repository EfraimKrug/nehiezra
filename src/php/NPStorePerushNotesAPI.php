<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

include_once 'NPDBClass.php';
include_once 'NPPerushNotes.php';

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$PerushNotes = new PerushNotes($connection);

$author = $_REQUEST['author'];
$sefer = $_REQUEST['sefer'];
$chapter = $_REQUEST['chapter'];
$verse = $_REQUEST['verse'];
$note = $_REQUEST['note'];
$otherabout = $_REQUEST['otherabout'];
$othercitation = $_REQUEST['othercitation'];
$othersefer = $_REQUEST['othersefer'];
$othertext = $_REQUEST['othertext'];

// echo json_encode($_REQUEST);
$stmt = $PerushNotes->create($author,$sefer,$chapter,$verse,$note,$otherabout,$othercitation,$othersefer,$othertext);
// print_r($_REQUEST);
?>
