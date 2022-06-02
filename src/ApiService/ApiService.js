const KEY = '084d40a9fef3af2d63a3d640c3a032ce';

export async function GetTrending() {
    const BasUpl = 'https://api.themoviedb.org/3/trending/all/day';
    return await fetch(`${BasUpl}?api_key=${KEY}`).then(response => {
        return response.json();
    });
}

export async function SearchMovies(name) {
    const BasUpl = 'https://api.themoviedb.org/3/search/movie';
    return await fetch(
        `${BasUpl}?query=${name}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
    ).then(response => {
        return response.json();
    });
}

export async function GetMovieDetails(id) {
    const BasUpl = 'https://api.themoviedb.org/3/movie';
    const response = await fetch(`${BasUpl}/${id}?api_key=${KEY}`);

    if (response.ok) {
        return response.json();
    }
    return Promise.reject(new Error(' Error: 404'));
}

export async function GetMovieCast(id) {
    const BasUpl = 'https://api.themoviedb.org/3/movie';
    return await fetch(`${BasUpl}/${id}/credits?api_key=${KEY}`).then(
        response => {
            return response.json();
        }
    );
}

export async function GetMovieReviews(id) {
    const BasUpl = 'https://api.themoviedb.org/3/movie';
    return await fetch(
        `${BasUpl}/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    ).then(response => {
        return response.json();
    });
}
