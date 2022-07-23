<?php

//json encode mengakses array 

$mahasiswa = [
    [
    "nama" => "Rizky Hertama",
    "NIM"  => 2440062483,
    "email" => "rizky.hertama@binus.ac.id"
    ],
    [
        "nama" => "Revaldy",
        "NIM"  => 2440044321,
        "email" => "revaldy@binus.ac.id"
    ]
];

//// var_dump ($mahasiswa);

$data = json_encode($mahasiswa);
echo $data;



//json encode mengakses Database
// $dbh = new PDO('mysql:host=localhost;dbname=university', 'root', '');
// $db = $dbh->prepare('SELECT * FROM student');
// $db->execute();
// $student = $db->fetchAll(PDO::FETCH_ASSOC);


// $data = json_encode($student);
// echo $data;

?>