/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 * 
 */
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function CloseLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('hide');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
   const email2 = $(document.getElementById("email")).val();
   const senha2 = $(document.getElementById("password")).val();
   

    (async () => {
        const rawResponse = await fetch('http://localhost:3001/usuario?email='+email2+'&senha='+senha2+'', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
        });
        const content = await rawResponse.json();
        if(content == content.length) return shakeModal();
        
        CloseLoginModal()
        
        const {0:{email,senha,nome}} = content

        localStorage.setItem("login", [email,senha,nome])


        console.log(localStorage.getItem("login").split(","));
        location. reload() 
      })();

    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
 
}
$(window).on("load", function(){
    if(localStorage.getItem("login")) {
        $(document.getElementById("loginLi")).hide()
       
        $(document.getElementById("img-login")).show();
    }else{
        $(document.getElementById("img-login")).hide();
    }


        function  carregaPerguntas(){



            (async () => {
                const rawResponse = await fetch('http://localhost:3001/perguntas/1', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  
                });


                const resp = await rawResponse.json();
                console.log(resp)
                const{titulo,subtitulo,data,autor_da_pergunta} = resp;

                $(document.getElementById("titulo")).text(titulo)
                $(document.getElementById("subtitulo")).text(subtitulo)
                $(document.getElementById("data")).text("Postada em "+data+"")
                $(document.getElementById("autor")).text(autor_da_pergunta)

            })();

        }

        carregaPerguntas()

 });


 async function  CreateAccount(){
    const emailSite = $(document.getElementById("emailCreate")).val();
    const senhaSite = $(document.getElementById("passwordCreate")).val();
    const confirmaSenhaSite = $(document.getElementById("password_confirmation")).val();

    if(senhaSite != confirmaSenhaSite || emailSite == '' || senhaSite == '' || confirmaSenhaSite=='') return shakeModal()
         const resp = await fetch('http://localhost:3001/usuario', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: emailSite, senha: confirmaSenhaSite})
        });

     const resposta = await resp.json();
        if(resposta == resposta.length) return shakeModal()
       
    console.log(resposta)
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

   