var button = document.querySelector('#btn');
var word = document.querySelector('#word');
var image = document.querySelector('#image');


var Happy = {name: "Happy", img: "stuffy_stuff_GOOD/Happy.jpg"};
var Sad  = {name: "Sad", img: "stuffy_stuff_GOOD/Sad.jpg"};
var Stress = {name: "Stress", img: "stuffy_stuff_GOOD/Stress.jpg"};
var Jealous = {name: "Jealous", img: "stuffy_stuff_GOOD/Jelly.jpg"};
var Childish = {name: "Childish/Whimsical", img: "stuffy_stuff_GOOD/Child.jpg"};
var Angry = {name: "Angry", img: "stuffy_stuff_GOOD/Angry.jpg"};
var all = [Happy, Sad, Stress, Jealous, Childish, Angry];


button.addEventListener('click', ()=>{
    var randNum = Math.floor(Math.random() * all.length);
    word.innerHTML = all[randNum].name;
    image.src = all[randNum].img;
});