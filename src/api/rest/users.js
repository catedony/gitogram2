import { makeRequestAuthorized } from '@/api/baseApi.js'
export const getMyRepos = (username) => makeRequestAuthorized({
  url: `/users/${username}/repos`,
  headers: {
    accept: 'application/vnd.github.v3.html+json'
  }
})
