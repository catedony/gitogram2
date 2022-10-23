import axios from 'axios'
import { makeRequestAuthorized } from '@/api/baseApi.js'

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
  return makeRequestAuthorized({
    url: '/user',
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`
    }
  })
}
