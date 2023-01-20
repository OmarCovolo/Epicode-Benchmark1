
let checkbx = document.getElementById("#checkme");
let bottone = document.getElementById("#btn");
checkbx.onchange = function(){
if(checkbx.checked){
   bottone.disabled = false;
} else {
   bottone.disabled = true;
}

}