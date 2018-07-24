import {ROOT_URL} from './config';

export const api = {
    async fetchCountryName(name) {
      const response = await fetch(`${ROOT_URL}/name/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  
      if (response.status !== 200) {
        throw new Error('Sorry ¯\_(ツ)_/¯');
      }
  
      return await response.json();
    },

    async fetchCountryNameAll() {
        const response = await fetch(`${ROOT_URL}/name/all`, {
          method: 'GET',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        });
    
        if (response.status !== 200) {
          throw new Error('Sorry ¯\_(ツ)_/¯');
        }
    
        const {data: country} = await response.json();
    
        return country;
      }

}