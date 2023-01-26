var cards = document.querySelectorAll(".p-card");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const text1 = document.querySelector("#t1");
const text2 = document.querySelector("#t2");
const text3 = document.querySelector("#t3");
const text4 = document.querySelector("#t4");
const exit1 = document.querySelector("#exit1");
const exit2 = document.querySelector("#exit2");
const exit3 = document.querySelector("#exit3");
const exit4 = document.querySelector("#exit4");

text1.classList.toggle('hidden');
text2.classList.toggle('hidden');
text3.classList.toggle('hidden');
text4.classList.toggle('hidden');
exit1.classList.toggle('hidden');
exit2.classList.toggle('hidden');
exit3.classList.toggle('hidden');
exit4.classList.toggle('hidden');

btn1.addEventListener('click', toggle1);
exit1.addEventListener('click', toggle1);

btn2.addEventListener('click', toggle2);
exit2.addEventListener('click', toggle2);

btn3.addEventListener('click', toggle3);
exit3.addEventListener('click', toggle3);

btn4.addEventListener('click', toggle4);
exit4.addEventListener('click', toggle4);

function toggle1(){
    btn1.classList.toggle('hidden');
    text1.classList.toggle('hidden');
    exit1.classList.toggle('hidden');
    for (let i = 0; i < cards.length; i++){
        if(i !== 0){
            cards[i].classList.toggle('hidden');
        }
    }
}
function toggle2(){
    btn2.classList.toggle('hidden');
    text2.classList.toggle('hidden');
    exit2.classList.toggle('hidden');
    for (let i = 0; i < cards.length; i++){
        if(i !== 1){
            cards[i].classList.toggle('hidden');
        }
    }
}
function toggle3(){
    btn3.classList.toggle('hidden');
    text3.classList.toggle('hidden');
    exit3.classList.toggle('hidden');
    for (let i = 0; i < cards.length; i++){
        if(i !== 2){
            cards[i].classList.toggle('hidden');
        }
    }
}
function toggle4(){
    btn4.classList.toggle('hidden');
    text4.classList.toggle('hidden');
    exit4.classList.toggle('hidden');
    for (let i = 0; i < cards.length; i++){
        if(i !== 3){
            cards[i].classList.toggle('hidden');
        }
    }
}


// // Get the button and modal
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
// var modal1 = document.getElementById("project1");
// var modal2 = document.getElementById("project2");
// var modal3 = document.getElementById("project3");
// var modal4 = document.getElementById("project4");
// var behind = document.getElementById("hide");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn1.onclick = function() {
//   modal1.style.display = "block";
//   behind.style.display = "none";
// }

// // When the user clicks the button, open the modal
// btn2.onclick = function() {
//     modal2.style.display = "block";
//     behind.style.display = "none";
//   }

//   // When the user clicks the button, open the modal
// btn3.onclick = function() {
//     modal3.style.display = "block";
//     behind.style.display = "none";
//   }

//   // When the user clicks the button, open the modal
// btn4.onclick = function() {
//     modal4.style.display = "block";
//     behind.style.display = "none";
//   }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal1.style.display = "none";
//   modal2.style.display = "none";
//   modal3.style.display = "none";
//   modal4.style.display = "none";
//   behind.style.flexDirection = "row"
//   behind.style.display = "block";
  
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//     behind.style.display = "block";
//     behind.style.flexDirection = "row"
//   }
//   else if (event.target == modal2){
//     modal2.style.display = "none";
//     behind.style.display = "block";
//     behind.style.flexDirection = "row"
//   }
//   else if (event.target == modal3){
//     modal3.style.display = "none";
//     behind.style.display = "block";
//     behind.style.flexDirection = "row"
//   }
//   else if (event.target == modal4){
//     modal4.style.display = "none";
//     behind.style.display = "block";
//     behind.style.flexDirection = "row"
//   }
// }