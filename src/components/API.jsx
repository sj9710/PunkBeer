import axios from "axios";
export const getBeers = async (page) => {
  const beers = await axios(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=8`
  );
  return beers.data;
};

export const searchBeers = async (keyword) => {
  const beers = await axios(
    `https://api.punkapi.com/v2/beers?beer_name=${keyword}`
  );
  return console.log(beers.data);
};
