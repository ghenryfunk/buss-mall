'use strict';

console.log('Hello World');

var allProducts = [];

var imageOneEl = document.getElementById('product-image-1');
var imageTwoEl = document.getElementById('product-image-2');
var imageThreeEl = document.getElementById('product-image-3');
var divEl = document.getElementById('product-container');

var clickTracker = 0;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicked = 0;

  allProducts.push(this);
}

function randomizer(max){
  return Math.floor(Math.random() *max);
}

function imageGenerator(){
  var pic1 = randomizer(allProducts.length);
  var pic2 = randomizer(allProducts.length);
  var pic3 = randomizer(allProducts.length);

  imageOneEl.src = allProducts[pic1].src;
  imageOneEl.title = allProducts[pic1].name;

  imageTwoEl.src = allProducts[pic2].src;
  imageTwoEl.title = allProducts[pic2].name;

  imageThreeEl.src = allProducts[pic3].src;
  imageThreeEl.title = allProducts[pic3].name;
}

function stopClicking(){
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  console.log('done');
}

new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', './img/pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.png');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('usb', './img/usb.gif');
new Product('water-can', './img/water-can.jpg');
new Product('wine-glass', './img/wine-glass.jpg');

function handleClick(event) {
  var clickedProduct = event.target.title;
  for(var i = 0; i < allProducts.length; i++){
    if(clickedProduct === allProducts[i].name){
      allProducts[i].clicked++;
    }
  }
  clickTracker--;

  if(clickTracker === 0){
    stopClicking();
  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);

imageGenerator();
