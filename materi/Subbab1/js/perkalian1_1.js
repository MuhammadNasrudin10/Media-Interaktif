// Contoh 1 Nomor 1
var jawaban = document.getElementById("jawaban");
var a = [];
document.getElementById("cekJawaban").addEventListener("click", function () {

    if (jawaban.value == 6) {
        jawaban.classList.add("jawabpecahanbenar")
        jawaban.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        jawaban.classList.remove("jawabpecahanbenar")
        jawaban.classList.add("jawabpecahansalah")
        a[2] = false;

    }
    if (a[2] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu ' + '<strong>' + jawaban.value + '</strong>' + ' sudah benar!' +
            '</div>';
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + '<strong>' + jawaban.value + '</strong>' + ' masih salah, coba lagi ya!'
        '</div>';
    }
})

// Contoh 1 Nomor 2
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");
document.getElementById("btn1").addEventListener("click", function () {

    if (pembilang1.value == 2 && penyebut1.value == 5) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[3] = false;
    }
    if (a[3] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih salah, coba lagi ya!'
        '</div>';
    }
})

// Contoh 2 Nomor 2
var pembilang2 = document.getElementById("pembilang2");
var penyebut2 = document.getElementById("penyebut2");
document.getElementById("btn2").addEventListener("click", function () {

    if (pembilang2.value == 8 && penyebut2.value == 3) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[4] = false;
    }
    if (a[4] == true) {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih salah, coba lagi ya!'
        '</div>';
    }
})