import axios from "axios"

async function getTopMovie(setCardsInfo) {
    const options = {
      method: 'GET',
      url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=10 ',
      headers: {
        'X-API-KEY': '57515040-b5cd-4a52-9c97-59d2ca96eff6',
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.request(options)
    setCardsInfo(response.data)
}

async function getCurrMovie(id) {
    const options = {
        method: 'GET',
        url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '57515040-b5cd-4a52-9c97-59d2ca96eff6', 
        },
    }
    const response = await axios.request(options)
    localStorage.setItem('cardInfo', JSON.stringify(response.data))
    // console.log(response.data);
    window.location.href = 'http://localhost:5173/filmInfo';
}

async function searchMovie(movie, setInputInfo) {
    const options = {
        url: `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${movie}&page=2`,
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '57515040-b5cd-4a52-9c97-59d2ca96eff6'
        }
    }
    const response = await axios.request(options)
    setInputInfo(response.data)
}

async function addFavCard(obj, titles, setTitles) {
    let post = false
    for (let i = 0; i < titles.length; i++) {
        if (titles[i] === obj.filmId) {
            post = true
        }
    }
    if (post === false) {
        setTitles((prev)=> [...prev, obj.filmId])
        await axios.post('https://648cbbd78620b8bae7ed509c.mockapi.io/favCards', obj)
            .then((resp)=>{localStorage.setItem(`${resp.data.filmId}`, JSON.stringify(resp.data))})
    }
}

async function deleteFavCard(filmId, {setTitles, titles}) {
    const mockId = JSON.parse(localStorage.getItem(filmId)).id
    await axios.delete(`https://648cbbd78620b8bae7ed509c.mockapi.io/favCards/${mockId}`)
    setTitles(titles.filter(title => title != filmId ))
    localStorage.removeItem(filmId)
}


export {getTopMovie, getCurrMovie, searchMovie, addFavCard, deleteFavCard} 