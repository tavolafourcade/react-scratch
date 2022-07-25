import dotenv from 'dotenv'
import axios from 'axios';

dotenv.config()

export const getRequest = async () => await axios.get(process.env.REACT_APP_API_URL,
  {headers: {
    'x-api-key': process.env.REACT_APP_API_KEY
  }})
