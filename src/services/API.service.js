import axios from 'axios'

const API_URL =
  'https://gist.githubusercontent.com/poepanda/004af517163df9b539628e9d307e5d76/raw/9fbf3c35f67c9d6e0e85de8b636b6b7a2f2952bf'

const apiFetchAllData = async () => {
  console.log('AAA')
  const response = await axios.get(`${API_URL}`)
  console.log('API', response)
  return response
}

export default apiFetchAllData
