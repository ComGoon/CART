document.body.style.background = 'gray';

var dlete = [].slice.call(document.getElementsByClassName('x'));
console.log(dlete);

function removeElement(dlete) {
    console.log(dlete);

    // Removes an element from the main element
    var element = document.getElementById(dlete);
    console.log(dlete);

    element.main.removeChild(element);
    console.log(dlete);

}


console.log(madani);
console.log(mad());
















// function addElement(parentId, elementTag, elementId, html) {
//     // Adds an element to the document
//     var p = document.getElementById(parentId);
//     var newElement = document.createElement(elementTag);
//     newElement.setAttribute('id', elementId);
//     newElement.innerHTML = html;
//     p.appendChild(newElement);
// }


// function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }



// //var x = document.getElementsByClassName('x');
// // var o = document.getElementsByClassName('o');
// var x = [].slice.call(document.getElementsByClassName('x'));
// var o = [].slice.call(document.getElementsByClassName('o'));

// console.log(x);
// // x[1].innerHTML = '👎';
// console.log(o);
// for (var i in x) {
//     x[i].addEventListener('click', function() {
//         console.log(x[i]);
//         console.log(o[i]);
//         if (o[i].innerText === '👍') {
//             o[i].innerText = '❤️';
//             x[i].innerText = '👎';
//         } else {
//             x[i].innerText = '👎'
//         }
//     })
// }


// var x = [].slice.call(document.getElementsByClassName('x'));
// var o = [].slice.call(document.getElementsByClassName('o'));

// var x = document.querySelectorAll('.x');
// var o = document.querySelectorAll('.o');
// // x[1].innerText = '👎';

// for (let i of x) {
//     i.addEventListener('click', function() {
//         if (i.innerText === '👍') {
//             o[1].innerText = '❤️';
//             x[1].innerText = '👎'
//         } else {
//             x[1].innerText = '👎'
//         }
//     })


//     o[1].addEventListener('click', function() {
//         if (x[1].innerText === '👎') {
//             x[1].innerText = '❌';
//             o[1].innerText = '👍'
//         } else {
//             o[1].innerText = '👍'
//         }
//     })

// }



// for (let i in x) {
//     x[i].addEventListener('click', function() {
//         if (o[i].innerText === '👍') {
//             o[i].innerText = '❤️';
//             x[i].innerText = '👎'
//         } else {
//             x[i].innerText = '👎'
//         }
//     })
// }



// x[1].addEventListener('click', function() {
//     for (let i of x)
//         console.log[1];
//     if (o[1].innerHTML === '👍') {
//         o[1].innerHTML = '❤️';
//         x[1].innerHTML = '👎'
//     } else {
//         x[1].innerHTML = '👎'
//     }
// })
// o[1].addEventListener('click', function() {
//     if (x[1].innerHTML === '👎') {
//         x[1].innerHTML = '❌';
//         o[1].innerHTML = '👍';
//     } else {
//         o[1].innerHTML = '👍';
//     }
// })






// $(function() {

//     blinking($(".blink"));

//   });

//   function blinking(elm) {
//       timer = setInterval(blink, 11111);
//       function blink() {
//           elm.fadeOut(5111, function() {
//           elm.fadeIn(5111);
//       });
//       }
//   }

// var styles = {

//     //#va
//     vaId: {
//         fontFamily: "courier"
//     }
// }

// @keyframes example {
//     from {background-color: red;}
//     to {background-color: yellow;}
// }

// div {
//     width: 111px;
//     height: 111px;
//     position: relative;
//     background-color: red;
//     animation-name: example;
//     animation-duration: 4s;
//     animation-iteration-count: infinite;
// }5