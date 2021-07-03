function loadImg(source){
    var displayAct = document.getElementById("detail");
    displayAct.src = source;
    document.getElementById("detail-bg").style.display = "block";
}

function exitView(){
    document.getElementById("detail-bg").style.display = "none";
}