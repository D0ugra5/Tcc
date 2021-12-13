


function salvarPergunta(){

   let dados = localStorage.getItem('login')
   dados = dados.split(',')
    console.log(dados[2])

 let Atitulo = $(document.getElementById('titulo')).val()
 let Amessage = $(document.getElementById('message')).val()


    const data = { titulo: Atitulo, subtitulo:Amessage };

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