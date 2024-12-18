// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// Promise version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  let result = await requestPromise("movie.com");
  console.log("Hello");

  try {
    let result = await requestPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}

// requestPromise("movie.com")
//   .then((result) => {
//     console.log(result);
//     console.log("page 1");
//     return requestPromise("movie.com");
//   })
//   .then(() => {
//     console.log("page 2");
//     return requestPromise("movie.com");
//   })
//   .then(() => {
//     console.log("page 3");
//     return requestPromise("movie.com");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);
//     requestPromise("movie.com")
//       .then((response) => {
//         console.log("success", response);
//         requestPromise("movie.com")
//           .then((response) => {
//             console.log("success", response);
//             requestPromise("movie.com")
//               .then((response) => {
//                 console.log("success", response);
//                 requestPromise("movie.com")
//                   .then((response) => {
//                     console.log("success", response);
//                   })
//                   .catch((error) => {
//                     console.log("error", error);
//                   });
//               })
//               .catch((error) => {
//                 console.log("error", error);
//               });
//           })
//           .catch((error) => {
//             console.log("error", error);
//           });
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// requestCallback(
//   "movie.com",
//   function (response) {
//     console.log("success", response);
//   },

//   function (error) {
//     console.log("error", error);
//   }
// );

const contohPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve(() => {
    //   "berhasil";
    // });
    reject(() => {
      "gagal";
    });
  });
};
