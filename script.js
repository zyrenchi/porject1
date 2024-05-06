const scriptURL = "https://script.google.com/macros/s/AKfycbwOEyC9AC18RJe259lahIzuqQZGxeXxWTbefzJdqYjHttHhXthF9rJ5t6sCfbhGT27w9g/exec";



  $('#form').on('submit',e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}) 
    .then(response =>{ 
      $('#form')[0].reset();
      $('.pesan-rating').html("Terima Kasih Telah Memberi masukan");
      function hapus(){
          $('.pesan-rating').html("")}setTimeout(hapus,5000);
      });
  });