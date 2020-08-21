<?php
include_once 'NPDBClass.php';

class cBooks{
    private $connection;
    private $table_name = "Books";

    public $BookKey;
    public $Title;
    public $Picture;
    public $Author;

    public function __construct($connection){
        $this->connection = $connection;
    }

    public function create($author, $title, $picture){
      $insert = "INSERT INTO  " . $this->table_name . " (`Author`, `Title`, `Picture`) VALUES ('" . $author . "','" . $title . "','" . $picture  ."');";

      $readyConn = $this->connection->prepare($insert);

      $readyConn->execute();
    }

    public function read(){
        $query = "SELECT Author, BookKey, Title, Picture FROM " . $this->table_name;

        $readyConn = $this->connection->prepare($query);

        $readyConn->execute();

        return $readyConn;
    }

    public function update(){}
    public function delete(){
      $insert = "DELETE FROM  " . $this->table_name . " WHERE BookKey > 6;";

      $readyConn = $this->connection->prepare($insert);

      $readyConn->execute();
    }
}

$dbclass = new DBClass();
$connection = $dbclass->getConnection();
$Books = new cBooks($connection);

$stmt = $Books->delete();

?>
