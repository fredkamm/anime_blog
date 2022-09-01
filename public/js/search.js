


//searches the api for the anime
function searchAnime(searchParameter) {
    fetch('https://api.jikan.moe/v3/search/anime?q=' + searchParameter + '&order_by=title&sort=asc&limit=1')
    .then(function(response){
        if (!response.ok) {
            throw response.json();
        }
        window.localStorage.setItem('Anime', JSON.stringify(response));
    })
}

//replaces unsearchable characters in the string with characters that can be used in a search
function filterInput(inputString) {
    inputString.replaceAll(' ' , '_');
}

//displays the searched anime
function displaySearch() {
    const anime = JSON.parse(window.localStorage.getItem('Anime'));

    document.querySelector('#aTitle').textContent = 'Title:' + anime.title;
    document.querySelector('#synopsis').textContent = 'Synopsis:' + anime.synopsis;
    document.querySelector('#episodes').textContent = 'Episodes:' + anime.episodes;
    document.querySelector('#malScore').textContent = 'Rating:' + anime.score;
    document.querySelector('#malUrl').setAttribute('href' , anime.url);
    document.querySelector('#malUrl').setAttribute('target' , anime.title);
    document.querySelector('aPoster').setAttribute('src' , anime.image_url);
}

function clearDisplayData() {
    document.querySelector('#aTitle').textContent = 'Title:' + '';
    document.querySelector('#synopsis').textContent = 'Synopsis:' + '';
    document.querySelector('#episodes').textContent = 'Episodes:' + '';
    document.querySelector('#malScore').textContent = 'Rating:' + '';
    document.querySelector('#malUrl').setAttribute('href' , '');
    document.querySelector('#malUrl').setAttribute('target' , '');
    document.querySelector('aPoster').setAttribute('src' , '');
}