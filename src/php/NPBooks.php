<?php
class Books{

    // Connection instance
    private $connection;

    // table name
    private $table_name = "Books";

    // table columns
    public $BookKey;
    public $Title;
    public $Picture;
    public $Author;

    public function __construct($connection){
        $this->connection = $connection;
    }

    //C
    public function create($author, $title, $picture){
      $insert = "INSERT INTO  " . $this->table_name . " (`Author`, `Title`, `Picture`) VALUES ('" . $author . "','" . $title . "','" . $picture  ."');";

      $readyConn = $this->connection->prepare($insert);

      $readyConn->execute();
    }
    //R
    public function read(){
        $query = "SELECT Author, BookKey, Title, Picture FROM " . $this->table_name;

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
