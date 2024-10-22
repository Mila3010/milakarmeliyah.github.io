// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 20; i >= 0; i -= 2) {
//   console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10) {
//   console.log(i);
// }

// const animals = ["cat", "deer", "hog", "koala", "zebra"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i + 1, animals[i]);
// }

// const studentRow = [
//   ["Olivia", "LIam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`  ${row[j]}`);
//   }
// }

// for (let row of studentRow) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

const studentScore = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Noah: 18,
  Amelia: 32,
  Oliver: 10,
  Ava: 11,
  Elijah: 21,
  Sophia: 14,
  Mateo: 22,
};

// for (let student in studentScore) {
//   console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);

// const pilihan = "abcd";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }

// perulangan while
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// perulangan for
// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// const PASSWORD = "Pass123";

// let guess = prompt("enter the password");
// while (guess !== PASSWORD) {
//   guess = prompt("enter the password");
// }
// alert("congrats! the password is correct");

// let input = prompt("Hei, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }
// alert("ok");

// for (let i = 0; i < 10000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }
