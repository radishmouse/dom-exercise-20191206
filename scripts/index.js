// Challenge #1: make this show up on the
// page at all.
const oneAddress = "https://google.com";

const addresses = [
    {
        url: "https://google.com",
        text: "Goooooogle"
    },
    {
        url: "https://instagram.com",
        text: "Instagram"
    }
];

// "https://bing.com",
// "https://duckduckgo.com",
// "https://instagram.com",
// "https://marthastewart.com"

const linkContainer = document.querySelector(".js-link-container");

function linkPlacer(linkPath){
    const links = document.createElement("a");
    links.href = linkPath;
    links.textContent = linkPath;
    linkContainer.appendChild(links);
}

// Testing our linkPlacer function
// linkPlacer(oneAddress);
// linkPlacer("https://instagram.com");
// linkPlacer("https://marthastewart.com");

// How to write an event handling function
// aka an "Event Handler"
// aka "Event Handling Callback"
// aka "Event Callback"
// What is that????!!?
// - it's a function
// - it will be called by the browser, not by you
// - the browser will pass all the info about the event
//      - was it a left click? a right click?
//      - was the user holding down the shift key?
//      - what are the X and Y coordinates on the page when the clicked

function exampleCallback(event) {    
    // debugger;
    // Don't let the browser do
    // the default behavior.
    // For anchor tags, that's going to another page.
    // For forms, it sends user input to a server.
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.href);
    console.log(event.target.textContent);
    // event.target.textContent = "alskfdklasjhdfaksljfhsafd"
    console.log("You clicked!!!!!!!");
}

function anchorFromObject(obj) {
    const link = anchorFromLinkPath(obj.url);
    link.textContent = obj.text;

    link.addEventListener("click", exampleCallback);

    return link;
}

function anchorFromLinkPath(linkPath) {
    // debugger;
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

function appendElementToContainer(element) {
    // They pass me the DOM element equivalent of
    // <a href="https://google.com">https://google.com</a>

    // And I append it as a child to linkContainer
    linkContainer.appendChild(element);
    appendBreak();
}

// Version #2: Break into multiple helper functions
// so we can introduce additional steps.
// Transform addresses into anchor elements
// let links = addresses.map(anchorFromLinkPath);
// // Format their textContent
// links = links.map(anchorWithFormattedText)
// // Append them to the container
// links.map(appendElementToContainer)

// Version #3: Chaining syntax
// addresses
//     .map(anchorFromLinkPath)
//     .map(anchorWithFormattedText)
//     .map(appendAnchorToContainer)




function listItemWithAnchor(anchor) {
    // They give me element like this:
    // <a href="https://google.com">google.com</a>
    const li = document.createElement("li");
    li.appendChild(anchor);
    // I give them an element like this:
    // <li>
    //   <a href="https://google.com">google.com</a>
    // </li>        
    return li;
}

function listWithListItems(listItemArray) {
    const ul = document.createElement('ul');
    // const ul2 = document.querySelector('ul');

    for (let elementItem of listItemArray) {
        ul.appendChild(elementItem);
    }

    return ul;
}

// Testing our helper functions:
// const a = anchorFromLinkPath(oneAddress);
// const li = listItemWithAnchor(a);
// const ul = listWithListItems([li]);
// appendElementToContainer(ul);


// Version #4: Wrap anchors in list items in an unordered list
let links = addresses.map(anchorFromObject); // returns array of anchors
// links = links.map(anchorWithFormattedText);
let items = links.map(listItemWithAnchor); // wraps anchors in list items
let list = listWithListItems(items); // wraps list items in <ul>
appendElementToContainer(list); // adds <ul> to container


// Versino #5 Extra fancy: uses chaining syntax
// let list = addresses
//             .map(anchorFromLinkPath)
//             .map(anchorWithFormattedText)
//             .map(listItemWithAnchor)
            
// list = listWithListItems(list);
// appendElementToContainer(list);