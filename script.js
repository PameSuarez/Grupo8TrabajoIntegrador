const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "https://jsonplaceholder.typicode.com/comments" })

.done(function (comments) {
 
    console.log(comments)

    comments.forEach((comment) => {

        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(` Nombre: ${comment.name}, Comentario: ${comment.body}`)
        );
        templateUL.appendChild(elem);
    });
    HTMLResponse.appendChild(templateUL);

}
)