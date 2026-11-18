document.getElementById("contohRumus").style.display = "none";
// Soal Menggunakan Langkah
var a = [];
var jawaban1 = document.getElementById("jawaban1");
var jawaban2 = document.getElementById("jawaban2");

document.getElementById("btn1").addEventListener("click", function () {
    if (jawaban1.value == 3) {
        jawaban1.classList.add("jawabpecahanbenar")
        jawaban1.classList.remove("jawabpecahansalah")
        a[1] = true;
    } else {
        jawaban1.classList.remove("jawabpecahanbenar")
        jawaban1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (jawaban2.value == 3) {
        jawaban2.classList.add("jawabpecahanbenar")
        jawaban2.classList.remove("jawabpecahansalah")
        a[2] = true;
    } else {
        jawaban2.classList.remove("jawabpecahanbenar")
        jawaban2.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    // alert benar salah
    if (a[1] == true && a[2] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
        document.getElementById("contohRumus").style.display = "block";
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});

// Soal langsung jawaban
var jawabans1 = document.getElementById("jawabans1");
var jawabans2 = document.getElementById("jawabans2");
var jawabans3 = document.getElementById("jawabans3");
var jawabans4 = document.getElementById("jawabans4");
var jawabans5 = document.getElementById("jawabans5");

document.getElementById("btn2").addEventListener("click", function () {
    if (jawabans1.value == 32) {
        jawabans1.classList.add("jawabpecahanbenar")
        jawabans1.classList.remove("jawabpecahansalah")
        a[3] = true;
    } else {
        jawabans1.classList.remove("jawabpecahanbenar")
        jawabans1.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    if (jawabans2.value == 8) {
        jawabans2.classList.add("jawabpecahanbenar")
        jawabans2.classList.remove("jawabpecahansalah")
        a[4] = true;
    } else {
        jawabans2.classList.remove("jawabpecahanbenar")
        jawabans2.classList.add("jawabpecahansalah")
        a[4] = false;
    }

    if (jawabans3.value == 15) {
        jawabans3.classList.add("jawabpecahanbenar")
        jawabans3.classList.remove("jawabpecahansalah")
        a[5] = true;
    } else {
        jawabans3.classList.remove("jawabpecahanbenar")
        jawabans3.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (jawabans4.value == 8) {
        jawabans4.classList.add("jawabpecahanbenar")
        jawabans4.classList.remove("jawabpecahansalah")
        a[6] = true;
    } else {
        jawabans4.classList.remove("jawabpecahanbenar")
        jawabans4.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    if (jawabans5.value == 16) {
        jawabans5.classList.add("jawabpecahanbenar")
        jawabans5.classList.remove("jawabpecahansalah")
        a[7] = true;
    } else {
        jawabans5.classList.remove("jawabpecahanbenar")
        jawabans5.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    // alert benar salah
    if (a[3] == true && a[4] == true && a[5] == true && a[6] == true && a[7] == true) {
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