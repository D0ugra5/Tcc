    // titulo

    // subtitulo

    // autor




    function PegaPergunta(){
    
    (async () => {
        const rawResponse = await fetch('http://localhost:3001/perguntas/'+localStorage.getItem('pergunta')+'', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
        });
        const resp = await rawResponse.json();

        $(document.getElementById("titulo")).text(resp.titulo)
        $(document.getElementById("subtitulo")).text(resp.subtitulo)
        $(document.getElementById("autor")).text("Perguntado por "+resp.autor_da_pergunta)

    })();
 
    }

    function FazPergunta(){


        let Atitulo = $(document.getElementById('tituloResposta')).val()
        let Amessage = $(document.getElementById('subtituloResposta')).val()
       
       
           const data = { titulo: Atitulo, subtitulo:Amessage,
             id_pergunta:localStorage.getItem("pergunta"), autor_pergunta:localStorage.getItem("login").split(",")[2], Like:0, data:dataAtualFormatada() };
       
           fetch('http://localhost:3001/resposta', {
             method: 'POST', // or 'PUT'
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(data),
           })
           .then(response => response.json())
           .then(data => {
             console.log('Success:', data);
           })
           .catch((error) => {
             console.error('Error:', error);
           });
         

    }

  function  mostraResposta(){


     

    (async () => {
        const rawResponse = await fetch('http://localhost:3001/resposta/?id_pergunta='+localStorage.getItem("pergunta")+'', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
        });
        const resp = await rawResponse.json();

        console.log(resp)
                
            for(let i=0; i<resp.length; i++){
               
                document.getElementById("multiplaResp").innerHTML +=
                '<div class="card mt-4">'
                +'<div class="card-header">'
                +'Respondida Por '+resp[i].autor_pergunta+'  Resposta feita em '+resp[i].data+''
                +' </div>'
                +'<div class="card-body">'
                +' <h5 class="card-title">'+resp[i].titulo+'</h5>'
                +'<p class="card-text">'+resp[i].subtitulo+'</p>'
                +'<div class="div-like">'
                +'<a onClick="ChamaLike('+resp[i].id+')">'
                +'<img id="like" src="assets/img/love.png" alt="">'
                +''+resp[i].Like+''
                +'</a>'
                                              
                +'</div>'
                +'</div>'
                +'</div>  '
            }

 })();
    
    }

   function ChamaLike(idPergunta){



   }
function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
  }


    $(window).on("load", function(){

    PegaPergunta();
    mostraResposta();
    })