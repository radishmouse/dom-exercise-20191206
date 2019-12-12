

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://bob.com",
    "https://lalala.com"
];

// How to get one address on the page?
const anAddress = "https://google.com";

// Where will it go?
const navContainer = document.querySelector('.js-link-container');
console.log(navContainer);

function renderAddressAsAnchor(theAddress) {
    console.log("rendering an address using a function!");
    // How do transform a string into an anchor element?
    // Let's create an empty anchor element!
    const anAnchor = document.createElement('a');
    anAnchor.href = theAddress;
    anAnchor.textContent = theAddress;
    console.log(anAnchor);

    navContainer.appendChild(anAnchor);
}

// Can I use my function to render individual addresses?
// renderAddressAsAnchor(anAddress);                               
// renderAddressAsAnchor("https://digitalcrafts.com");
// renderAddressAsAnchor(addresses[1]);

// Can I use my function in a loop?
// for (let item of addresses) {
    // renderAddressAsAnchor(item);
// }

// Can I get the array to do the looping itself and *use* my function
// for each item?
// addresses.forEach(renderAddressAsAnchor);
// addresses.map(renderAddressAsAnchor)

// Same thing, but with anonymous functions
// addresses.forEach(function (item) {
//     console.log(`About to render: ${item}`);
//     renderAddressAsAnchor(item);
// });

// Same thing again, but with arrow functions!
addresses.forEach(item => {
    console.log(`About to render: ${item}`);
    renderAddressAsAnchor(item);
});
