


function salvarPergunta(){

   let dados = localStorage.getItem('login')
   dados = dados.split(',')
    console.log(dados[2])

 let Atitulo = $(document.getElementById('titulo')).val()
 let Amessage = $(document.getElementById('message')).val()


    const data = { titulo: Atitulo, subtitulo:Amessage, autor_da_pergunta:localStorage.getItem("login").split(",")[2],data:dataAtualFormatada() };

    fetch('http://localhost:3001/perguntas', {
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

function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}