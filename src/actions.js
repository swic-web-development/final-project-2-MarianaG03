import store from './store'

export async function fetchFilms() {
  // Tells UI that we are loading
  store.setState({ isLoading: true, error: null })

  try {
    // Fetching data from API
    const response = await fetch('https://ghibliapi.vercel.app/films')
    // Check if the response is ok
    const data = await response.json()

    // Check if the response is ok
    store.setState({
      films: data,
      isLoading: false,
    })
  } catch (error) {
    // Handle errors
    store.setState({
      error: 'Failed to fetch films.',
      isLoading: false,
      films: [],
    })
  }
}
