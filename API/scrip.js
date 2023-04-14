fetch("https://jsonplaceholder.typicode.com/comments")

.then(response => response.json())
.then(datos => {
    let cad = '<tr><th>Usuario</th><th>Comentario</th></tr>';
    for (let usuario of datos) {
        cad += `<tr><td>${usuario.email}</td>
                    
                    <td>${usuario.body}</td></tr>`;
    }
    document.getElementById("tabla1").innerHTML = cad;
});