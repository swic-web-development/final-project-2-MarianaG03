import store from './store'

export async function fetchFilms() {
  // Tells UI that we are loading
  store.seState({ isLoading: true, error: null })

  try {
    // Fetching data from API
    const response = await fetch('https://ghibliapi.vercel.app/films/{id}')
    // Check if the response is ok
    const data = await response.json()

    // Check if the response is ok
    store.setState({
      films: data,
      isLoading: false,
    })
  } catch (error) {
    // If there is an error, set the error state
    store.setState({
      error: 'failed to fetch Films.',
      isLoading: false,
      films: [],
    })
  }
}
