chrome.contextMenus.create({
    title: "Search Letterboxd.com for \"%s\"",
    contexts: ["selection"],
    onclick: navigateToLetterboxdFromContextMenu
});

function navigateToLetterboxdFromContextMenu(info, tab) {
    navigateToLetterboxd(info.selectionText)
};