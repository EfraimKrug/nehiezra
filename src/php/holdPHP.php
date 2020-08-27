
include_once 'NPDBClass.php';

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$PerushNotes = new PerushNotes($connection);

$author = "Nehemia%20Polen";
$sefer = "Vayikra";
$chapter = "4";
$verse = "24";
$note = "Circled%3A%20v'lakach%20%5Bsee%20v30%5D";
$otherabout = "";
$othercitation = "";
$othersefer = "";

$stmt = $PerushNotes->create($author,$sefer,$chapter,$verse,$note,$otherabout,$othercitation,$othersefer);
