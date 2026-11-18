// Ganti Gambar Contoh 1
document.getElementById("text1").style.display = "none";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("text4").style.display = "none";
document.getElementById("text5").style.display = "none";
document.getElementById("btn2").style.display = "none";

function changeImage() {
    let displayImage = document.getElementById("gambar1");
    if (displayImage.src.match("img/Contoh1.png")) {
        displayImage.src = "img/Contoh2.png";
        document.getElementById("text1").style.display = "block";
        document.getElementById("text2").style.display = "block";
        document.getElementById("text2").style.display = "grid";
        document.getElementById("text2").style.placeItems = "center";
        document.getElementById("text-awal").style.display = "none";

    } else {
        displayImage.src = "img/Contoh1.png";
        document.getElementById("text1").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.getElementById("text3").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("text-awal").style.display = "block";
    }
}

// Fungsi menampilkan gambar 1 dan gambar 2
// Ambil elemen gambar 1 dan gambar 2 dari dokumen HTML
const gambar1 = document.getElementById('satu');
const gambar2 = document.getElementById('setengah');

// Simpan nilai sumber asli dari kedua gambar
const sumberGambar1 = gambar1.src;
const sumberGambar2 = gambar2.src;

// Buat sebuah fungsi untuk memeriksa apakah kedua gambar telah berubah
function periksaPerubahanGambar() {
    if (gambar1.src !== sumberGambar1 && gambar2.src !== sumberGambar2) {
        // Jika kedua gambar telah berubah, tampilkan paragraf yang diinginkan
        const paragraf = document.getElementById('text4');
        paragraf.style.display = 'block';
    } else {
        const paragraf = document.getElementById('text4');
        paragraf.style.display = 'none';
    }
}
// Setel fungsi periksaPerubahanGambar() agar dipanggil setiap kali salah satu gambar berubah
gambar1.addEventListener('load', periksaPerubahanGambar);
gambar2.addEventListener('load', periksaPerubahanGambar);
// Akhir Fungsi menampilkan gambar 1 dan gambar 2

// Button1 Cek Jawaban Contoh 1
var a = [];
var asli1 = document.getElementById("asli1")
var pembilang1 = document.getElementById("pembilang1");
var penyebut1 = document.getElementById("penyebut1");

document.getElementById("btn1").addEventListener("click", function () {
    if (asli1.value == 1) {
        asli1.classList.add("jawabpecahanbenar")
        asli1.classList.remove("jawabpecahansalah")
        a[1] = true;

    } else {
        asli1.classList.remove("jawabpecahanbenar")
        asli1.classList.add("jawabpecahansalah")
        a[1] = false;
    }


    if (pembilang1.value == 1) {
        pembilang1.classList.add("jawabpecahanbenar")
        pembilang1.classList.remove("jawabpecahansalah")
        a[2] = true;

    } else {
        pembilang1.classList.remove("jawabpecahanbenar")
        pembilang1.classList.add("jawabpecahansalah")
        a[2] = false;
    }

    if (penyebut1.value == 2) {
        penyebut1.classList.add("jawabpecahanbenar")
        penyebut1.classList.remove("jawabpecahansalah")
        a[3] = true;

    } else {
        penyebut1.classList.remove("jawabpecahanbenar")
        penyebut1.classList.add("jawabpecahansalah")
        a[3] = false;
    }

    // Alert Benar Salah
    if (a[1] == true && a[2] == true && a[3] == true) {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
        document.getElementById("btn2").style.display = "inline";
    } else {
        document.getElementById("alertHasil1").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
        document.getElementById("text1").style.display = "none";
    }
})

// Button2 Lanjutkan
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("text3").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn1").style.display = "none";
})

function changeImageSatu() {
    let displayImage = document.getElementById("satu");
    if (displayImage.src.match("img/satu.png")) {
        displayImage.src = "img/satuAkhir.png";

    } else {
        displayImage.src = "img/satu.png";
    }
}

function changeImageSetengah() {
    let displayImage = document.getElementById("setengah");
    if (displayImage.src.match("img/setengah.png")) {
        displayImage.src = "img/setengahAkhir.png";

    } else {
        displayImage.src = "img/setengah.png";
    }
}

// Button3 Cek Jawaban
var jawaban1 = document.getElementById("jawaban1");
var jawaban2 = document.getElementById("jawaban2");

document.getElementById("btn3").addEventListener("click", function () {
    if (jawaban1.value == 9) {
        jawaban1.classList.add("jawabpecahanbenar")
        jawaban1.classList.remove("jawabpecahansalah")
        a[4] = true;

    } else {
        jawaban1.classList.remove("jawabpecahanbenar")
        jawaban1.classList.add("jawabpecahansalah")
        a[4] = false;
    }


    if (jawaban2.value == 8) {
        jawaban2.classList.add("jawabpecahanbenar")
        jawaban2.classList.remove("jawabpecahansalah")
        a[5] = true;

    } else {
        jawaban2.classList.remove("jawabpecahanbenar")
        jawaban2.classList.add("jawabpecahansalah")
        a[5] = false;
    }

    // Alert Benar Salah
    if (a[4] == true && a[5] == true) {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
        document.getElementById("text5").style.display = "block";
        document.getElementById("btn3").style.display = "none";
    } else {
        document.getElementById("alertHasil2").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
        document.getElementById("text5").style.display = "none";
    }
})

// Button4 Cek Jawaban Akhir
var asli2 = document.getElementById("asli2");
var pembilang2 = document.getElementById("pembilang2");
var pembilang3 = document.getElementById("pembilang3");
var penyebut2 = document.getElementById("penyebut2");
var penyebut3 = document.getElementById("penyebut3");

document.getElementById("btn4").addEventListener("click", function () {
    if (asli2.value == 1) {
        asli2.classList.add("jawabpecahanbenar")
        asli2.classList.remove("jawabpecahansalah")
        a[6] = true;

    } else {
        asli2.classList.remove("jawabpecahanbenar")
        asli2.classList.add("jawabpecahansalah")
        a[6] = false;
    }

    if (pembilang2.value == 9) {
        pembilang2.classList.add("jawabpecahanbenar")
        pembilang2.classList.remove("jawabpecahansalah")
        a[7] = true;

    } else {
        pembilang2.classList.remove("jawabpecahanbenar")
        pembilang2.classList.add("jawabpecahansalah")
        a[7] = false;
    }

    if (penyebut2.value == 8) {
        penyebut2.classList.add("jawabpecahanbenar")
        penyebut2.classList.remove("jawabpecahansalah")
        a[8] = true;

    } else {
        penyebut2.classList.remove("jawabpecahanbenar")
        penyebut2.classList.add("jawabpecahansalah")
        a[8] = false;
    }

    if (pembilang3.value == 1) {
        pembilang3.classList.add("jawabpecahanbenar")
        pembilang3.classList.remove("jawabpecahansalah")
        a[9] = true;

    } else {
        pembilang3.classList.remove("jawabpecahanbenar")
        pembilang3.classList.add("jawabpecahansalah")
        a[9] = false;
    }

    if (penyebut3.value == 8) {
        penyebut3.classList.add("jawabpecahanbenar")
        penyebut3.classList.remove("jawabpecahansalah")
        a[10] = true;

    } else {
        penyebut3.classList.remove("jawabpecahanbenar")
        penyebut3.classList.add("jawabpecahansalah")
        a[10] = false;
    }

    // Alert Benar Salah
    if (a[6] == true && a[7] == true && a[8] == true && a[9] == true && a[10] == true) {
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

// Contoh 2
// Button5 Cek Jawaban
var pembilang4 = document.getElementById("pembilang4");
var penyebut4 = document.getElementById("penyebut4");

document.getElementById("btn5").addEventListener("click", function () {

    if (pembilang4.value == 7) {
        pembilang4.classList.add("jawabpecahanbenar")
        pembilang4.classList.remove("jawabpecahansalah")
        a[11] = true;

    } else {
        pembilang4.classList.remove("jawabpecahanbenar")
        pembilang4.classList.add("jawabpecahansalah")
        a[11] = false;
    }

    if (penyebut4.value == 3) {
        penyebut4.classList.add("jawabpecahanbenar")
        penyebut4.classList.remove("jawabpecahansalah")
        a[12] = true;

    } else {
        penyebut4.classList.remove("jawabpecahanbenar")
        penyebut4.classList.add("jawabpecahansalah")
        a[12] = false;
    }

    // Alert Benar Salah
    if (a[11] == true && a[12] == true) {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
        document.getElementById("text6").style.display = "block";
        document.getElementById("btn5").style.display = "none";
    } else {
        document.getElementById("alertHasil4").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
        document.getElementById("text6").style.display = "none";
    }
})


// Button6 Cek Jawaban Akhir
var pembilang5 = document.getElementById("pembilang5");
var pembilang6 = document.getElementById("pembilang6");
var penyebut5 = document.getElementById("penyebut5");
var penyebut6 = document.getElementById("penyebut6");

document.getElementById("btn6").addEventListener("click", function () {

    if (pembilang5.value == 7) {
        pembilang5.classList.add("jawabpecahanbenar")
        pembilang5.classList.remove("jawabpecahansalah")
        a[13] = true;

    } else {
        pembilang5.classList.remove("jawabpecahanbenar")
        pembilang5.classList.add("jawabpecahansalah")
        a[13] = false;
    }

    if (penyebut5.value == 3) {
        penyebut5.classList.add("jawabpecahanbenar")
        penyebut5.classList.remove("jawabpecahansalah")
        a[14] = true;

    } else {
        penyebut5.classList.remove("jawabpecahanbenar")
        penyebut5.classList.add("jawabpecahansalah")
        a[14] = false;
    }

    if (pembilang6.value == 14) {
        pembilang6.classList.add("jawabpecahanbenar")
        pembilang6.classList.remove("jawabpecahansalah")
        a[15] = true;

    } else {
        pembilang6.classList.remove("jawabpecahanbenar")
        pembilang6.classList.add("jawabpecahansalah")
        a[15] = false;
    }

    if (penyebut6.value == 15) {
        penyebut6.classList.add("jawabpecahanbenar")
        penyebut6.classList.remove("jawabpecahansalah")
        a[16] = true;

    } else {
        penyebut6.classList.remove("jawabpecahanbenar")
        penyebut6.classList.add("jawabpecahansalah")
        a[16] = false;
    }

    // Alert Benar Salah
    if (a[13] == true && a[14] == true && a[15] == true && a[16] == true) {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-success" role="alert">' +
            '<strong>Benar Semua!</strong>' +
            '</div>';
        document.getElementById("text7").style.display = "block";
        document.getElementById("btn6").style.display = "none";
    } else {
        document.getElementById("alertHasil5").innerHTML =
            '<div class="alert alert-danger" role="alert">' +
            '<strong>Salah!</strong> Jawaban kamu masih ada yang salah, coba lagi ya!'
        '</div>';
        document.getElementById("text7").style.display = "none";
    }
})