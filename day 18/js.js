const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const data = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.log(err);
  }
}
console.log(' === async and await')
