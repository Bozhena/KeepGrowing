// Popup Open
function popupOpen(){
    document.getElementById("popup").style.display="block";
    document.getElementById("overlay").style.display="block";
	}
// Popup Close
	function popupClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
	}

function tabActive(tabName){
  if (tabName === 'sign-in') {
    document.getElementById ("log-up").style.display = "none";
    document.getElementById ("log-in").style.display = "block";
    document.getElementById ("tab-1").className = 'active';
    document.getElementById ("tab-2").className = 'inactive';
  } else {
    document.getElementById ("log-up").style.display = "block";
    document.getElementById ("log-in").style.display = "none";
    document.getElementById ("tab-1").className = 'inactive';
    document.getElementById ("tab-2").className = 'active';
  }
}

function tabsActive(tabName){
  if (tabName === 'description') {
    document.getElementById ("items-content").style.display = "none";
    document.getElementById ("result-content").style.display = "none";
    document.getElementById ("comments-content").style.display = "none";
    document.getElementById ("description-content").style.display = "block";
    document.getElementById ("tab_4").className = 'active';
    document.getElementById ("tab_2").className = 'inactive';
    document.getElementById ("tab_3").className = 'inactive';
    document.getElementById ("tab_1").className = 'inactive';
  } else if (tabName === 'result') {
    document.getElementById ("description-content").style.display = "none";
    document.getElementById ("result-content").style.display = "block";
    document.getElementById ("comments-content").style.display = "none";
    document.getElementById ("items-content").style.display = "none";
    document.getElementById ("tab_1").className = 'inactive';
    document.getElementById ("tab_2").className = 'active';
    document.getElementById ("tab_3").className = 'inactive';
    document.getElementById ("tab_4").className = 'inactive';
  } else if (tabName === 'items') {
    document.getElementById ("description-content").style.display = "none";
    document.getElementById ("result-content").style.display = "none";
    document.getElementById ("comments-content").style.display = "none";
    document.getElementById ("items-content").style.display = "flex";
    document.getElementById ("tab_1").className = 'inactive';
    document.getElementById ("tab_2").className = 'inactive';
    document.getElementById ("tab_3").className = 'active';
    document.getElementById ("tab_4").className = 'inactive';
  } else {
    document.getElementById ("description-content").style.display = "none";
    document.getElementById ("result-content").style.display = "none";
    document.getElementById ("comments-content").style.display = "block";
    document.getElementById ("items-content").style.display = "none";
    document.getElementById ("tab_1").className = 'active';
    document.getElementById ("tab_2").className = 'inactive';
    document.getElementById ("tab_3").className = 'inactive';
    document.getElementById ("tab_4").className = 'inactive';
  }
}

function init() {
    window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 90,
            header = document.querySelector(".navigation_menu");
            console.log(distanceY)

        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}

function openCard(){
   window.location.href="card.php";
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
  document.getElementById("card_9").innerHTML=category_9[getRandomCard(category_9)];
}

function setTitle(){
  document.getElementById("title").innerHTML=localStorage.title;
}

function getCardName(id){
  localStorage.title = document.getElementById(id).getElementsByTagName('p')[0].innerHTML;
}

function onPageLoad() {
  popupOpen();
  popupClose();
  init();
  setTitles();
}

function search(e, id){
     if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that rusn
        localStorage.search_request = document.getElementById(id).value;
        var res = searching(localStorage.search_request);
		    document.getElementById(id).value = "";
        window.location.href="searchResults.html";
     }
}

function changeIcon(id){
  if (document.getElementById(id).value!==''){
    document.getElementById(id).style.backgroundImage = "url('..//images/search_white.png')";
  }
  if (document.getElementById(id).value.length<=1&&document.getElementById(id).value===''){
      document.getElementById(id).style.backgroundImage = "url('..//images/Search Tool.webp')";
  }
}

function useDefaultIcon(id){
  document.getElementById(id).style.backgroundImage = "url('..//images/Search Tool with ....webp')";
  document.getElementById(id).value = "";
}

function useDefault(id){
    document.getElementById(id).style.backgroundImage = "url('..//images/Search Tool.webp')";
}

function disableBlur(id){
  document.getElementById(id).style.paddingLeft = "13%";
}

function searching(search_request){
  var result = [];
  var search_requests = search_request.split(" ");
  var category = [category_1, category_2, category_3, category_4, category_5, category_6, category_7, category_8, category_9]
  var j = 0;

  category.forEach(function (item, index){
    for (i=0; i<item.length; i++){
      search_requests.forEach(function (search_item, index){
        if (item[i].toLowerCase().includes(search_item.toLowerCase())){
          result[j] = item[i];
          j++;
        }
      });
    }
  });

  localStorage["result"]  = JSON.stringify(result.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  }));
}



function searchResult(){
  document.getElementById("search_result").value = localStorage.search_request;
  var i = 1;
  if (JSON.parse(localStorage["result"]).length>0){
  JSON.parse(localStorage["result"]).forEach(function (item){
    document.getElementById("card_"+i).innerHTML = item;
    document.getElementById("card_"+i).parentNode.style.display="";
    i++;
  });}
  else {
    document.getElementById("phrase").getElementsByTagName("h2")[0].innerHTML = "Sorry... Nothing seems to match";
    document.getElementById("phrase").getElementsByTagName("h4")[0].innerHTML = "";
  }

}
