let inputText = document.getElementById('usrtxt');
let finalText = document.getElementById('outText');

const ENCRYPTION_KEY = {
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
};

document.getElementById("out-box").style.display = "none";
document.getElementById("copButt").style.display = "none";

function encrypt(){ 
   if(inputText.value == ""){
    return
   } else { let encText = (inputText.value).replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
   finalText.innerText = encText
   displayOut();
   document.getElementById('usrtxt').value = '';
   document.getElementById("cop").value= "Copiar";
   }
}

function decrypt(){
    if(inputText.value == ""){
        return
    } else { 
        var decText = inputText.value;
        console.log(decText)
        for (const key in ENCRYPTION_KEY) {
            console.log(ENCRYPTION_KEY[key])
            decText = decText.replaceAll(ENCRYPTION_KEY[key],key);
        }
    }    
    finalText.innerText = decText
    displayOut();
    document.getElementById('usrtxt').value = '';
    document.getElementById("cop").value= "Copiar";
} 


function coppy(){
    navigator.clipboard.writeText(finalText.textContent)
    document.getElementById("cop").value= "Copiado";
}

function displayOut() {
    document.getElementById("imgCont").style.display = "none";
    document.getElementById("outMsj").style.display = "none";
    document.getElementById("out-box").style.display = "block";
    document.getElementById("copButt").style.display = "block";
}