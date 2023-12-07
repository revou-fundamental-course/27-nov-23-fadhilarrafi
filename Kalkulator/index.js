

let a;
let b;
let c;
let res;

let x;
let y;
let resL;
document.getElementById("sButton").onclick = function(){
    a = document.getElementById("textA").value;
    a = Number(a);

    b = document.getElementById("textB").value;
    b = Number(b);

    c = document.getElementById("textC").value;
    c = Number(c);

    res = a + b + c;

    document.getElementById("resolution").innerHTML = "Hasil = " + res;
}

document.getElementById("rButton").onclick = function(){
    document.getElementById("textA").value = '';
    document.getElementById("textB").value = '';
    document.getElementById("textC").value = '';
 
    document.getElementById("resolution").innerHTML = '';

}

document.getElementById("sButton2").onclick = function(){
    x = document.getElementById("textX").value;
    x = Number(x);

    y = document.getElementById("textY").value;
    y = Number(y);

    resL = x * y / 2;

    document.getElementById("resolutionLuas").innerHTML = "Hasil = " + resL


}

document.getElementById("rButton2").onclick = function(){
    document.getElementById("textX").value = '';
    document.getElementById("textY").value = '';
 
    document.getElementById("resolutionLuas").innerHTML = '';

}
function toggleKeliling(){
    var kel = document.getElementById("keliling");
    var luas1 = document.getElementById("luas");

    kel.style.display = "block";
    luas1.style.display = "none";

}
function toggleLuas(){
    var luas1 = document.getElementById("luas");
    var kel = document.getElementById("keliling");

    luas1.style.display = "block";
    kel.style.display = "none";

}