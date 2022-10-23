import { makeRequestAuthorized } from '@/api/baseApi.js'

export const starRepo = ({ owner, repo }) => makeRequestAuthorized({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unstarRepo = ({ owner, repo }) => makeRequestAuthorized({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete',
  headers: {
    accept: 'application/vnd.github.v3.html+json'
  }
})

export const getStarredRepos = () => makeRequestAuthorized({
  url: '/user/starred'
})
