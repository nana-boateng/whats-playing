export async function getMovieByID(id: Number): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.BEARER_TOKEN,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
    return { data: json, id };
  } catch (error) {
    console.log(error);
    return error;
  }
}
