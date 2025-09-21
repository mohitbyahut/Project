let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerText = inp.value;
    ul.appendChild(list);
    inp.value = ""


    let btnDel = document.createElement("button");
    btnDel.innerText = "Delete";
    btnDel.classList.add = "dls";
   list.appendChild(btnDel);  
})


ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
    }
    
})