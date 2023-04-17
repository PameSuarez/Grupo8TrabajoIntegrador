/*const style = document.createElement('style');

  style.textContent = `
    #box {
      width: 100px;
      height: 100px;
      background-color: salmon;
      color: white;
    }
  
    body {
      background-color: lightgrey;
    }
  `;
  
  document.head.appendChild(style);*/

const HTMLResponse1 = document.querySelector("#coment1");
const HTMLResponse2 = document.querySelector("#coment2");
const HTMLResponse3 = document.querySelector("#coment3");
const HTMLResponse4 = document.querySelector("#coment4");
const comentarios = [];
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "https://jsonplaceholder.typicode.com/comments" })

 
  .done(function (users) {
   
    users.forEach((user) => {

        
      let elem = document.createElement("div");
      elem.appendChild(
        document.createTextNode(
          `Cliente: ${user.name}, Comentario: ${user.body}`
        )
        );
        comentarios.push(elem);
      
    });
 
    HTMLResponse1.appendChild(comentarios[0]);
    HTMLResponse2.appendChild(comentarios[1]);
    HTMLResponse3.appendChild(comentarios[3]);
    HTMLResponse4.appendChild(comentarios[2]);
    
  });

  