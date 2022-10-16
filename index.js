let gen = document.getElementById("generate")
let fblock = document.getElementById("firstblock")
let copyButton = document.getElementById("copy-button")
let input = document.getElementById("input-number")
let copiedText = document.getElementById("copied")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ""


function generate(){
    password = " "

    for (let i = 0; i < input.value; i++){
        let random1 = Math.floor(Math.random()*characters.length)
        password += characters[random1]

    }
    fblock.innerText = password
    copiedText.innerText = ""

}
gen.addEventListener("click", function(){
    generate()
})


copyButton.addEventListener("click", async (event)=>{
    let input = fblock.textContent;
    await navigator.clipboard.writeText(input);
    copiedText.innerText = "Copied"
})
