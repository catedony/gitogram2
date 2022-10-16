import { makeRequest } from '@/api/baseApi.js'

export const getReadme = ({ repo, owner }) => {
  const header = 'application/vnd.github.v3.html+json'

  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: header
    }
  })
}
