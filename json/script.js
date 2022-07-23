let mahasiswa = {
    "nama"  : "Rizky Hertama",
    "NIM"   : 2440062483,
    "email" : "rizky.hertama@binus.ac.id"
}

////JSON.stringify
// console.log(JSON.stringify(mahasiswa));

////JSON.parse (vanila js)
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();


$.getJSON('coba.json', function(data){
    console.log(data);
});