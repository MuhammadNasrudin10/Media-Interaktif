document.getElementById("text1").style.display = "none";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("text4").style.display = "none";
document.getElementById("btn2").style.display = "none";
document.getElementById("btn4").style.display = "none";
document.getElementById("gambarHasil1").style.display = "none";
document.getElementById("gambarHasil2").style.display = "none";

var a = [];
var pembilang1 = document.getElementById("pembilang1");
var pembilang2 = document.getElementById("pembilang2");
var penyebut1 = document.getElementById("penyebut1");
var penyebut2 = document.getElementById("penyebut2");

document.getElementById("btn1").addEventListener("click", function () {
    if (pembilang1.value == 3) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (penyebut1.value == 4) {
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    if (pembilang2.value == 1) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (penyebut2.value == 8) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    // alert benar salah
    if (a[1] == true && a[2] == true && a[3] == true && a[4] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("text1").style.display = "table-cell";
        document.getElementById("btn2").style.display = "inline";
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("text2").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
});

var jawaban1 = document.getElementById("jawaban1");
var jawaban2 = document.getElementById("jawaban2");

document.getElementById("btn3").addEventListener("click", function () {
    if (jawaban1.value == 24) {
        jawaban1.classList.add("jawabpecahanbenar")
        jawaban1.classList.remove("jawabpecahansalah")
        a[5] = true;

    } else {
        jawaban1.classList.remove("jawabpecahanbenar")
        jawaban1.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (jawaban2.value == 4) {
        jawaban2.classList.add("jawabpecahanbenar")
        jawaban2.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        jawaban2.classList.remove("jawabpecahanbenar")
        jawaban2.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    // alert benar salah
    if (a[5] == true && a[6] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("text3").style.display = "table-cell";
        document.getElementById("btn4").style.display = "inline";
        document.getElementById("gambarHasil1").style.display = "table-cell";
        document.getElementById("gambarHasil2").style.display = "table-cell";
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text3").style.display = "none";
        document.getElementById("btn4").style.display = "none";
        document.getElementById("gambarHasil1").style.display = "none";
        document.getElementById("gambarHasil2").style.display = "none";
    }
});

document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("text4").style.display = "block";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
});

var jawaban3 = document.getElementById("jawaban3");

document.getElementById("btn5").addEventListener("click", function () {
    if (jawaban3.value == 6) {
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
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawabannya adalah 6' +
            '</div>';
    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban3.value + ' masih salah, coba lagi ya!' +
            '</div>';
    }

});



// CONTOH 2
document.getElementById("text21").style.display = "none";
document.getElementById("text22").style.display = "none";
document.getElementById("text23").style.display = "none";
document.getElementById("text24").style.display = "none";
document.getElementById("btn22").style.display = "none";
document.getElementById("btn24").style.display = "none";
document.getElementById("gambarHasil21").style.display = "none";
document.getElementById("gambarHasil22").style.display = "none";
document.getElementById("textAkhir2").style.display = "none";

var pembilang21 = document.getElementById("pembilang21");
var pembilang22 = document.getElementById("pembilang22");
var penyebut21 = document.getElementById("penyebut21");
var penyebut22 = document.getElementById("penyebut22");

document.getElementById("btn21").addEventListener("click", function () {
    if (pembilang21.value == 3) {
        pembilang21.classList.add("jawabpecahanbenar")
        pembilang21.classList.remove("jawabpecahansalah")
        a[8] = true;

    } else {
        pembilang21.classList.remove("jawabpecahanbenar")
        pembilang21.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    if (penyebut21.value == 4) {
        penyebut21.classList.add("jawabpecahanbenar")
        penyebut21.classList.remove("jawabpecahansalah")
        a[9] = true;

    } else {
        penyebut21.classList.remove("jawabpecahanbenar")
        penyebut21.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (pembilang22.value == 1) {
        pembilang22.classList.add("jawabpecahanbenar")
        pembilang22.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        pembilang22.classList.remove("jawabpecahanbenar")
        pembilang22.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    if (penyebut22.value == 2) {
        penyebut22.classList.add("jawabpecahanbenar")
        penyebut22.classList.remove("jawabpecahansalah")
        a[11] = true;

    } else {
        penyebut22.classList.remove("jawabpecahanbenar")
        penyebut22.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    // alert benar salah
    if (a[8] == true && a[9] == true && a[10] == true && a[11] == true) {
        document.getElementById("alertHasil21").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("text21").style.display = "table-cell";
        document.getElementById("btn22").style.display = "inline";
    } else {
        document.getElementById("alertHasil21").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text21").style.display = "none";
        document.getElementById("btn22").style.display = "none";
    }
});

document.getElementById("btn22").addEventListener("click", function () {
    document.getElementById("text22").style.display = "block";
    document.getElementById("btn21").style.display = "none";
    document.getElementById("btn22").style.display = "none";
});

var jawaban21 = document.getElementById("jawaban21");
var jawaban22 = document.getElementById("jawaban22");

document.getElementById("btn23").addEventListener("click", function () {
    if (jawaban21.value == 6) {
        jawaban21.classList.add("jawabpecahanbenar")
        jawaban21.classList.remove("jawabpecahansalah")
        a[12] = true;

    } else {
        jawaban21.classList.remove("jawabpecahanbenar")
        jawaban21.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    if (jawaban22.value == 4) {
        jawaban22.classList.add("jawabpecahanbenar")
        jawaban22.classList.remove("jawabpecahansalah")
        a[13] = true;

    } else {
        jawaban22.classList.remove("jawabpecahanbenar")
        jawaban22.classList.add("jawabpecahansalah")
        a[13] = false;
    }

    // alert benar salah
    if (a[12] == true && a[13] == true) {
        document.getElementById("alertHasil22").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu benar ada 6 kotak berwarna kuning dan 4 kotak berwarna hijau' +
            '</div>';
        document.getElementById("text23").style.display = "table-cell";
        document.getElementById("btn24").style.display = "inline";
        document.getElementById("gambarHasil21").style.display = "table-cell";
        document.getElementById("gambarHasil22").style.display = "table-cell";
    } else {
        document.getElementById("alertHasil22").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text23").style.display = "none";
        document.getElementById("btn24").style.display = "none";
        document.getElementById("gambarHasil21").style.display = "none";
        document.getElementById("gambarHasil22").style.display = "none";
    }
});

document.getElementById("btn24").addEventListener("click", function () {
    document.getElementById("text24").style.display = "table-cell";
    document.getElementById("btn23").style.display = "none";
    document.getElementById("btn24").style.display = "none";
});

var jawaban23 = document.getElementById("jawaban23");
var pembilang23 = document.getElementById("pembilang23");
var penyebut23 = document.getElementById("penyebut23");

document.getElementById("btn25").addEventListener("click", function () {
    if (jawaban23.value == 1) {
        jawaban23.classList.add("jawabpecahanbenar")
        jawaban23.classList.remove("jawabpecahansalah")
        a[14] = true;

    } else {
        jawaban23.classList.remove("jawabpecahanbenar")
        jawaban23.classList.add("jawabpecahansalah")
        a[14] = false;
    }

    if (pembilang23.value == 2 && penyebut23.value == 4 || pembilang23.value == 1 && penyebut23.value == 2) {
        pembilang23.classList.add("jawabpecahanbenar")
        penyebut23.classList.add("jawabpecahanbenar")
        penyebut23.classList.remove("jawabpecahansalah")
        pembilang23.classList.remove("jawabpecahansalah")
        a[15] = true;

    } else {
        pembilang23.classList.remove("jawabpecahanbenar")
        penyebut23.classList.remove("jawabpecahanbenar")
        pembilang23.classList.add("jawabpecahansalah")
        penyebut23.classList.add("jawabpecahansalah")
        a[15] = false;
    }

    // alert benar salah
    if (a[14] == true && a[15] == true) {
        document.getElementById("alertHasil23").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu benar semua' +
            '</div>';
        document.getElementById("textAkhir2").style.display = "table-cell";
    } else {
        document.getElementById("alertHasil23").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
    }

});