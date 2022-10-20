import axios from 'axios'
import { makeRequest } from '@/api/baseApi.js'

export const getToken = async ({ clientId, code, clientSecret }) => {
  return await axios.post('https://webdev-api.loftschool.com/github',
    {
      clientId,
      code,
      clientSecret
    }
  )
}

export const getUserData = () => {
  return makeRequest({
    url: '/user',
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`
    }
  })
}
