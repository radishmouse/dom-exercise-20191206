// window.addEventListener('scroll', function() {
//     document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
//   });
const myText = document.querySelector('.js-the-text');
let scrollCount = 0;
// console.log("about to add event listener");
document.addEventListener('scroll', (event) => {
    console.log(event);
    // console.log("you are scrolling!!!");
    // const pixels = .scrollTop;
    scrollCount += 1;
    myText.style.fontSize = scrollCount + 'px';
    console.log(`setting fontSize to ${scrollCount}`);
});

// document.addEventListener('click', () => {
//     console.log("you are clicking!!!");
// });