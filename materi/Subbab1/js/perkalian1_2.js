// Soal Menggunakan Langkah-Langkah

// Deklarasi Variabel Soal 1
var a = [];
var asli1 = document.getElementById("asli1");
var asli2 = document.getElementById("asli2");
var asli3 = document.getElementById("asli3");
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");
var pembilang2 = document.getElementById("pembilang2");
var penyebut2 = document.getElementById("penyebut2");
var pembilang3a = document.getElementById("pembilang3a");
var pembilang3b = document.getElementById("pembilang3b");
var penyebut3 = document.getElementById("penyebut3");
var pembilang4 = document.getElementById("pembilang4");
var penyebut4 = document.getElementById("penyebut4");
var pembilang5 = document.getElementById("pembilang5");
var penyebut5 = document.getElementById("penyebut5");

// Deklarasi Variabel Soal 2
var asli21 = document.getElementById("asli21");
var pembilang21 = document.getElementById("pembilang21");
var penyebut21 = document.getElementById("penyebut21");
var pembilang22 = document.getElementById("pembilang22");
var penyebut22 = document.getElementById("penyebut22");
var pembilang23a = document.getElementById("pembilang23a");
var pembilang23b = document.getElementById("pembilang23b");
var penyebut23 = document.getElementById("penyebut23");
var pembilang24 = document.getElementById("pembilang24");
var penyebut24 = document.getElementById("penyebut24");
var pembilang25 = document.getElementById("pembilang25");
var penyebut25 = document.getElementById("penyebut25");


document.getElementById("btn1").addEventListener("click", function () {

    // Tahap1
    if (asli1.value == 4) {
        asli1.classList.add("jawabpecahanbenar")
        asli1.classList.remove("jawabpecahansalah")
        a[1] = true;
    } else {
        asli1.classList.remove("jawabpecahanbenar")
        asli1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (pembilang1.value == 2 && penyebut1.value == 4 || pembilang1.value == 1 && penyebut1.value == 2) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[2] = true;
    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    // Tahap2
    if (pembilang2.value == 3) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        a[3] = true;
    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (penyebut2.value == 4) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[4] = true;
    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    if (asli2.value == 6) {
        asli2.classList.add("jawabpecahanbenar")
        asli2.classList.remove("jawabpecahansalah")
        a[5] = true;
    } else {
        asli2.classList.remove("jawabpecahanbenar")
        asli2.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    // Tahap3
    if (pembilang3a.value == 6) {
        pembilang3a.classList.add("jawabpecahanbenar")
        pembilang3a.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        pembilang3a.classList.remove("jawabpecahanbenar")
        pembilang3a.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    if (pembilang3b.value == 3) {
        pembilang3b.classList.add("jawabpecahanbenar")
        pembilang3b.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        pembilang3b.classList.remove("jawabpecahanbenar")
        pembilang3b.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (penyebut3.value == 4) {
        penyebut3.classList.add("jawabpecahanbenar")
        penyebut3.classList.remove("jawabpecahansalah")
        a[8] = true;
    } else {
        penyebut3.classList.remove("jawabpecahanbenar")
        penyebut3.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    // Tahap4
    if (pembilang4.value == 18) {
        pembilang4.classList.add("jawabpecahanbenar")
        pembilang4.classList.remove("jawabpecahansalah")
        a[9] = true;

    } else {
        pembilang4.classList.remove("jawabpecahanbenar")
        pembilang4.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (penyebut4.value == 4) {
        penyebut4.classList.add("jawabpecahanbenar")
        penyebut4.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        penyebut4.classList.remove("jawabpecahanbenar")
        penyebut4.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    // Tahap5
    if (asli3.value == 4) {
        asli3.classList.add("jawabpecahanbenar")
        asli3.classList.remove("jawabpecahansalah")
        a[11] = true;
    } else {
        asli3.classList.remove("jawabpecahanbenar")
        asli3.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    if (pembilang5.value == 2 && penyebut5.value == 4 || pembilang5.value == 1 && penyebut5.value == 2) {
        pembilang5.classList.add("jawabpecahanbenar")
        pembilang5.classList.remove("jawabpecahansalah")
        penyebut5.classList.add("jawabpecahanbenar")
        penyebut5.classList.remove("jawabpecahansalah")
        a[12] = true;
    } else {
        pembilang5.classList.remove("jawabpecahanbenar")
        pembilang5.classList.add("jawabpecahansalah")
        penyebut5.classList.remove("jawabpecahanbenar")
        penyebut5.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    // Soal 2
    // Tahap1
    if (pembilang21.value == 1 && penyebut21.value == 2 || pembilang21.value == 3 && penyebut21.value == 6) {
        pembilang21.classList.add("jawabpecahanbenar")
        pembilang21.classList.remove("jawabpecahansalah")
        penyebut21.classList.add("jawabpecahanbenar")
        penyebut21.classList.remove("jawabpecahansalah")
        a[13] = true;
    } else {
        pembilang21.classList.remove("jawabpecahanbenar")
        pembilang21.classList.add("jawabpecahansalah")
        penyebut21.classList.remove("jawabpecahanbenar")
        penyebut21.classList.add("jawabpecahansalah")
        a[13] = false;
    }

    // Tahap2
    if (pembilang22.value == 1) {
        pembilang22.classList.add("jawabpecahanbenar")
        pembilang22.classList.remove("jawabpecahansalah")
        a[14] = true;

    } else {
        pembilang22.classList.remove("jawabpecahanbenar")
        pembilang22.classList.add("jawabpecahansalah")
        a[14] = false;
    }

    if (penyebut22.value == 6) {
        penyebut22.classList.add("jawabpecahanbenar")
        penyebut22.classList.remove("jawabpecahansalah")
        a[15] = true;

    } else {
        penyebut22.classList.remove("jawabpecahanbenar")
        penyebut22.classList.add("jawabpecahansalah")
        a[15] = false;
    }

    if (asli21.value == 3) {
        asli21.classList.add("jawabpecahanbenar")
        asli21.classList.remove("jawabpecahansalah")
        a[16] = true;

    } else {
        asli21.classList.remove("jawabpecahanbenar")
        asli21.classList.add("jawabpecahansalah")
        a[16] = false;
    }

    // Tahap3
    if (pembilang23a.value == 3) {
        pembilang23a.classList.add("jawabpecahanbenar")
        pembilang23a.classList.remove("jawabpecahansalah")
        a[17] = true;

    } else {
        pembilang23a.classList.remove("jawabpecahanbenar")
        pembilang23a.classList.add("jawabpecahansalah")
        a[17] = false;
    }

    if (pembilang23b.value == 1) {
        pembilang23b.classList.add("jawabpecahanbenar")
        pembilang23b.classList.remove("jawabpecahansalah")
        a[18] = true;

    } else {
        pembilang23b.classList.remove("jawabpecahanbenar")
        pembilang23b.classList.add("jawabpecahansalah")
        a[18] = false;
    }

    if (penyebut23.value == 6) {
        penyebut23.classList.add("jawabpecahanbenar")
        penyebut23.classList.remove("jawabpecahansalah")
        a[19] = true;

    } else {
        penyebut23.classList.remove("jawabpecahanbenar")
        penyebut23.classList.add("jawabpecahansalah")
        a[19] = false;
    }

    // Tahap4
    if (pembilang24.value == 3) {
        pembilang24.classList.add("jawabpecahanbenar")
        pembilang24.classList.remove("jawabpecahansalah")
        a[20] = true;

    } else {
        pembilang24.classList.remove("jawabpecahanbenar")
        pembilang24.classList.add("jawabpecahansalah")
        a[20] = false;
    }

    if (penyebut24.value == 6) {
        penyebut24.classList.add("jawabpecahanbenar")
        penyebut24.classList.remove("jawabpecahansalah")
        a[21] = true;

    } else {
        penyebut24.classList.remove("jawabpecahanbenar")
        penyebut24.classList.add("jawabpecahansalah")
        a[21] = false;
    }

    // Tahap5
    if (pembilang25.value == 1) {
        pembilang25.classList.add("jawabpecahanbenar")
        pembilang25.classList.remove("jawabpecahansalah")
        a[22] = true;

    } else {
        pembilang25.classList.remove("jawabpecahanbenar")
        pembilang25.classList.add("jawabpecahansalah")
        a[22] = false;
    }

    if (penyebut25.value == 2) {
        penyebut25.classList.add("jawabpecahanbenar")
        penyebut25.classList.remove("jawabpecahansalah")
        a[23] = true;

    } else {
        penyebut25.classList.remove("jawabpecahanbenar")
        penyebut25.classList.add("jawabpecahansalah")
        a[23] = false;
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
    if (a[13] == true && a[14] == true && a[15] == true && a[16] == true && a[17] == true && a[18] == true && a[19] == true && a[20] == true && a[21] == true && a[22] == true && a[23] == true) {
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
    if (pembilangs1.value == 15) {
        pembilangs1.classList.add("jawabpecahanbenar")
        pembilangs1.classList.remove("jawabpecahansalah")
        a[24] = true;

    } else {
        pembilangs1.classList.remove("jawabpecahanbenar")
        pembilangs1.classList.add("jawabpecahansalah")
        a[24] = false;
    }

    if (penyebuts1.value == 5) {
        penyebuts1.classList.add("jawabpecahanbenar")
        penyebuts1.classList.remove("jawabpecahansalah")
        a[25] = true;

    } else {
        penyebuts1.classList.remove("jawabpecahanbenar")
        penyebuts1.classList.add("jawabpecahansalah")
        a[25] = false;
    }

    // Soal2
    if (pembilangs2.value == 8) {
        pembilangs2.classList.add("jawabpecahanbenar")
        pembilangs2.classList.remove("jawabpecahansalah")
        a[26] = true;

    } else {
        pembilangs2.classList.remove("jawabpecahanbenar")
        pembilangs2.classList.add("jawabpecahansalah")
        a[26] = false;
    }

    if (penyebuts2.value == 4) {
        penyebuts2.classList.add("jawabpecahanbenar")
        penyebuts2.classList.remove("jawabpecahansalah")
        a[27] = true;

    } else {
        penyebuts2.classList.remove("jawabpecahanbenar")
        penyebuts2.classList.add("jawabpecahansalah")
        a[27] = false;
    }

    // Soal3
    if (pembilangs3.value == 20) {
        pembilangs3.classList.add("jawabpecahanbenar")
        pembilangs3.classList.remove("jawabpecahansalah")
        a[28] = true;

    } else {
        pembilangs3.classList.remove("jawabpecahanbenar")
        pembilangs3.classList.add("jawabpecahansalah")
        a[28] = false;
    }

    if (penyebuts3.value == 6) {
        penyebuts3.classList.add("jawabpecahanbenar")
        penyebuts3.classList.remove("jawabpecahansalah")
        a[29] = true;

    } else {
        penyebuts3.classList.remove("jawabpecahanbenar")
        penyebuts3.classList.add("jawabpecahansalah")
        a[29] = false;
    }

    // Soal4
    if (pembilangs4.value == 6) {
        pembilangs4.classList.add("jawabpecahanbenar")
        pembilangs4.classList.remove("jawabpecahansalah")
        a[30] = true;

    } else {
        pembilangs4.classList.remove("jawabpecahanbenar")
        pembilangs4.classList.add("jawabpecahansalah")
        a[30] = false;
    }

    if (penyebuts4.value == 4) {
        penyebuts4.classList.add("jawabpecahanbenar")
        penyebuts4.classList.remove("jawabpecahansalah")
        a[31] = true;

    } else {
        penyebuts4.classList.remove("jawabpecahanbenar")
        penyebuts4.classList.add("jawabpecahansalah")
        a[31] = false;
    }

    // Soal5
    if (pembilangs5.value == 6) {
        pembilangs5.classList.add("jawabpecahanbenar")
        pembilangs5.classList.remove("jawabpecahansalah")
        a[32] = true;

    } else {
        pembilangs5.classList.remove("jawabpecahanbenar")
        pembilangs5.classList.add("jawabpecahansalah")
        a[32] = false;
    }

    if (penyebuts5.value == 6) {
        penyebuts5.classList.add("jawabpecahanbenar")
        penyebuts5.classList.remove("jawabpecahansalah")
        a[33] = true;

    } else {
        penyebuts5.classList.remove("jawabpecahanbenar")
        penyebuts5.classList.add("jawabpecahansalah")
        a[33] = false;
    }

    // Alert Benar Salah
    if (a[24] == true && a[25] == true && a[26] == true && a[27] == true && a[28] == true && a[29] == true && a[30] == true && a[31] == true && a[32] == true && a[33] == true) {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
})

