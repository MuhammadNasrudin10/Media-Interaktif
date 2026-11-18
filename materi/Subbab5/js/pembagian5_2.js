var a = [];
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

document.getElementById("btn1").addEventListener("click", function () {
    // Tahap 1
    if (pembilang1.value == 3 && penyebut1.value == 24 || pembilang1.value == 1 && penyebut1.value == 8) {
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

    if (penyebut2.value == 4) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[3] = true;
    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (pembilang3.value == 1) {
        pembilang3.classList.add("jawabpecahanbenar")
        pembilang3.classList.remove("jawabpecahansalah")
        a[4] = true;
    } else {
        pembilang3.classList.remove("jawabpecahanbenar")
        pembilang3.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    if (penyebut3.value == 6) {
        penyebut3.classList.add("jawabpecahanbenar")
        penyebut3.classList.remove("jawabpecahansalah")
        a[5] = true;
    } else {
        penyebut3.classList.remove("jawabpecahanbenar")
        penyebut3.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    // Tahap 3
    if (pembilang4.value == 3) {
        pembilang4.classList.add("jawabpecahanbenar")
        pembilang4.classList.remove("jawabpecahansalah")
        a[6] = true;
    } else {
        pembilang4.classList.remove("jawabpecahanbenar")
        pembilang4.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    if (penyebut4.value == 24) {
        penyebut4.classList.add("jawabpecahanbenar")
        penyebut4.classList.remove("jawabpecahansalah")
        a[7] = true;
    } else {
        penyebut4.classList.remove("jawabpecahanbenar")
        penyebut4.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    // Tahap 4
    if (pembilang5.value == 1) {
        pembilang5.classList.add("jawabpecahanbenar")
        pembilang5.classList.remove("jawabpecahansalah")
        a[8] = true;
    } else {
        pembilang5.classList.remove("jawabpecahanbenar")
        pembilang5.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    if (penyebut5.value == 8) {
        penyebut5.classList.add("jawabpecahanbenar")
        penyebut5.classList.remove("jawabpecahansalah")
        a[9] = true;
    } else {
        penyebut5.classList.remove("jawabpecahanbenar")
        penyebut5.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    // Alert Benar Salah
    if (a[1] == true && a[2] == true && a[3] == true && a[4] == true && a[5] == true && a[6] == true && a[7] == true && a[8] == true && a[9] == true) {
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
    if (pembilangs1.value == 5 && penyebuts1.value == 12) {
        pembilangs1.classList.add("jawabpecahanbenar")
        pembilangs1.classList.remove("jawabpecahansalah")
        penyebuts1.classList.add("jawabpecahanbenar")
        penyebuts1.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        pembilangs1.classList.remove("jawabpecahanbenar")
        pembilangs1.classList.add("jawabpecahansalah")
        penyebuts1.classList.remove("jawabpecahanbenar")
        penyebuts1.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    // Soal2
    if (pembilangs2.value == 1 && penyebuts2.value == 12) {
        pembilangs2.classList.add("jawabpecahanbenar")
        pembilangs2.classList.remove("jawabpecahansalah")
        penyebuts2.classList.add("jawabpecahanbenar")
        penyebuts2.classList.remove("jawabpecahansalah")
        a[11] = true;

    } else {
        pembilangs2.classList.remove("jawabpecahanbenar")
        pembilangs2.classList.add("jawabpecahansalah")
        penyebuts2.classList.remove("jawabpecahanbenar")
        penyebuts2.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    // Soal3
    if (pembilangs3.value == 4 && penyebuts3.value == 45) {
        pembilangs3.classList.add("jawabpecahanbenar")
        pembilangs3.classList.remove("jawabpecahansalah")
        penyebuts3.classList.add("jawabpecahanbenar")
        penyebuts3.classList.remove("jawabpecahansalah")
        a[12] = true;

    } else {
        pembilangs3.classList.remove("jawabpecahanbenar")
        pembilangs3.classList.add("jawabpecahansalah")
        penyebuts3.classList.remove("jawabpecahanbenar")
        penyebuts3.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    // Soal4
    if (pembilangs4.value == 4 && penyebuts4.value == 21) {
        pembilangs4.classList.add("jawabpecahanbenar")
        pembilangs4.classList.remove("jawabpecahansalah")
        penyebuts4.classList.add("jawabpecahanbenar")
        penyebuts4.classList.remove("jawabpecahansalah")
        a[13] = true;

    } else {
        pembilangs4.classList.remove("jawabpecahanbenar")
        pembilangs4.classList.add("jawabpecahansalah")
        penyebuts4.classList.remove("jawabpecahanbenar")
        penyebuts4.classList.add("jawabpecahansalah")
        a[13] = false;
    }

    // Soal5
    if (pembilangs5.value == 7 && penyebuts5.value == 36) {
        pembilangs5.classList.add("jawabpecahanbenar")
        pembilangs5.classList.remove("jawabpecahansalah")
        penyebuts5.classList.add("jawabpecahanbenar")
        penyebuts5.classList.remove("jawabpecahansalah")
        a[14] = true;

    } else {
        pembilangs5.classList.remove("jawabpecahanbenar")
        pembilangs5.classList.add("jawabpecahansalah")
        penyebuts5.classList.remove("jawabpecahanbenar")
        penyebuts5.classList.add("jawabpecahansalah")
        a[14] = false;
    }

    // Alert Benar Salah
    if (a[10] == true && a[11] == true && a[12] == true && a[13] == true && a[14] == true) {
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
})