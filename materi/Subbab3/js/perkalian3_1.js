var a = [];
var pembilangs1 = document.getElementById("pembilangs1");
var pembilangs2 = document.getElementById("pembilangs2");
var pembilangs3 = document.getElementById("pembilangs3");
var pembilangs4 = document.getElementById("pembilangs4");
var pembilangs5 = document.getElementById("pembilangs5");
var pembilangs6 = document.getElementById("pembilangs6");
var penyebuts1 = document.getElementById("penyebuts1");
var penyebuts2 = document.getElementById("penyebuts2");
var penyebuts3 = document.getElementById("penyebuts3");
var penyebuts4 = document.getElementById("penyebuts4");
var penyebuts5 = document.getElementById("penyebuts5");
var penyebuts6 = document.getElementById("penyebuts6");

document.getElementById("btn1").addEventListener("click", function () {
    // Soal1
    if (pembilangs1.value == 7) {
        pembilangs1.classList.add("jawabpecahanbenar")
        pembilangs1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        pembilangs1.classList.remove("jawabpecahanbenar")
        pembilangs1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (penyebuts1.value == 3) {
        penyebuts1.classList.add("jawabpecahanbenar")
        penyebuts1.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        penyebuts1.classList.remove("jawabpecahanbenar")
        penyebuts1.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    // Soal2
    if (pembilangs2.value == 5) {
        pembilangs2.classList.add("jawabpecahanbenar")
        pembilangs2.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        pembilangs2.classList.remove("jawabpecahanbenar")
        pembilangs2.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (penyebuts2.value == 4) {
        penyebuts2.classList.add("jawabpecahanbenar")
        penyebuts2.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        penyebuts2.classList.remove("jawabpecahanbenar")
        penyebuts2.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    // Soal3
    if (pembilangs3.value == 9) {
        pembilangs3.classList.add("jawabpecahanbenar")
        pembilangs3.classList.remove("jawabpecahansalah")
        a[5] = true;

    } else {
        pembilangs3.classList.remove("jawabpecahanbenar")
        pembilangs3.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (penyebuts3.value == 2) {
        penyebuts3.classList.add("jawabpecahanbenar")
        penyebuts3.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        penyebuts3.classList.remove("jawabpecahanbenar")
        penyebuts3.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    // Soal4
    if (pembilangs4.value == 11) {
        pembilangs4.classList.add("jawabpecahanbenar")
        pembilangs4.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        pembilangs4.classList.remove("jawabpecahanbenar")
        pembilangs4.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (penyebuts4.value == 3) {
        penyebuts4.classList.add("jawabpecahanbenar")
        penyebuts4.classList.remove("jawabpecahansalah")
        a[8] = true;

    } else {
        penyebuts4.classList.remove("jawabpecahanbenar")
        penyebuts4.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    // Soal5
    if (pembilangs5.value == 14) {
        pembilangs5.classList.add("jawabpecahanbenar")
        pembilangs5.classList.remove("jawabpecahansalah")
        a[9] = true;

    } else {
        pembilangs5.classList.remove("jawabpecahanbenar")
        pembilangs5.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (penyebuts5.value == 5) {
        penyebuts5.classList.add("jawabpecahanbenar")
        penyebuts5.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        penyebuts5.classList.remove("jawabpecahanbenar")
        penyebuts5.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    // Soal6
    if (pembilangs6.value == 7) {
        pembilangs6.classList.add("jawabpecahanbenar")
        pembilangs6.classList.remove("jawabpecahansalah")
        a[11] = true;

    } else {
        pembilangs6.classList.remove("jawabpecahanbenar")
        pembilangs6.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    if (penyebuts6.value == 2) {
        penyebuts6.classList.add("jawabpecahanbenar")
        penyebuts6.classList.remove("jawabpecahansalah")
        a[12] = true;

    } else {
        penyebuts6.classList.remove("jawabpecahanbenar")
        penyebuts6.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    // Alert Benar Salah
    if (a[1] == true && a[2] == true && a[3] == true && a[4] == true && a[5] == true && a[6] == true && a[7] == true && a[8] == true && a[9] == true && a[10] == true && a[11] == true && a[12] == true) {
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
})