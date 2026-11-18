// CONTOH 1

document.getElementById("btn2").style.display = "none";
document.getElementById("btn4").style.display = "none";
document.getElementById("text1").style.display = "none";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("text-akhir1").style.display = "none";



var a = [];
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");


document.getElementById("btn1").addEventListener("click", function () {
    if (pembilang1.value == 1) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (penyebut1.value == 2) {
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[2] = false;
    }
    // alert benar salah
    if (a[1] == true && a[2] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("btn2").style.display = "inline";
        document.getElementById("text1").style.display = "block";
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("btn2").style.display = "none";
        document.getElementById("text1").style.display = "none";
    }
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("text2").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
});

var jawaban1 = document.getElementById("jawaban1");

document.getElementById("btn3").addEventListener("click", function () {
    if (jawaban1.value == 1) {
        jawaban1.classList.add("jawabpecahanbenar")
        jawaban1.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        jawaban1.classList.remove("jawabpecahanbenar")
        jawaban1.classList.add("jawabpecahansalah")
        a[3] = false;
    }
    // alert benar salah
    if (a[3] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Maka ada 1/4 dari 1/2 bagian' +
            '</div>';
        document.getElementById("btn4").style.display = "block";
        document.getElementById("btn3").style.display = "none";
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban1.value + ' masih salah, coba perhatikan lagi animasi diatas!' +
            '</div>';
        document.getElementById("btn4").style.display = "none";
        document.getElementById("btn3").style.display = "block";
    }
});

document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("text3").style.display = "block";
    document.getElementById("btn4").style.display = "none";
});

var jawaban2 = document.getElementById("jawaban2");

document.getElementById("btn5").addEventListener("click", function () {
    if (jawaban2.value == 8) {
        jawaban2.classList.add("jawabpecahanbenar")
        jawaban2.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        jawaban2.classList.remove("jawabpecahanbenar")
        jawaban2.classList.add("jawabpecahansalah")
        a[4] = false;
    }
    // alert benar salah
    if (a[4] == true) {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Total semua ada 8 kotak' +
            '</div>';
        document.getElementById("text-akhir1").style.display = "block";
    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban2.value + ' masih salah, coba perhatikan lagi animasi diatas!' +
            '</div>';
        document.getElementById("text-akhir1").style.display = "none";
    }
});


// CONTOH 2
document.getElementById("btn7").style.display = "none";
document.getElementById("btn9").style.display = "none";
document.getElementById("text4").style.display = "none";
document.getElementById("text5").style.display = "none";
document.getElementById("text6").style.display = "none";
document.getElementById("text-akhir2").style.display = "none";

var pembilang2 = document.getElementById("pembilang2");
var penyebut2 = document.getElementById("penyebut2");

document.getElementById("btn6").addEventListener("click", function () {
    if (pembilang2.value == 2) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        a[5] = true;

    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (penyebut2.value == 3) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[6] = false;
    }
    // alert benar salah
    if (a[5] == true && a[6] == true) {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("text4").style.display = "block";
        document.getElementById("btn7").style.display = "inline";
    } else {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text4").style.display = "none";
        document.getElementById("btn7").style.display = "none";
    }
});

document.getElementById("btn7").addEventListener("click", function () {
    document.getElementById("text5").style.display = "block";
    document.getElementById("btn6").style.display = "none";
    document.getElementById("btn7").style.display = "none";
});

var jawaban3 = document.getElementById("jawaban3");

document.getElementById("btn8").addEventListener("click", function () {
    if (jawaban3.value == 2) {
        jawaban3.classList.add("jawabpecahanbenar")
        jawaban3.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        jawaban3.classList.remove("jawabpecahanbenar")
        jawaban3.classList.add("jawabpecahansalah")
        a[7] = false;
    }
    // alert benar salah
    if (a[7] == true) {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Ada 2 total kotak yang terarsir' +
            '</div>';
        document.getElementById("btn8").style.display = "none";
        document.getElementById("btn9").style.display = "block";
    } else {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban3.value + ' masih salah, coba perhatikan lagi animasi diatas!' +
            '</div>';
        document.getElementById("btn8").style.display = "block";
        document.getElementById("btn9").style.display = "none";
    }
});

document.getElementById("btn9").addEventListener("click", function () {
    document.getElementById("text6").style.display = "block";
    document.getElementById("btn9").style.display = "none";
});

var jawaban4 = document.getElementById("jawaban4");

document.getElementById("btn10").addEventListener("click", function () {
    if (jawaban4.value == 6) {
        jawaban4.classList.add("jawabpecahanbenar")
        jawaban4.classList.remove("jawabpecahansalah")
        a[8] = true;

    } else {
        jawaban4.classList.remove("jawabpecahanbenar")
        jawaban4.classList.add("jawabpecahansalah")
        a[8] = false;
    }
    // alert benar salah
    if (a[8] == true) {
        document.getElementById("alertHasil6").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Total semua ada 6 kotak' +
            '</div>';
        document.getElementById("text-akhir2").style.display = "block";
    } else {
        document.getElementById("alertHasil6").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban4.value + ' masih salah, coba perhatikan lagi animasi diatas!' +
            '</div>';
        document.getElementById("text-akhir2").style.display = "none";
    }
});