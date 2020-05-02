'use strict';

console.log('Hello World');

var allProducts = [];
var secondaryArray = []; // TRYING TO AVOID REPEATS

var imageOneEl = document.getElementById('product-image-1');
var imageTwoEl = document.getElementById('product-image-2');
var imageThreeEl = document.getElementById('product-image-3');
var divEl = document.getElementById('product-container');

var clickTracker = 25;

function Product(name, src, clicked = 0, viewed = 0) {
  this.name = name;
  this.src = src;
  this.alt = name;

  this.clicked = clicked;
  this.viewed = viewed;

  allProducts.push(this);
}

function randomizer(max){
  return Math.floor(Math.random() *max);
}

function saveLocalStorage(){
  var savedProducts = JSON.stringify(allProducts);
  localStorage.setItem('allProducts', savedProducts);
}

function loadLocalStorage(){
  //check to see if theres stuff in local storage. If there is then we grab it and use that data
  //if local storage is empty, proceed as if its the first time
  if(localStorage.getItem('allProducts')){
    var localStorageProducts = JSON.parse(localStorage.getItem('allProducts'));
    for(var i = 0; i < localStorageProducts.length; i++){
      new Product(localStorageProducts[i].name, localStorageProducts[i].src, localStorageProducts[i].clicked, localStorageProducts[i].viewed);
    }
  }
  else{
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
  }
  imageGenerator();
}

function imageGenerator(){
  do {
    var pic1 = randomizer(allProducts.length);
    var pic2 = randomizer(allProducts.length);
    var pic3 = randomizer(allProducts.length);
  } while ((pic1 === pic2) || (pic2 === pic3) || (pic1 === pic3) || (secondaryArray.includes(pic1) || (secondaryArray.includes(pic2) || (secondaryArray.includes(pic3)))));

  imageOneEl.src = allProducts[pic1].src;
  imageOneEl.title = allProducts[pic1].name;
  imageOneEl.alt = allProducts[pic1].alt;
  allProducts[pic1].viewed++;

  imageTwoEl.src = allProducts[pic2].src;
  imageTwoEl.title = allProducts[pic2].name;
  imageTwoEl.alt = allProducts[pic2].alt;
  allProducts[pic2].viewed++;

  imageThreeEl.src = allProducts[pic3].src;
  imageThreeEl.title = allProducts[pic3].name;
  imageThreeEl.alt = allProducts[pic3].alt;
  allProducts[pic3].viewed++;

  secondaryArray[0] = pic1; //TRYING TO FIGURE OUT HOW TO AVOID REPEATS!!!
  secondaryArray[1] = pic2;
  secondaryArray[2] = pic3;
  console.log(secondaryArray);
}

function stopClicking(){
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  console.log('done');
}

function seedChartData(){
  var clickArray = [];
  var labelArray = [];
  var viewedArray = [];

  for(var i = 0; i < allProducts.length; i++){
    clickArray.push(allProducts[i].clicked);
    labelArray.push(allProducts[i].name);
    viewedArray.push(allProducts[i].viewed);
  }
  return [clickArray, labelArray, viewedArray];
}

function renderChart(){
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: seedChartData()[1],
      datasets: [{
        label: '# of Clicks',
        data: seedChartData()[0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: seedChartData()[2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderWidth: 1
      },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



function handleClick(event) {
  clickTracker--;
  var clickedProduct = event.target.title;
  for(var i = 0; i < allProducts.length; i++){
    if(clickedProduct === allProducts[i].name){
      console.log('clicked product is ' + clickedProduct);
      allProducts[i].clicked++;
    }
  }

  if(clickTracker === 0){
    stopClicking();
    saveLocalStorage();
    renderChart();
  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);

loadLocalStorage();
// imageGenerator(); removed and run up in loadLocalStorage function
