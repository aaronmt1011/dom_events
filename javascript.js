const btn = document.querySelector('#btn');
btn.setAttribute('style', 'color: pink; background: black');

// .onclick is a decent method. Much better than using JS inside the HTML. 
// Don't be that person that puts JS in HTML. Unless you want to be a rebel. 
// Then you do you.
const btn1 = document.querySelector('#btn1');
btn1.setAttribute('style', 'color: orange; background: black');
btn1.onclick = () => alert('I hope you have a below average day.');

// .addEventListener is the best method due to it having the ability to be poly.
// Allows multiple event listeners, if needed.
const btn2 = document.querySelector('#btn2');
btn2.setAttribute('style', 'color: lightblue; background: black');
btn2.addEventListener('click', () => {
    alert("You picked correctly! Your prize is...");
    alert('Another alert!!!!');
});




// alertFunction() is used to affect btn3
// The previous 3 methods can be used with named functions
// first method was used in HTML
const btn3 = document.querySelector('#btn3');
btn3.setAttribute('style', 'color: yellow; background: black');

function alertFunction() {
    alert("DAMN BB!! CAUSED ME DISCHARGE OF EMOTIONS!!!");
}

/*
// .onclick method
btn3.onclick = alertFunction;
*/

// .addEventListener() method
btn3.addEventListener('click', alertFunction);

// Below uses .addEventListener() to pass parameter to function to get 
// callback to pointerevent and puts it in console area
btn3.addEventListener('click', function (e) {
    console.log(e);
});

// Below uses e.target to find specific callback to #btn3 button and puts 
// it in console area.
btn3.addEventListener('click', function (e) {
    console.log(e.target);
});

// .style.background uses .addEventListener() to make the button background blue
// when it detects a click
btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});