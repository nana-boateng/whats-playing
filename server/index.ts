const movieID = 346698;
const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.AUTH_BEARER,
  },
};

const response = await fetch(url, options);
const html = await response.json();
console.log(html);
