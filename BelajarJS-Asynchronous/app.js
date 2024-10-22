setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "yellow";
    setTimeout(function () {
      document.body.style.backgroundColor = "green";
      setTimeout(function () {
        document.body.style.backgroundColor = "blue";
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

searchMovieApi(
  "naruto",
  function (movies) {
    saveToMyDb(
      "movies",
      function () {
        // kalau berhasil kita simpan
        filteringMovie(
          movies,
          movies,
          () => {},
          () => {}
        );
      },
      () => {}
      // kalau gagal kita coba lagi
    );
  },
  () => {
    // server error
  }
);
