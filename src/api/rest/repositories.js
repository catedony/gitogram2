import { makeRequest } from '@/api/baseApi.js'
import { addStartZero } from '@/stories/helpers'

export const getRepositories = () => {
  const params = new URLSearchParams()

  const weekMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekMS)
  const date = [
    weekAgo.getFullYear(),
    addStartZero(weekAgo.getMonth() + 1),
    addStartZero(weekAgo.getDate())
  ].join('-')
  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:javascript created:>${date}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}

export const getIssues = ({ repo, owner }) => {
  const header = 'application/vnd.github.v3.html+json'

  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`,
    headers: {
      accept: header
    }
  })
}
