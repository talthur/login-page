
const optionYear = document.querySelector(".select-ano");
const loginButton = document.querySelector(".login-button");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Http = new XMLHttpRequest;
const urlLogin = "http://localhost:8080/login"

window.addEventListener("load", ()=>{

    for(let i = 2021; i>1900; i--){
        let option = document.createElement("option");
        option.innerHTML = i;
        optionYear.append(option);
    }

})

loginButton.addEventListener("click", ()=>{

    alert("funfando")

    let data = {
        username:username,
        password:password
    }

    fetch(urlLogin, data).then(res=>{console.log(res)}).catch(error=>console.log(error))



})

