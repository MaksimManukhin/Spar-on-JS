<?php
$_POST = json_decode(file_get_contents("php://input"),true)//получение json данных
echo var_dump($_POST);
