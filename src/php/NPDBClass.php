<?php
class DBClass {

    private $host = "efraimmkrug71828.domaincommysql.com";
    private $username = "efraim";
    private $password = "R3bN3h3mi@";
    private $database = "npolen";

    public $connection;

    // get the database connection
    public function getConnection(){

        $this->connection = null;

        try{
            $this->connection = new PDO("mysql:host=" . $this->host .
                                        ";dbname=" . $this->database,
                                        $this->username, $this->password);
                                        
            $this->connection->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Error: " . $exception->getMessage();
        }

        return $this->connection;
    }
}
?>
