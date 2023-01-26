let img = document.querySelector("img")
let pv = document.querySelector("#pv");
let nxt = document.querySelector("#nxt");
let p = document.querySelector("p")

pv.addEventListener("click", previousF);
nxt.addEventListener("click", nextF);

let total_image = 5;
let currentImage = 1;


// Anannya Mem / BEST:
function nextF() {
    currentImage++;
    if (currentImage <= total_image) {
        img.src = `./img/img${currentImage}.jpg`;
        p.innerHTML = `img${currentImage}`;
    }
    else {
        currentImage = 1;
        img.src = `./img/img${currentImage}.jpg`;
        p.innerHTML = `img${currentImage}`;
    }
}

function previousF() {
    currentImage--;
    if (currentImage >= 1) {
        img.src = `./img/img${currentImage}.jpg`;
        p.innerHTML = `img${currentImage}`;
    }
    else {
        currentImage = total_image;
        img.src = `./img/img${currentImage}.jpg`;
        p.innerHTML = `img${currentImage}`;
    }
}















// // Via for loop:
// function previousF() {
//     for (var i = 1; i <= total_image; i++) {
//         currentImage--;
//         break;
//     }

//     if (currentImage < 1) {
//         currentImage = total_image;
//     }
//     img.src = `./img/img${currentImage}.jpg`;
//     p.innerHTML = `img${currentImage}`;
// }


// function nextF() {
//     for (var i = 1; i <= total_image; i++) {
//         currentImage++;
//         break;
//     }

//     if (currentImage > total_image) {
//         currentImage = 1;
//     }
//     img.src = `./img/img${currentImage}.jpg`;
//     p.innerHTML = `img${currentImage}`;
// }













// // By while loop:
// function previousF() {
//     while (currentImage <= total_image) {
//         currentImage--;
//         if (currentImage < 1) {
//             currentImage = total_image;
//         }
//         img.src = `./img/img${currentImage}.jpg`;
//         p.innerHTML = `img${currentImage}`;
//         break;
//     }
// }


// function nextF() {
//     while (currentImage <= total_image) {
//         currentImage++;
//         if (currentImage > total_image) {
//             currentImage = 1;
//         }
//         img.src = `./img/img${currentImage}.jpg`;
//         p.innerHTML = `img${currentImage}`;
//         break;
//     }
// }
















// //via for loop(chatgpt help)
// //get the previous button element
// function previousF() {
//     for (var i = 1; i <= total_image; i++) {
//         if (i === currentImage) {
//             currentImage--;
//             if (currentImage < 1) {
//                 currentImage = total_image;
//             }
//             img.src = `./img/img${currentImage}.jpg`;
//             p.innerHTML = `img${currentImage}`;
//             break;
//         }
//     }
// }

// // //get the next button element
// function nextF() {
//     for (var i = 1; i <= total_image; i++) {
//         if (i === currentImage) {
//             currentImage++;
//             if (currentImage > total_image) {
//                 currentImage = 1;
//             }
//             img.src = `./img/img${currentImage}.jpg`;
//             p.innerHTML = `img${currentImage}`;
//             break;
//         }
//     }
// }

