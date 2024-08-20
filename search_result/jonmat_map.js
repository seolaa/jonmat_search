window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    const searchQueryElement = document.getElementById('searchQuery');

    if (searchQueryElement && query) {
        searchQueryElement.innerText = `#${query}의 리뷰를 보여드릴게요!`;
        fetchSearchResults(query);
    } else {
        console.error("Query parameter is missing or element not found");
    }
}