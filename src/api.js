const API_KEY = "24976c7dd39e6fa32a4afbdf7df0cd7c";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_network=213`
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
    },
    {
        name: "drama",
        title: "Drama",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=18`
    },
    {
        name: "animation",
        title: "Animação",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=16`
    },
]

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
}

export default categories;