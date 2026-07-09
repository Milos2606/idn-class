const brand = "IDNetworkers";

console.log("Halo saya bekerja di : " + brand);


let namaLengkap = "asep";
namaLengkap = "yal"
console.log("Halo nama saya " + namaLengkap + " Saya bekerja di " + brand);

let output = `Halo nama saya ${namaLengkap}, Saya bekerja di ${brand}`
console.log(output);

// Tipe data

//String = Mewakili nilai karakter/ kata
// "", '',``


const nama = "Alex" // String
console.log(nama)

//Tipe data Number 
//Desimal, -+, NaN

let angka1 = 1;
let angka2 = 0.5;
//let angka = prompt("Masukkan Angka :")
//let tambah = prompt("Masukkan Angka :")
console.log(angka1)
//console.log(Number(angka)) + Number((tambah))

//boolean
let active = true;
active = false;
console.log(active)
let makanan = ["ayam", "Ikan", "Daging", "Bakso"];

//manambahkan data array didepan :
makanan.push("ketoprak")
makanan.pop()//Hapus

//manambah data array dibelakang
makanan.unshift("seblak")//Nambahin
makanan.shift();

//modifikasi array
let updateMakan = makanan.with(1, "Ikan Goreng");

console.log(makanan)
console.log(updateMakan)
console.log("Halo saya lgi makan " + makanan[0]);
let maumakan = `Halo saya lagi makan ${makanan[2]}`
console.log(maumakan)


// tipe data object 

let biodata ={
    "nama": "Bruce Lee",
    "umur": 20,
    "skill": ["Frontend", "ui/ux Design"],
    "pendidikan" : {
        "instansi" : "Universitas Indonesia",
        "kompetensi_pendidikan" : "Teknik Informatika",
        "tahun_lulus": "2026",
        "ipk": 3.76
    }
}

console.log("nama saya" + biodata.nama + " umur saya " + biodata.umur+ " tahun")
console.log("Saya kuliah di " + biodata.pendidikan.instansi)

//undefined
let hasil;
console.log(hasil)

let saldo = null;
console.log(saldo);

// Structure Logika 
// if conditional 
let nilai = 90
// Nilai 85 - 100 = grade A
// Nilai 75 - 84 = grade B
// Nilai 60 - 74 = grade C
// Nilai dibawah 60 = Remedial

if(Number(nilai) < 0 || Number(nilai) > 100 ) {
    console.log("Nilai Kamu Invalid")

}else if (Number(nilai) >= 85){
    console.log("Nilai Kamu Sempurna (A)");

}else if(Number(nilai) >= 75){
    console.log("Nilai Kamu Baik (B)")

}else if (Number(nilai) >= 60){
    console.log("Nilai Kamu Cukup (C)")

}else if (Number(nilai) < 60 ){
    console.log("Nilai Kamu Perlu Perbaikan (Remedial)")

}


// Switch Conditional
let hari = "Minggu"
switch (hari.toLocaleLowerCase()) {
    case "senin":
        console.log("Masih ingat liburan kemarin ?");
        break;
    
    case "selasa":
        console.log("Mulai kerja");
        break;

    case "rabu":
        console.log("Kerja cukup semangat");
        break;

    case "kamis":
        console.log("Mulai capek kerja ya?");
        break;

    case "jumat":
        console.log("semangat kerja besok libur");
        break;

    case "sabtu":
    case "minggu":    
        console.log("Yeay Libur!!!");
        break;

    default:
        console.log("kamu salah masukin hari.")
        break;
}


//Operartor artikmatik

let bilangan1 = 10
let bilangan2 = 30
let bilangan3 = 100
let bilangan4 = 7

console.log(bilangan1 + bilangan4)
console.log(bilangan3 - bilangan4)
console.log(bilangan3 / bilangan2)
console.log(bilangan1 % bilangan4)
console.log(bilangan1 ** bilangan4)

console.log(2 + bilangan4 * bilangan1) 


// Logika perbandingan
// sama dengan dan tidak sama dengan 

let x = 10
let y = "10"

console.log(x == y)//true (sama dengan nilai)
console.log(x === y)//false(sama dengan nilai dan tipe data)

console.log(x != y)// tidak sama dengan nilai =>false
console.log(x !== y)//tidak sama dengan nilai dan tipe data => true


//lebih dari dan kurang dari 

console.log(x <= y)//true

//operator penugasan

let awal = 20
awal = 30
awal += 10
awal -= 50

console.log(awal)


//operator perbandingan logika 
let gajian = true;
let libur = false;
let healing = false;

// and = keduanya bernilai true = true;
console.log(gajian && libur);// false
console.log(libur && healing);// false

// or = Jika salah satu true maka hasilnya true
console.log(gajian || healing)//true
console.log(libur || healing)//false


//operator tenerary

let tombol = "off"
let lampu = 
tombol === "on" 
? console.log("Lampu Nyala") 
: console.log("Lampu Mati") 


//Looping atau perulangan 
// break = berhenti paksa
// continue = melewati
for(let i = 0; i <= 10; i++){
    if (i===5){
        break//berhenti
    }

    console.log("ini adalah perulangan", i)
}
    
for(let i = 10; i >= 1; i--){
    if (i === 6){
        continue;
    }
    console.log("Hitung mundur", i)
    
}
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        continue;
    }

    console.log("Angka Ganjil 1 - 20 adalah", i)
}

for(let i = 1; i <= 20; i++){
    if(i % 2 === 1){
        continue;
    }

    console.log("Angka Genap 1 - 20 adalah", i)
}

//Ngeloppping data array

let mobil = ["byd", "avanza", "xenia", "xpander", "panjero"]
mobil.push("Jeep")

for(let i = 0; i < mobil.length; i++ ){
    console.log(mobil[i])
}

//while loop 

//let password = "belajarjs";
//let input = prompt("Masukan Password")

// Jika password input tidak sesuai maka akan di ulangi 

//while( password != input){ // nilai true = jika password salah
   // input = prompt("Password salah, Silahkan coba lagi :)")
//}
//console.log("Password Benar")

// while loop saat login : 
// 1. User diminta untuk login sebanyak 3kali percobaan
// 2. Jika sudah 3 kali, looping selesai dan akun di banned
// break, increment(++), arikmatik (percobaan -sisanya)

let password = "belajarjs"
let pass 
const batas = 3;
let percobaan = 0;

// izinkan user jika kesempatannya masih ada 3

// while(percobaan < batas){
//     pass = prompt("Masukkan Password kamu.")
//     // saat kita nyobain 1 kali, nilai percobaan nambah 1
//     percobaan++
//     // kondisi saat password benar
//     if(pass === password){
//         alert('Password yang kamu masukkan sesuai');
//         break;
//     }
//     //jika batas sudah habis

//     if (percobaan === batas){
//         alert("Akun Kamu diblokir, Karena sudah melewati 3 kali percobaan")
//     }else{
//         alert(`Password salah, kamu bisa ulangi sebanyak ${batas - percobaan} kali lagi`)
//     }
// }



//Basic Function
function hallo () {
let show = alert("Halo ini adalah alert")
}

// Expression Function

let sapa = function (){
    // isi function
}

// Arrow Function

let hello = () => {
    // isi function
}


// parameter & argument 

function training (namaPeserta , namaKelas){
    console.log(`Hallo Kak, ${namaPeserta}, Kamu terdaftar ikut kelas ${namaKelas}`)
}
training("Asep", "Microtik");

//Menghitung luas persegi panjang 

let persegiPanjang = function(panjang, lebar){
 let luas = panjang * lebar;
 return luas;
}

console.log(persegiPanjang(10,50))

let segitiga = (alas,tinggi) => {
    let luas = alas * tinggi / 2
    return luas
}

console.log(segitiga(10,15))


// tentukan operator

function kurang (bil1, bil2){
    return bil1 - bil2 

}
function jumlah (bil1, bil2){
    return bil1 + bil2 

}
function kali (bil1, bil2){
    return bil1 * bil2 

}
function bagi (bil1, bil2){
    return bil1 / bil2 

}

//fungsi utama kalkulator

function calculator (){
    let input1 = Number(prompt("masukan angka pertama :"))
    let input2 = Number(prompt("Masukan angka kedua :"))
    let operator = prompt("Masukan operator (+, -, *, /)")

    let result;

    if(operator === "+"){
        result = jumlah(input1, input2)
    }else if(operator === "-"){
        result = kurang(input1, input2)

    }else if(operator === "*"){
        result = kali(input1, input2)
    }else if(operator === "/"){
        result = bagi(input1, input2)
    }else{
        alert("input yang kamu masukkan salah")
    }

    alert(`Hasil dari ${input1} ${operator} ${input2} adalah ${result}`)
}

//DOM = Document object model

const textTitle = document.getElementById("title")
const textSubTitle = document.querySelector(".sub-title")
const textKonten = document.querySelector("#content")
const listItem = document.querySelectorAll('li')

// DOM Manipulation

textTitle.textContent = "Elemen ini sudah diubah"
textKonten.innerHTML = `<a href="#">Masuk ke kelas</a>`

// ubah style 
//textTitle.style.color = "#0088cc";// ini menang
textTitle.classList.add("text-title")
textSubTitle.classList.remove("font-kecil");

console.log(textTitle)
console.log(textSubTitle)
console.log(textKonten)
console.log(listItem)

// Menambah Element Baru :
const daftar = document.getElementById("list")

let listTraining = [
    "Laravel", "mtcna", "Linux", "CyberSecurity","huawei"
]

listTraining.forEach((kelas) => {
    const list = document.createElement("li")
    list.textContent = kelas
    // Agar nampil di UI
daftar.appendChild(list)
})




// Click sederhana dengan button
//

//Challange event listener
// buatkan counter dengan tombol : Tambah ++, Kurang -- , reset
// saat tambah, colornya warna hijau 
// saat kurang, colornya warna merah 
// saat reset, warna hitam

const angkaBasic = document.querySelector("#counter1")
const btnTambah = document.getElementById("btn-counter-tambah")
const btnKurang = document.getElementById("btn-counter-kurang")
let nomor1 = 0;
const reset = document.getElementById("reset")

btnTambah.addEventListener("click", () =>{
    nomor1++
    angkaBasic.textContent = nomor1;
     angkaBasic.style.color = "#1ca46b"
     btnKurang.disabled = false;
     
})

btnKurang.addEventListener("click", () =>{
    nomor1--
    angkaBasic.textContent = nomor1;
    angkaBasic.style.color = "#ff0000"
    
})
reset.addEventListener("click", () => {
    nomor1 = 0
    angkaBasic.textContent = 0
    angkaBasic.style.color = "#000000"
    btnKurang.disabled = true;
})


if(nomor1 === 0){
    btnKurang.disabled = true;
}else{
    btnKurang.disabled = false;
}



//const inputNama = document.getElementById("nama")
//const showNama = document.querySelector(".nama")

//inputNama.addEventListener("input", (e) =>{
    //showNama.textContent = `Halo mr/ms. ${e.target.value}`
//})

const form = document.getElementById("submitForm")
const inputNama = document.getElementById("nama")
const inputPosisi = document.getElementById("posisi")
const showPesan = document.querySelector(".pesan")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Handle saat nama / posisi kosong

    if(inputNama.value.trim() ==="" || inputPosisi.value.trim() === ""){
        showPesan.textContent = "Pastikan nama dan Posisi terisi"
        showPesan.style.color = "#ff0000"

        return;
    }

    showPesan.textContent = `
    Selamat Datang mas/mba  ${inputNama.value}, 
    anda posisinya adalah ${inputPosisi.value}, Selamat bekerja     
    `

    showPesan.style.color = "#00a200"
    form.reset();
});

//JavaScript Modern

function getdata(callback){
    setTimeout (() => callback('datasiap'), 1000)
}

getdata((hasil) =>{
    console.log(hasil)
})

const product = [
    {id : 1, nama : "Buku", Harga : 100000},
    {id : 2, nama : "Sepatu", Harga : 1500000},
    {id : 3, nama : "Celana", Harga : 300000},
    {id : 4, nama : "Baju", Harga : 250000},
    {id : 5, nama : "Laptop", Harga : 8000000},
]

//async

async function ambilData(){
    return new Promise ((resolve, reject) =>{
        //mengirim variabel product ke fungsi resolve
        setTimeout (() => resolve(product), 1000)
    })
}

//tampilan output : 

async function tampil(){
    console.log("Sedang memuat data..")
    const data = await ambilData();
    console.log(data)
}

//memanggil data dari server (API)

//Cara dasar : 

fetch(
    "https://6a4f440bf45d5352b611258d.mockapi.io/api-latihan/v1/product")
.then((res) => res.json()) //ubah respon API jdi JSON
.then((data) => console.log(data)) 
.catch ((err) => console.log ("Gagal : ", err))


async function loadData() {
    const api = await fetch("https://6a4f440bf45d5352b611258d.mockapi.io/api-latihan/v1/product")
    const data = await api.json();
    console.log(data)
    
}

//cara yang direkomendasikan (error handling)

async function loadProduct() {
    try {
        const api = "https://6a4f440bf45d5352b611258d.mockapi.io/api-latihan/v1/product"
        const res = await fetch (api)

        //cek status respon, oke = 200
        if (!res.ok){
            throw new Error(`HTTP Error : ${res.status}`);
        }
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log("Terjadi Kesalahan :", error.message)
    }
}