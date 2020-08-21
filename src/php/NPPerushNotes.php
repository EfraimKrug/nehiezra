<?php
class PerushNotes{

    // Connection instance
    private $connection;

    // table name
    private $table_name = "PerushNotes";

    // table columns
    public $PerushKey;
    public $Author;
    public $Sefer;
    public $Chapter;
    public $Verse;
    public $Note;
    public $OtherAbout;
    public $OtherCitation;
    public $OtherSefer;

    public function __construct($connection){
        $this->connection = $connection;
    }

    //C
    public function create($author, $title, $picture){
      $insert = "INSERT INTO  " . $this->table_name . "( `Author`, `Sefer`, `Chapter`, `Verse`, `Note`, `OtherAbout`, `OtherCitation`, `OtherSefer` ) VALUES ( '" . $Author . "','" . $Sefer . "','" . $Chapter . "','" . $Verse . "','" . $Note . "','" . $OtherAbout . "','" . $OtherCitation . "','" . $OtherSefer . "')";

      $readyConn = $this->connection->prepare($insert);

      $readyConn->execute();
    }
    //R
    public function read(){
        $query = "SELECT Author, Sefer, Chapter, Verse, Note, OtherAbout, OtherCitation, OtherSefer FROM " . $this->table_name;

        $readyConn = $this->connection->prepare($query);

        $readyConn->execute();

        return $readyConn;
    }
    //U
    public function update(){}
    //D
    public function delete(){}
}

?>
