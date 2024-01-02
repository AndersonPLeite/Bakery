<?php
    function conecta(){
        $host = 'localhost';
        $dbname = 'site';
        $user_name = 'root';
        $password = '';

        try{
            $conexao = new PDO("mysql:host=$host;dbname=$dbname",$user_name, $password);
            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexao;
        } catch(PDOException $e) {
            echo "Erro na conexão: ". $e->getMessage();
        }
    }
?>