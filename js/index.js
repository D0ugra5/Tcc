function mostraPerguntas(){



    (async () => {
        const rawResponse = await fetch('http://localhost:3001/perguntas', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
        });
        const resp = await rawResponse.json();

            for(let i=0; i<resp.length; i++){
                console.log(resp[i].titulo)
                  document.getElementById('post-perguntas').innerHTML += "<a href='post.html'> <h2 id='titulo' class='post-title'>"+resp[i].titulo+"</h2><h3 id='subtitulo' class='post-subtitle'>"+resp[i].subtitulo+"</h3></a><p id='data' class='post-meta'>Posted by <a id='autor' href='#!'>"+resp[i].autor_da_pergunta+" </a>"+resp[i].data+" </p></div><!-- Divider--><hr class='my-4' />"
            }
     
     

       

    })();




  

    

}


$(window).on("load", function(){

    mostraPerguntas();

})