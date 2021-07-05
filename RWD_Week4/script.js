function loadImg(source){
    var displayAct = document.getElementById("detail");
    displayAct.src = source;
    document.getElementById("detail-bg").style.display = "flex";
}

function exitView(){
    document.getElementById("detail-bg").style.display = "none";
}