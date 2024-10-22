// console.log("sebelum pembanding");
// if (1 + 1 === 2) {
//   console.log("di dalam pembanding");
// }
// console.log("setelah pembanding");

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Angka lebih besar dari 0.5");
// }

// if (angka <= 0.5) {
//   console.log("Angka lebih kecil dari 0.5");
// }

// const iniHari = prompt("Isikan hari!").toLowerCase();

// if (iniHari === "senin") {
//   console.log("Selamat bekerja kawan!");
// } else if (iniHari === "sabtu") {
//   console.log("Semoga jangan cepat berlalu!");
// } else {
//   console.log("Yah biasa saja");
// }

// const nilai = "90";

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 100) {
//   console.log("A");
// }

// const password = prompt("buat password");

// password harus sepanjang 6 karakter
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password tidak memenuhi syarat");
// }

// const balonku = prompt("input warna balon");
// switch (balonku) {
//   case "merah":
//     console.log("warna merah");
//     break;
//   case "hijau":
//     console.log("dooorrr");
//     break;
//   default:
//     console.log("bukan balon saya");
// }

// let lemparDadu = console.log(lemparDadu);

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi() {
//   console.log("Cek ......");
//   console.log("Do re mi..");
// }

// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();

// function selamatPagi(name) {
//   console.log(`Halo, ${name}. Selamat Pagi!`);
// }

// selamatPagi("Aim");

// function jumlahkan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Bukan Angka";
//   }
//   return a + b;
// }

// let programming = "JavaScript";

// function typeSafe() {
//   let programming = "TypeScript";
//   console.log(programming);
// }

// typeSafe();

// console.log(programming);

// let tinggi = 8;
// if (tinggi > 5) {
//   var lebar = 10;
//   // console.log(lebar);
// }
// console.log("lebar:", lebar);

// for (let index = 0; index < 10; index++) {
//   var lebar = index;
//   // console.log(indexNumber);
// }
// console.log("lebar: ", lebar);

// function lamarKerja() {
//   const jabatan = "Programmer";

//   function lebihDalam() {
//     function orangDalam() {
//       let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//       console.log(kenalan);
//     }

//     orangDalam();
//   }
//   lebihDalam();
// }

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai, pembanding) {
//   return nilai * pembanding;
// };

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi");
//     };
//   }
// }

// function myFun() {
//   // function biasa
//   console.log("Hi");
//   return "Hello";
// }

// const myMath = {
//   // object
//   perkalian: function (x, y) {
//     // method
//     return x * y;
//   },
// };

// const saya = {
//   nama: "Mila",
//   hobi: "Mencintainya",
//   kenalan: function () {
//     return `Hi, saya ${this.nama}. Hobi saya ${this.hobi}.`;
//   },
// };

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Silakan masukkan tipe data string pada argument teriak()");
//   }
// }

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function lemparDadu(sisi = 6) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(msg = "Selamat bekerja", name) {
//   console.log(`${name} ${msg}`);
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ["Alex", "Bimo", "Cici", "Delia", "Felix"];

// const campuran = [...angka, ...nama];

// const user = {
//   name: "Jhon",
//   email: "jhon@doe.com",
// };

// const credential = {
//   password: "password",
//   token: "198292830938e9349nfjfn",
// };

// const userBaru = { ...user, ...credential };

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// const nama = ["Alex", "Bimo", "Cici", "Delia", "Felix", "Gerard", "hilya"];

// const pemenang = (gold, silver, bronze, sisa) => {
//   console.log(`Medali emas diraih: ${gold}`);
//   console.log(`Medali silver diraih: ${silver}`);
//   console.log(`Medali bronze diraih: ${bronze}`);
//   console.log(`Peserta lainnya: ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//   name: "Jhon",
//   email: "jhon@doe.com",
//   role: "Admin",
// };

// // const { name: nama, email, phone = "0813839389" } = user;

// const userAndRole = ({ name, role }) => {
//   return `${name} ${role}`;
// };
