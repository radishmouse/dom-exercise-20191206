// Challenge #1: make this show up on the
// page at all.
const oneAddress = "https://google.com";
const linkContainer = document.querySelector(".js-link-container");

function linkPlacer(linkPath){
    const links = document.createElement("a");
    links.href = linkPath;
    links.textContent = linkPath;
    linkContainer.appendChild(links);
}

// linkPlacer(oneAddress);
// linkPlacer("https://instagram.com");
// linkPlacer("https://marthastewart.com");


const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://instagram.com",
    "https://marthastewart.com"
];

function anchorFromLinkPath(linkPath) {
    // They pass a string like "https://google.com"
    // And I give them the DOM element equivalent
    // of <a href="https://google.com">https://google.com</a>
    const link = document.createElement("a");
    link.href = linkPath;
    link.textContent = linkPath;
    return link;
}

function anchorWithFormattedText(anchor) {
    // They give me an element that is equiv to:
    // <a href="https://google.com">https://google.com</a>
    const originalText = anchor.textContent;

    // And I give them an element with formatted textContent
    // <a href="https://google.com">google.com</a>
    anchor.textContent = originalText.slice(8);
    return anchor;
}

function appendBreak() {
    const breakElement = document.createElement('br');
    linkContainer.appendChild(breakElement);
}

function appendAnchorToContainer(anchorElement) {
    // They pass me the DOM element equivalent of
    // <a href="https://google.com">https://google.com</a>

    // And I append it as a child to linkContainer
    linkContainer.appendChild(anchorElement);
    appendBreak();
}

// Transform addresses into anchor elements
// let links = addresses.map(anchorFromLinkPath);
// links = links.map(anchorWithFormattedText);
// links.map(appendAnchorToContainer);

// let links = addresses.map(anchorFromLinkPath);
// links = addresses.map(anchorFromLinkPath).map(anchorWithFormattedText);
addresses
    .map(anchorFromLinkPath)
    .map(anchorWithFormattedText)
    .map(appendAnchorToContainer)


