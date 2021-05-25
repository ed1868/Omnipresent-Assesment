import axios from 'axios';

const service = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  withCredentials: true,
});

const errHadler = err => {
  if (err) {
    console.error(err);
    if (err.response && err.response.data) {
      console.error('API response', err.response.data);
      throw err.response.data.message;
    }
    throw err;
  }
};

export default {
  service: service,

  getCountries() {
    return service
      .get('/all')
      .then(payload => {
        console.log('ALL COUNTRY DATA: ', payload);
      })
      .catch(err => {
        if (err) {
          console.log('ERR : ', err);
        }
      });
  },

  getCountry(countryCode) {
    console.log('COUNTRY CODE GIVEN : ', countryCode);

    return service
      .post(`/alpha/${countryCode}`)
      .then(payload => {
        console.log('SPECIFIC COUNTRY : ', payload);
      })
      .catch(err => {
        if (err) {
          console.log('ERROR : ', err);
        }
      });
  },
};
