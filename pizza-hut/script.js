function tampilkanSemuaMenu(){
    $.getJSON('pizza.json', function(data){
        // cek apakah berhasil ambil data json.
        // console.log(data)
    
        let menu = data.menu;
    
        $.each(menu, function(i, data){
            // console.log(i); tampilin index
            // console.log(data) tampilin data
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card-body"><img src="img/pizza/' + data.gambar +'" class="card-img-top"alt="..."><h5 class="card-title">' + data.nama+'</h5><p class="card-text"> ' + data.deskripsi +' </p><h5 class="card-title"> ' + data.harga +' </h5><a href="' + data.link +'" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        });
    
    });
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');


    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function ( i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card-body"><img src="img/pizza/' + data.gambar +'" class="card-img-top"alt="..."><h5 class="card-title">' + data.nama+'</h5><p class="card-text"> ' + data.deskripsi +' </p><h5 class="card-title"> ' + data.harga +' </h5><a href="' + data.link +'" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        });

        
    $('#daftar-menu').html(content);
    });
});