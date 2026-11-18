const langkah1 = document.querySelectorAll("#langkah1, #penjelasan1");

langkah1.forEach((langkah1) => {
    langkah1.style.display = "none";
});

document.getElementById("btn1").addEventListener("click", function () {
    langkah1.forEach((langkah1) => {
        langkah1.style.display = "block";
    });
    document.getElementById("btn1").style.display = "none";
});

const langkah2 = document.querySelectorAll("#langkah2, #penjelasan2");

langkah2.forEach((langkah2) => {
    langkah2.style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function () {
    langkah2.forEach((langkah2) => {
        langkah2.style.display = "block";
    });
    document.getElementById("btn2").style.display = "none";
});

const langkah3 = document.querySelectorAll("#langkah3, #penjelasan3");

langkah3.forEach((langkah3) => {
    langkah3.style.display = "none";
});

document.getElementById("btn3").addEventListener("click", function () {
    langkah3.forEach((langkah3) => {
        langkah3.style.display = "block";
    });
    document.getElementById("btn3").style.display = "none";
});

const langkah4 = document.querySelectorAll("#langkah4, #penjelasan4");

langkah4.forEach((langkah4) => {
    langkah4.style.display = "none";
});

document.getElementById("btn4").addEventListener("click", function () {
    langkah4.forEach((langkah4) => {
        langkah4.style.display = "block";
    });
    document.getElementById("btn4").style.display = "none";
});

var a = [];
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");

document.getElementById("btnCekJawaban").addEventListener("click", function () {
    if (pembilang1.value == 5) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        a[1] = false;
    }

    if (penyebut1.value == 8) {
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
        document.getElementById("alertHasil").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
    } else {
        document.getElementById("alertHasil").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
});



// CONTOH 2
const langkah21 = document.querySelectorAll("#langkah21, #penjelasan21");

langkah21.forEach((langkah1) => {
    langkah1.style.display = "none";
});

document.getElementById("btn21").addEventListener("click", function () {
    langkah21.forEach((langkah21) => {
        langkah21.style.display = "block";
    });
    document.getElementById("btn21").style.display = "none";
});

const langkah22 = document.querySelectorAll("#langkah22, #penjelasan22");

langkah22.forEach((langkah22) => {
    langkah22.style.display = "none";
});

document.getElementById("btn22").addEventListener("click", function () {
    langkah22.forEach((langkah22) => {
        langkah22.style.display = "block";
    });
    document.getElementById("btn22").style.display = "none";
});

const langkah23 = document.querySelectorAll("#langkah23, #penjelasan23");

langkah23.forEach((langkah23) => {
    langkah23.style.display = "none";
});

document.getElementById("btn23").addEventListener("click", function () {
    langkah23.forEach((langkah23) => {
        langkah23.style.display = "block";
    });
    document.getElementById("btn23").style.display = "none";
});

const langkah24 = document.querySelectorAll("#langkah24, #penjelasan24");

langkah24.forEach((langkah24) => {
    langkah24.style.display = "none";
});

document.getElementById("btn24").addEventListener("click", function () {
    langkah24.forEach((langkah24) => {
        langkah24.style.display = "block";
    });
    document.getElementById("btn24").style.display = "none";
});

var pembilang21 = document.getElementById("pembilang21");
var penyebut21 = document.getElementById("penyebut21");

document.getElementById("btnCekJawaban2").addEventListener("click", function () {
    if (pembilang21.value == 4 && penyebut21.value == 18 || pembilang21.value == 2 && penyebut21.value == 9) {
        pembilang21.classList.add("jawabpecahanbenar")
        pembilang21.classList.remove("jawabpecahansalah")
        penyebut21.classList.add("jawabpecahanbenar")
        penyebut21.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        pembilang21.classList.remove("jawabpecahanbenar")
        pembilang21.classList.add("jawabpecahansalah")
        penyebut21.classList.remove("jawabpecahanbenar")
        penyebut21.classList.add("jawabpecahansalah")
        a[3] = false;
    }


    // alert benar salah
    if (a[3] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong> Jawaban kamu sudah benar' +
            '</div>';
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!' +
            '</div>';
        document.getElementById("text21").style.display = "none";
        document.getElementById("btn22").style.display = "none";
    }
});