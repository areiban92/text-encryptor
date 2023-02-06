let inputText = document.querySelector(".input-text");
let encryptButton = document.querySelector(".encrypt-btn");
let decryptButton = document.querySelector(".decrypt-btn");

let informativeArea = document.querySelector(".informative-area");
let informativeImage = document.querySelector(".informative-image");
let informativeMessages = document.querySelector(".informative-messages");

let showText = document.querySelector(".show-text");
let copyButton = document.querySelector(".copy-btn");

encryptButton.onclick = function(){
    text = inputText.value;

    if(text !== ""){
        let encryptedText = encrypt(text);
        deleteInformativeContent();
        printText(encryptedText);
        showCopyButton();
    }
}

decryptButton.onclick = function(){
    text = inputText.value;

    if(text !== ""){
        let decryptedText = decrypt(text);
        deleteInformativeContent();
        printText(decryptedText);
        showCopyButton();
    }
}

copyButton.onclick = function(){
    copyText();
    
    showInformativeContent();
    clearInputText();
}

function encrypt(text){
    let encryptedText = "";
    for(let iterator = 0; iterator < text.length; iterator++){
        switch(text[iterator]){
            case "e":
                encryptedText += "enter";
                break;

            case "i":
                encryptedText += "imes";
                break;
            
            case "a":
                encryptedText += "ai";
                break;
            
            case "o":
                encryptedText += "ober";
                break;
            
            case "u":
                encryptedText += "ufat";
                break;
            
            default:
                encryptedText += text[iterator];
                break;
        }
    }
    return encryptedText;
}

function decrypt(text){
    let decryptedText = "";
    let words = ["enter", "imes", "ai", "ober", "ufat"];
    let letters = ["e", "i", "a", "o", "u"];
    for(let iterator = 0; iterator < words.length; iterator++){
        decryptedText = text.replaceAll(words[iterator], letters[iterator]);
        text = decryptedText;
    }
    return decryptedText;
}

function deleteInformativeContent(){
    informativeImage.style.display = "none";
    informativeMessages.style.display = "none";
}

function showInformativeContent(){
    showText.style.display = "none";
    copyButton.style.display = "none";

    //Show informative image if the display is greater or equal to 1100px of wide
    if(window.screen.width >= 1100){
        informativeImage.style.display = "block";
    }
    informativeMessages.style.display = "block";
}

function showCopyButton(){
    copyButton.style.display = "block";
}

function printText(text){
    showText.value = text;
    showText.style.display = "block";
}

function copyText(){
    navigator.clipboard.writeText(showText.value);
    alert("Texto copiado con éxito!!");
    /*inputText.value = showText.value;*/
}

function clearInputText(){
    inputText.value = "";
}