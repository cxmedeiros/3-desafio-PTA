var color = ["#292929", "#F2F2F2", "#C7C7C7"];
var text = ["Background:  #292929", "Background:  #F2F2F2", "Background:  #C7C7C7"];
var i = 0;

function changeColor() {
    var col = document.getElementById("body");
    if (i >= color.length){
        i=0;
    }
    col.style.backgroundColor = color[i];
    document.getElementById("text").textContent = text[i];
    i++;
}
