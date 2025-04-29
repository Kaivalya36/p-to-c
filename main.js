
document.getElementById("btn").addEventListener("click", cnv);
function cnv() {
    var ftTemp = +document.getElementById("fa temp").value;

    let tempC = (ftTemp - 32) *(5 / 9);
    document.getElementById("output").innerHTML = tempC;
    
}
