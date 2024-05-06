const scriptURL = "https://script.google.com/macros/s/AKfycbzBBS7m6rPKizKLh4RoPkNeEUoDN9zkBSR1bAzpTb7fIpe0rTs_7DBbbgqiwcQvFXjk/exec"


  $('#form').on('submit',e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}) 
    .then(response =>{ 
        $('.notif').css('display','grid');
         $('#form')[0].reset();
         function hapus(){
            $('.notif').html("").css('display','none')}setTimeout(hapus,5000)
      });
  });