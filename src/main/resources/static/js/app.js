
const optionYear = document.querySelector(".select-ano");

window.addEventListener("load", ()=>{

    for(let i = 2021; i>1900; i--){
        let option = document.createElement("option");
        option.innerHTML = i;
        optionYear.append(option);
    }

})