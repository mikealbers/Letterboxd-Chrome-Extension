function navigateToLetterboxd(query) {
    var letterboxdURL = "https://letterboxd.com/search/" + query;
    chrome.tabs.create({
        url: letterboxdURL
    });
}