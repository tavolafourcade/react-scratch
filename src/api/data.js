import axios from 'axios';
import { API_URL, API_KEY } from '../config';
export const getRequest = async () => {
  console.log(API_URL, API_KEY)
  const res = await axios.get(API_URL,
  {headers: {
    'x-api-key': API_KEY
  }}).then(res => { 
    const data = res.data
    return data
  })
  console.log('res', res)
  return res
}

  // console.log(API_URL, API_KEY)