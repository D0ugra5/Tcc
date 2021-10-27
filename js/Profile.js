


function getUsuario(){

  let infos =   localStorage.getItem("login")
 infos = infos.split(",");

 const email2 = infos[0]
 const senha2 = infos[1];

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
        
        const {0:{email,senha,nome,Sobrenome,profissao,Github,linkedin}} = content

            console.log(email,senha,nome,Sobrenome,profissao,Github,linkedin)
            $(document.getElementById("nome")).text(nome)
            $(document.getElementById("profissao")).text(profissao)
            $(document.getElementById("github")).text(Github)
            $(document.getElementById("link")).text(linkedin)
            $(document.getElementById("nomeCompleto")).text(""+nome+"  "+Sobrenome+"")
            $(document.getElementById("email")).text(email)
            $(document.getElementById("profissaoList")).text(profissao)

            
       
      })();

    

}


$(window).on("load", function(){

    getUsuario();
  })