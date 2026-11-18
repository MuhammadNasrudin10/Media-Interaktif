// Soal menggunakan langkah

var a = [];
var asli1 = document.getElementById("asli1");
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");
var pembilang2 = document.getElementById("pembilang2");
var penyebut2 = document.getElementById("penyebut2");
var pembilang3 = document.getElementById("pembilang3");
var penyebut3 = document.getElementById("penyebut3");
var pembilang4 = document.getElementById("pembilang4");
var penyebut4 = document.getElementById("penyebut4");
var pembilang5 = document.getElementById("pembilang5");
var penyebut5 = document.getElementById("penyebut5");
var pembilang6 = document.getElementById("pembilang6");
var penyebut6 = document.getElementById("penyebut6");
var pembilang7 = document.getElementById("pembilang7");
var penyebut7 = document.getElementById("penyebut7");
var pembilang8 = document.getElementById("pembilang8");
var penyebut8 = document.getElementById("penyebut8");

document.getElementById("btn1").addEventListener("click", function () {
    // Tahap 1
    if (pembilang1.value == 3 && penyebut1.value == 6 || pembilang1.value == 1 && penyebut1.value == 2) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")

        a[1] = true;
    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    // Tahap 2
    if (pembilang2.value == 3) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        a[2] = true;
    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    if (penyebut2.value == 2) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[3] = true;
    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (asli1.value == 3) {
        asli1.classList.add("jawabpecahanbenar")
        asli1.classList.remove("jawabpecahansalah")
        a[4] = true;
    } else {
        asli1.classList.remove("jawabpecahanbenar")
        asli1.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    // Tahap 3
    if (pembilang3.value == 3) {
        pembilang3.classList.add("jawabpecahanbenar")
        pembilang3.classList.remove("jawabpecahansalah")
        a[5] = true;
    } else {
        pembilang3.classList.remove("jawabpecahanbenar")
        pembilang3.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (penyebut3.value == 2) {
        penyebut3.classList.add("jawabpecahanbenar")
        penyebut3.classList.remove("jawabpecahansalah")
        a[6] = true;
    } else {
        penyebut3.classList.remove("jawabpecahanbenar")
        penyebut3.classList.add("jawabpecahansalah")
        a[6] = false;
    }
    if (pembilang4.value == 3) {
        pembilang4.classList.add("jawabpecahanbenar")
        pembilang4.classList.remove("jawabpecahansalah")
        a[7] = true;
    } else {
        pembilang4.classList.remove("jawabpecahanbenar")
        pembilang4.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (penyebut4.value == 1) {
        penyebut4.classList.add("jawabpecahanbenar")
        penyebut4.classList.remove("jawabpecahansalah")
        a[8] = true;
    } else {
        penyebut4.classList.remove("jawabpecahanbenar")
        penyebut4.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    // Tahap 4
    if (pembilang5.value == 3) {
        pembilang5.classList.add("jawabpecahanbenar")
        pembilang5.classList.remove("jawabpecahansalah")
        a[9] = true;
    } else {
        pembilang5.classList.remove("jawabpecahanbenar")
        pembilang5.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (penyebut5.value == 2) {
        penyebut5.classList.add("jawabpecahanbenar")
        penyebut5.classList.remove("jawabpecahansalah")
        a[10] = true;
    } else {
        penyebut5.classList.remove("jawabpecahanbenar")
        penyebut5.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    if (pembilang6.value == 1) {
        pembilang6.classList.add("jawabpecahanbenar")
        pembilang6.classList.remove("jawabpecahansalah")
        a[11] = true;
    } else {
        pembilang6.classList.remove("jawabpecahanbenar")
        pembilang6.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    if (penyebut6.value == 3) {
        penyebut6.classList.add("jawabpecahanbenar")
        penyebut6.classList.remove("jawabpecahansalah")
        a[12] = true;
    } else {
        penyebut6.classList.remove("jawabpecahanbenar")
        penyebut6.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    // Tahap 5
    if (pembilang7.value == 3) {
        pembilang7.classList.add("jawabpecahanbenar")
        pembilang7.classList.remove("jawabpecahansalah")
        a[13] = true;
    } else {
        pembilang7.classList.remove("jawabpecahanbenar")
        pembilang7.classList.add("jawabpecahansalah")
        a[13] = false;
    }

    if (penyebut7.value == 6) {
        penyebut7.classList.add("jawabpecahanbenar")
        penyebut7.classList.remove("jawabpecahansalah")
        a[14] = true;
    } else {
        penyebut7.classList.remove("jawabpecahanbenar")
        penyebut7.classList.add("jawabpecahansalah")
        a[14] = false;
    }

    // Tahap 6
    if (pembilang8.value == 1) {
        pembilang8.classList.add("jawabpecahanbenar")
        pembilang8.classList.remove("jawabpecahansalah")
        a[15] = true;
    } else {
        pembilang8.classList.remove("jawabpecahanbenar")
        pembilang8.classList.add("jawabpecahansalah")
        a[15] = false;
    }

    if (penyebut8.value == 2) {
        penyebut8.classList.add("jawabpecahanbenar")
        penyebut8.classList.remove("jawabpecahansalah")
        a[16] = true;
    } else {
        penyebut8.classList.remove("jawabpecahanbenar")
        penyebut8.classList.add("jawabpecahansalah")
        a[16] = false;
    }

    // Alert Benar Salah
    if (a[1] == true && a[2] == true && a[3] == true && a[4] == true && a[5] == true && a[6] == true && a[7] == true && a[8] == true && a[9] == true && a[10] == true && a[11] == true && a[12] == true && a[13] == true && a[14] == true && a[15] == true && a[16] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});



// Soal Langsung Jawaban Akhir
var pembilangs1 = document.getElementById("pembilangs1");
var pembilangs2 = document.getElementById("pembilangs2");
var pembilangs3 = document.getElementById("pembilangs3");
var pembilangs4 = document.getElementById("pembilangs4");
var pembilangs5 = document.getElementById("pembilangs5");
var penyebuts1 = document.getElementById("penyebuts1");
var penyebuts2 = document.getElementById("penyebuts2");
var penyebuts3 = document.getElementById("penyebuts3");
var penyebuts4 = document.getElementById("penyebuts4");
var penyebuts5 = document.getElementById("penyebuts5");

document.getElementById("btn2").addEventListener("click", function () {
    // Soal1
    if (pembilangs1.value == 11) {
        pembilangs1.classList.add("jawabpecahanbenar")
        pembilangs1.classList.remove("jawabpecahansalah")
        a[17] = true;

    } else {
        pembilangs1.classList.remove("jawabpecahanbenar")
        pembilangs1.classList.add("jawabpecahansalah")
        a[17] = false;
    }

    if (penyebuts1.value == 12) {
        penyebuts1.classList.add("jawabpecahanbenar")
        penyebuts1.classList.remove("jawabpecahansalah")
        a[18] = true;

    } else {
        penyebuts1.classList.remove("jawabpecahanbenar")
        penyebuts1.classList.add("jawabpecahansalah")
        a[18] = false;
    }

    // Soal2
    if (pembilangs2.value == 9 && penyebuts2.value == 12 || pembilangs2.value == 3 && penyebuts2.value == 4) {
        pembilangs2.classList.add("jawabpecahanbenar")
        pembilangs2.classList.remove("jawabpecahansalah")
        penyebuts2.classList.add("jawabpecahanbenar")
        penyebuts2.classList.remove("jawabpecahansalah")
        a[19] = true;

    } else {
        pembilangs2.classList.remove("jawabpecahanbenar")
        pembilangs2.classList.add("jawabpecahansalah")
        penyebuts2.classList.remove("jawabpecahanbenar")
        penyebuts2.classList.add("jawabpecahansalah")
        a[19] = false;
    }

    // Soal3
    if (pembilangs3.value == 49) {
        pembilangs3.classList.add("jawabpecahanbenar")
        pembilangs3.classList.remove("jawabpecahansalah")
        a[20] = true;

    } else {
        pembilangs3.classList.remove("jawabpecahanbenar")
        pembilangs3.classList.add("jawabpecahansalah")
        a[20] = false;
    }

    if (penyebuts3.value == 45) {
        penyebuts3.classList.add("jawabpecahanbenar")
        penyebuts3.classList.remove("jawabpecahansalah")
        a[21] = true;

    } else {
        penyebuts3.classList.remove("jawabpecahanbenar")
        penyebuts3.classList.add("jawabpecahansalah")
        a[21] = false;
    }

    // Soal4
    if (pembilangs4.value == 39) {
        pembilangs4.classList.add("jawabpecahanbenar")
        pembilangs4.classList.remove("jawabpecahansalah")
        a[22] = true;

    } else {
        pembilangs4.classList.remove("jawabpecahanbenar")
        pembilangs4.classList.add("jawabpecahansalah")
        a[22] = false;
    }

    if (penyebuts4.value == 21) {
        penyebuts4.classList.add("jawabpecahanbenar")
        penyebuts4.classList.remove("jawabpecahansalah")
        a[23] = true;

    } else {
        penyebuts4.classList.remove("jawabpecahanbenar")
        penyebuts4.classList.add("jawabpecahansalah")
        a[23] = false;
    }

    // Soal5
    if (pembilangs5.value == 16 && penyebuts5.value == 36 || pembilangs5.value == 4 && penyebuts5.value == 9) {
        pembilangs5.classList.add("jawabpecahanbenar")
        pembilangs5.classList.remove("jawabpecahansalah")
        penyebuts5.classList.add("jawabpecahanbenar")
        penyebuts5.classList.remove("jawabpecahansalah")
        a[24] = true;

    } else {
        pembilangs5.classList.remove("jawabpecahanbenar")
        pembilangs5.classList.add("jawabpecahansalah")
        penyebuts5.classList.remove("jawabpecahanbenar")
        penyebuts5.classList.add("jawabpecahansalah")
        a[24] = false;
    }

    // Alert Benar Salah
    if (a[17] == true && a[18] == true && a[19] == true && a[20] == true && a[21] == true && a[22] == true && a[23] == true && a[24] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});