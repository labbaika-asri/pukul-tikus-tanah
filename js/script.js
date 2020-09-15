const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");
const pop = document.getElementById("pop");

let tanahSebelumnya;
let selesai;
let score;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(tanah) {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add("muncul");
    setTimeout(() => {
        tRandom.classList.remove("muncul");
        if (!selesai) {
            munculkanTikus(tanah);
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus(tanah);
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    if (this.parentNode.classList.contains("muncul")) {
        pop.play();
        this.parentNode.classList.remove("muncul");
        skor++;
        papanSkor.textContent = skor;
    }
}

tikus.forEach((t) => {
    t.addEventListener("click", pukul);
});
