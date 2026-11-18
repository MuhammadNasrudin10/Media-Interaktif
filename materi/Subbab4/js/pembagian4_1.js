// CONTOH 1
document.getElementById("card-contoh1").style.display = "none";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("text4").style.display = "none";
document.getElementById("text5").style.display = "none";
document.getElementById("p1").style.display = "none";
document.getElementById("p2").style.display = "none";
document.getElementById("p3").style.display = "none";

// Btn Lanjutkan
document.getElementById("btn_lanjutkan").addEventListener("click", function () {
    document.getElementById("card-contoh1").style.display = "block";
    document.getElementById("btn_lanjutkan").style.display = "none";
});


// Change Image contoh 1
function changeImage() {
    let displayImage = document.getElementById("gambar1");
    if (displayImage.src.match("img/bingka1.png")) {
        displayImage.src = "img/bingka2.png";
        document.getElementById("text2").style.display = "table";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text3").style.display = "block";
        document.getElementById("text4").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
    } else if (displayImage.src.match("img/bingka2.png")) {
        displayImage.src = "img/bingka3.png";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
    } else if (displayImage.src.match("img/bingka3.png")) {
        displayImage.src = "img/bingka4.png";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "block";
        document.getElementById("p3").style.display = "none";
    } else if (displayImage.src.match("img/bingka4.png")) {
        displayImage.src = "img/bingka5.png";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "block";
    } else if (displayImage.src.match("img/bingka5.png")) {
        displayImage.src = "img/bingka6.png";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "block";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
    }
    else {
        displayImage.src = "img/bingka1.png";
        document.getElementById("text1").style.display = "block";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("text4").style.display = "none";
    }
}

var a = [];
var pembilang1 = document.getElementById("pembilang1")
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

    if (penyebut1.value == 4) {
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    // Alert Benar Salah
    if (a[1] == true && a[2] == true) {
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

var jawaban1 = document.getElementById("jawaban1");

document.getElementById("btn2").addEventListener("click", function () {
    if (jawaban1.value == 4) {
        jawaban1.classList.add("jawabbenar")
        jawaban1.classList.remove("jawabsalah")
        a[3] = true;

    } else {
        jawaban1.classList.remove("jawabbenar")
        jawaban1.classList.add("jawabsalah")
        a[3] = false;
    }

    if (a[3] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong>' +
            '</div>';
        document.getElementById("text5").style.display = "block";
        document.getElementById("btn2").style.display = "none";
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});

var jawaban2 = document.getElementById("jawaban2");

document.getElementById("btn3").addEventListener("click", function () {
    if (jawaban2.value == 4) {
        jawaban2.classList.add("jawabbenar")
        jawaban2.classList.remove("jawabsalah")
        a[4] = true;

    } else {
        jawaban2.classList.remove("jawabbenar")
        jawaban2.classList.add("jawabsalah")
        a[4] = false;
    }

    if (a[4] == true) {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar!</strong>' +
            '</div>';
        document.getElementById("btn3").style.display = "none";
    } else {
        document.getElementById("alertHasil3").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});

// CONTOH 2
document.getElementById("card-contoh2").style.display = "none";
document.getElementById("textCucur2").style.display = "none";
document.getElementById("textCucur3").style.display = "none";
document.getElementById("textCucur4").style.display = "none";
document.getElementById("textCucur5").style.display = "none";
document.getElementById("textCucur6").style.display = "none";


document.getElementById("btn_lanjutkan2").addEventListener("click", function () {
    document.getElementById("card-contoh2").style.display = "block";
    document.getElementById("btn_lanjutkan2").style.display = "none";

});

// Change Image contoh 1
function changeImageCucur1() {
    let displayImage = document.getElementById("gambarCucur1");
    if (displayImage.src.match("img/cucur1.png")) {
        displayImage.src = "img/cucur3.png";
    } else if (displayImage.src.match("img/cucur3.png")) {
        displayImage.src = "img/cucur4.png";
    } else if (displayImage.src.match("img/cucur4.png")) {
        displayImage.src = "img/cucur2.png";
    } else {
        displayImage.src = "img/cucur1.png";
    }
}

function changeImageCucur2() {
    let displayImage = document.getElementById("gambarCucur2");
    if (displayImage.src.match("img/cucur1.png")) {
        displayImage.src = "img/cucur3.png";
    } else if (displayImage.src.match("img/cucur3.png")) {
        displayImage.src = "img/cucur4.png";
    } else if (displayImage.src.match("img/cucur4.png")) {
        displayImage.src = "img/cucur2.png";
    } else {
        displayImage.src = "img/cucur1.png";
    }
}

// Fungsi menampilkan gambar 1 dan gambar 2
// Ambil elemen gambar 1 dan gambar 2 dari dokumen HTML
const gambarCucur1 = document.getElementById('gambarCucur1');
const gambarCucur2 = document.getElementById('gambarCucur2');

// Buat sebuah fungsi untuk memeriksa apakah kedua gambar telah berubah
function periksaPerubahanGambar() {
    if (gambarCucur1.src.match("img/cucur1.png") && gambarCucur2.src.match("img/cucur1.png")) {
        document.getElementById("textCucur1").style.display = "block";
        document.getElementById("textCucur2").style.display = "none";
        document.getElementById("textCucur3").style.display = "none";
        document.getElementById("textCucur4").style.display = "none";
        document.getElementById("textCucur5").style.display = "none";
        document.getElementById("textCucur6").style.display = "none";
    } else if (gambarCucur1.src.match("img/cucur3.png") && gambarCucur2.src.match("img/cucur3.png")) {
        document.getElementById("textCucur1").style.display = "none";
        document.getElementById("textCucur2").style.display = "table";
        document.getElementById("textCucur3").style.display = "none";
        document.getElementById("textCucur4").style.display = "none";
        document.getElementById("textCucur5").style.display = "none";
        document.getElementById("textCucur6").style.display = "block";
    } else if (gambarCucur1.src.match("img/cucur4.png") && gambarCucur2.src.match("img/cucur4.png")) {
        document.getElementById("textCucur1").style.display = "none";
        document.getElementById("textCucur2").style.display = "none";
        document.getElementById("textCucur3").style.display = "block";
        document.getElementById("textCucur4").style.display = "none";
        document.getElementById("textCucur5").style.display = "none";
        document.getElementById("textCucur6").style.display = "none";
    } else if (gambarCucur1.src.match("img/cucur2.png") && gambarCucur2.src.match("img/cucur2.png")) {
        document.getElementById("textCucur1").style.display = "none";
        document.getElementById("textCucur2").style.display = "none";
        document.getElementById("textCucur3").style.display = "none";
        document.getElementById("textCucur4").style.display = "block";
        document.getElementById("textCucur5").style.display = "none";
        document.getElementById("textCucur6").style.display = "none";
    } else {
        document.getElementById("textCucur1").style.display = "none";
        document.getElementById("textCucur2").style.display = "none";
        document.getElementById("textCucur3").style.display = "none";
        document.getElementById("textCucur5").style.display = "block";
        document.getElementById("textCucur6").style.display = "none";
    }

}
// Setel fungsi periksaPerubahanGambar() agar dipanggil setiap kali salah satu gambar berubah
gambarCucur1.addEventListener('load', periksaPerubahanGambar);
gambarCucur2.addEventListener('load', periksaPerubahanGambar);

var pembilangContoh2 = document.getElementById("pembilangContoh2");
var penyebutContoh2 = document.getElementById("penyebutContoh2");

// button cek jawaban contoh 2
document.getElementById("btn-periksa1").addEventListener("click", function () {
    if (pembilangContoh2.value == 1) {
        pembilangContoh2.classList.add("jawabpecahanbenar")
        pembilangContoh2.classList.remove("jawabpecahansalah")
        a[5] = true;

    } else {
        pembilangContoh2.classList.remove("jawabpecahanbenar")
        pembilangContoh2.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    if (penyebutContoh2.value == 2) {
        penyebutContoh2.classList.add("jawabpecahanbenar")
        penyebutContoh2.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        penyebutContoh2.classList.remove("jawabpecahanbenar")
        penyebutContoh2.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    if (a[5] == true && a[6] == true) {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
    } else {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
    }
});

var jawaban3 = document.getElementById("jawaban3");

document.getElementById("btn-periksa2").addEventListener("click", function () {
    if (jawaban3.value == 4) {
        jawaban3.classList.add("jawabpecahanbenar")
        jawaban3.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        jawaban3.classList.remove("jawabpecahanbenar")
        jawaban3.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (a[7] == true) {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar! </strong> Ada ' + jawaban3.value + ' total potongan kue cucur.' +
            '</div>';
    } else {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu ' + jawaban3.value + ' masih salah, coba lagi ya!' +
            '</div>';
    }
});