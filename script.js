let users = [];

function adicionarUsuarios(){
    let template = users.map(user => `<li>${user}</li>`).join(`\n`);
    document.querySelector("ul").innerHTML = template;
}

/*adicionarUsuarios();*/

let btnAdd = document.querySelector("button");

let input = document.querySelector("input");

btnAdd.addEventListener("click", () =>{
    users.push(input.value);
    input.value = "";
    adicionarUsuarios();
});

