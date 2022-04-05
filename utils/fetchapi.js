import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e2e0fbe637msh784799c5fa93919p1e59fcjsne5e8b990cd65' ,
    },
  });
    
  return data;
}
