// Contoh 1
document.getElementById("text1").style.display = "block";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("text4").style.display = "none";
document.getElementById("btn1").style.display = "none";

function changeImage() {
    let displayImage = document.getElementById("gambar1");
    if (displayImage.src.match("img/Contoh1.png")) {
        displayImage.src = "img/Contoh2.png";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "block";
        document.getElementById("text3").style.display = "block";
        document.getElementById("text4").style.display = "block";
        document.getElementById("btn1").style.display = "block";

    } else {
        displayImage.src = "img/Contoh1.png";
        document.getElementById("text1").style.display = "block";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("btn1").style.display = "none";
    }
}

// Cek jawaban contoh 1
document.getElementById("text5").style.display = "none";
document.getElementById("btn2").style.display = "none";
var jawaban1 = document.getElementById("jawaban1");
var jawaban2 = document.getElementById("jawaban2");
var a = []
document.getElementById("btn1").addEventListener("click", function () {

    if (jawaban1.value == 6) {
        jawaban1.classList.add("jawabpecahanbenar")
        jawaban1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        jawaban1.classList.remove("jawabpecahanbenar")
        jawaban1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (jawaban2.value == 1) {
        jawaban2.classList.add("jawabpecahanbenar")
        jawaban2.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        jawaban2.classList.remove("jawabpecahanbenar")
        jawaban2.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    if (a[1] == true && a[2] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';

        document.getElementById("text5").style.display = "block";
        document.getElementById("alertHasil2").style.display = "block";
        document.getElementById("btn2").style.display = "block";
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text5").style.display = "none";
        document.getElementById("alertHasil2").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
})

var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");

document.getElementById("btn2").addEventListener("click", function () {
    if (pembilang1.value == 1) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (penyebut1.value == 6) {
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    if (a[3] == true && a[4] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';

    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
    }
})


// Contoh 2
document.getElementById("btn4").style.display = "none";
document.getElementById("text6").style.display = "none";
var pembilang2 = document.getElementById("pembilang2");
var pembilang3 = document.getElementById("pembilang3");
var penyebut2 = document.getElementById("penyebut2");
var penyebut3 = document.getElementById("penyebut3");

document.getElementById("btn3").addEventListener("click", function () {

    if (pembilang2.value == 1) {
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

    if (pembilang3.value == 2) {
        pembilang3.classList.add("jawabpecahanbenar")
        pembilang3.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        pembilang3.classList.remove("jawabpecahanbenar")
        pembilang3.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (penyebut3.value == 3) {
        penyebut3.classList.add("jawabpecahanbenar")
        penyebut3.classList.remove("jawabpecahansalah")
        a[8] = true;

    } else {
        penyebut3.classList.remove("jawabpecahanbenar")
        penyebut3.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    if (a[5] == true && a[6] == true && a[7] == true && a[8] == true) {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
        document.getElementById("btn4").style.display = "inline";

    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("btn4").style.display = "none";
    }
})

document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("text6").style.display = "block";
    document.getElementById("btn6").style.display = "none";
})

document.getElementById("text7").style.display = "none";
document.getElementById("gambarHasil").style.display = "none";
var jawaban3 = document.getElementById("jawaban3");
var jawaban4 = document.getElementById("jawaban4");

document.getElementById("btn5").addEventListener("click", function () {
    if (jawaban3.value == 2) {
        jawaban3.classList.add("jawabpecahanbenar")
        jawaban3.classList.remove("jawabpecahansalah")
        a[9] = true;

    } else {
        jawaban3.classList.remove("jawabpecahanbenar")
        jawaban3.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (jawaban4.value == 9) {
        jawaban4.classList.add("jawabpecahanbenar")
        jawaban4.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        jawaban4.classList.remove("jawabpecahanbenar")
        jawaban4.classList.add("jawabpecahansalah")
        a[10] = false;
    }


    if (a[9] == true) {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Ada ' + '<strong>' + jawaban3.value + '</strong>' + ' kotak yang warnanya saling berhimpitan' +
            '</div>';
    } else {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + '<strong>' + jawaban3.value + '</strong>' + ' salah, coba perhatikan lagi animasi di atas!' +
            '</div>';
    }

    if (a[10] == true) {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jumlah semua kotak ada ' + '<strong>' + jawaban4.value +
            '</div>';

    } else {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + '<strong>' + jawaban4.value + '</strong>' + ' salah, coba perhatikan lagi animasi di atas!' +
            '</div>';
    }

    if (a[9] == true && a[10] == true) {
        document.getElementById("text7").style.display = "block";
        document.getElementById("btn6").style.display = "block";
        document.getElementById("text8").style.display = "none";
        document.getElementById("gambarHasil").style.display = "block";
    }
})


var pembilang4 = document.getElementById("pembilang4");
var penyebut4 = document.getElementById("penyebut4");

document.getElementById("btn6").addEventListener("click", function () {
    if (pembilang4.value == 2) {
        pembilang4.classList.add("jawabpecahanbenar")
        pembilang4.classList.remove("jawabpecahansalah")
        a[11] = true;

    } else {
        pembilang4.classList.remove("jawabpecahanbenar")
        pembilang4.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    if (penyebut4.value == 9) {
        penyebut4.classList.add("jawabpecahanbenar")
        penyebut4.classList.remove("jawabpecahansalah")
        a[12] = true;

    } else {
        penyebut4.classList.remove("jawabpecahanbenar")
        penyebut4.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    if (a[11] == true && a[12] == true) {
        document.getElementById("alertHasil6").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';

        document.getElementById("text8").style.display = "table-cell";
    } else {
        document.getElementById("alertHasil6").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';

        document.getElementById("text8").style.display = "none";
    }
})