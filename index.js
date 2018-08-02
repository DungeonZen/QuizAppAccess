
let SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
let API_KEY = 'AIzaSyD7DXcmm722XhinNZvsheIHHoSC4DKt3g0';
let YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v=";
function displaySearchResults(data) {

    let displayElem = $('.js-results');
    data.items.forEach(function(item) {
        let elem = $('.js-result-template').children().clone();
        let watchUrl = YOUTUBE_WATCH_URL + item.id.videoId;
        let imageUrl = item.snippet.thumbnails.default.url;
        elem.find('a').attr('href', watchUrl);
        elem.find('img').attr('src', imageUrl);
        displayElem.append(elem);
    });

}

function clearResults() {
    $('.js-results').empty();
}


function queryYouTube(searchTerm, callbackFn) {
    let data = {
        part: 'snippet',
        key: API_KEY,
        q: searchTerm,
    }
    $.getJSON(SEARCH_URL, data, callbackFn);
}



function watchForSubmission() {
    $('#js-search-term').submit(function(event){
        event.preventDefault();
        $('footer').hide(); 
        clearResults();
        let searchTerm = $(event.currentTarget).find('input[name="query"]').val().trim();
        queryYouTube(searchTerm, displaySearchResults);
    });
}

$(function() {
    watchForSubmission();
});