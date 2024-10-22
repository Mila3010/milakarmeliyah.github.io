const examScore = [80, 85, 70, 90, 93, 77];
// let total = 0;
// for (let score of examScore) {
//   total += score;
// }
// const isGraduate = examScore.every((score) => score >= 75);
// const angkaDouble = angka.map(function (num) {
//   return num * 2;
// });
// const angkaBaru = angka.filter((n) => {
//   return n < 5;
// });

// const total = examScore.reduce((total, score) => {
//   return total + score;
// });

const animes = [
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2004,
  },
  {
    title: "Attack on Titan",
    rating: 92,
    year: 2013,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 1998,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];

const anime = animes.map(({ title, year, rating }) => {
  return `${title} (${year}) rating ${rating}`;
});

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//   console.log(lowAnime, currAnime);
//   if (currAnime.rating < lowAnime.rating) {
//     return currAnime;
//   }
//   return lowAnime;
// });
// const isAnimeListNew = animes.some((anime) => anime.year > 2010);
// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animes
//   .filter((anime) => anime.rating >= 85)
//   .map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// const animeList = animes.map(function (anime) {
//   return anime.title.toUpperCase();
// });

// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(5);

// const hasil = function (x) {
//   return x * x;
// };

// const perpangkatan = (x) => {
//   return x * x;
// };

// const random = () => Math.floor(Math.random() * 1000);

// const add = (a, b) => a + b;

// console.log("Hallo....");
// setTimeout(() => {
//   console.log("masih di sana gak?");
// }, 5000);
// console.log("Saya Pergi yaa");

// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);
