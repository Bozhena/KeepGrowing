function openCard(){
   window.location.href="card.html";
}

var category_1 = [
    'Tree of Wishes',
    'Tree of Wishes 1',
    'Tree of Wishes 2'
];


var category_2 = [
    'Smile and Count',
    'Smile and Count 1',
    'Smile and Count 2'
];


var category_3 = [
    'Paper Bowl',
    'Paper Bowl 1',
    'Paper Bowl 2'
];

var category_4 = [
    'Funny Seasons',
    'Funny Seasons 1',
    'Funny Seasons 2'
];

var category_5 = [
    'Christmas Baal with',
    'Christmas Baal with 1',
    'Christmas Baal with 2'
];

var category_6 = [
    'Thank you Card',
    'Thank you Card 1',
    'Thank you Card 2'
];

var category_7 = [
    'Happy Mother\'s Day',
    'Happy Mother\'s Day 1',
    'Happy Mother\'s Day 2'
];

var category_8 = [
    '1st April. Day of Fun!',
    '1st April. Day of Fun! 1',
    '1st April. Day of Fun! 2'
];

var category_9 = [
    '1st April. Day of Fun!',
    '1st April. Day of Fun! 1',
    '1st April. Day of Fun! 2'
];

function getRandomCard(category){
  return Math.floor(Math.random()*category.length);
}

function setTitles(){
  document.getElementById("card_1").innerHTML=category_1[getRandomCard(category_1)];
  document.getElementById("card_2").innerHTML=category_2[getRandomCard(category_2)];
  document.getElementById("card_3").innerHTML=category_3[getRandomCard(category_3)];
  document.getElementById("card_4").innerHTML=category_4[getRandomCard(category_4)];
  document.getElementById("card_5").innerHTML=category_5[getRandomCard(category_5)];
  document.getElementById("card_6").innerHTML=category_6[getRandomCard(category_6)];
  document.getElementById("card_7").innerHTML=category_7[getRandomCard(category_7)];
  document.getElementById("card_8").innerHTML=category_8[getRandomCard(category_8)];
  document.getElementById("card_9").innerHTML=category_8[getRandomCard(category_9)];
}

function setTitle(){
  document.getElementById("title").innerHTML=localStorage.title;
}

function getCardName(id){
  localStorage.title = document.getElementById(id).getElementsByTagName('p')[0].innerHTML;
}
