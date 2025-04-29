//input
document.getElementById("btn").addEventListener("click", cnv);
function cnv() {
    var ftTemp = +document.getElementById("fa temp").value;
//process
    let tempC = (ftTemp - 32) *(5 / 9);
    //output
    document.getElementById("output").innerHTML = tempC;
    
}
