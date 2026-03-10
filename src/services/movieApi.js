const API_KEY = '136a2087'
const BASE_URL = 'https://www.omdbapi.com/'

//usando fetch() en lugar de axios
export const searchMovies = async ({ query, type, year }) => {
  //construcción manual de la URL con parámetros
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}${year ? `&y=${year}` : ''}`
  
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error en la red')
    return await response.json()
  } catch (error) {
    console.error("Error en searchMovies (fetch):", error)
    throw error
  }
}

export const getMovieDetails = async (imdbID) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error en la red')
    return await response.json()
  } catch (error) {
    console.error("Error en getMovieDetails (fetch):", error)
    throw error
  }
}
