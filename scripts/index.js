// Get me *all* the paragraphs
const allParagraphs = document.querySelectorAll('p');

let count = 0;
// Go through each paragraph...
allParagraphs.forEach(paragraph => {

    // Give them each an unique "id"
    // in a custom attribute, which always starts
    // with "data-" (because it's safe to use.)
    paragraph.setAttribute('data-database-id', count);
    count += 1;

    // Add an event listener to each one
    paragraph.addEventListener('click', event => {
        // log the one that got clicked
        console.log(event.target);
        console.log(event.target.getAttribute('data-database-id'));
    });
});