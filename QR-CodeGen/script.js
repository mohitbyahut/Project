let input = document.getElementById("qr-input");
let button = document.getElementById("qr-button");
let img = document.getElementById("qr-img");


button.addEventListener("click", () => {
    let inputValue = input.value;
    console.log(inputValue);


    if(!inputValue){
        alert("Please enter a valid URL")
        return;
    }else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${inputValue}`;
        img.alt = `QR code for ${inputValue}`;
    }
})