function onPageLoad() {
  init();
  setTitles();
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector(".nav-menu");
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

function search(e, elem) {
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that run
    localStorage.search_request = elem.value;
    searching(localStorage.search_request);
	elem.value = "";
    window.location.href = "search-results.html";
  }
}

function collapseSearchField(elem) {
  elem.value = "";
  elem.className = "collapsed";
}

function expandSearchField(elem) {
  elem.className = "expanded";
}

function searching(search_request) {
  var result = [];
  var search_requests = search_request.split(" ");
  var category = [category_1, category_2, category_3, category_4, category_5, category_6, category_7, category_8, category_9]
  var j = 0;

  category.forEach(function (item, index) {
    for (i = 0; i < item.length; i++) {
      search_requests.forEach(function (search_item, index) {
        if (item[i].toLowerCase().includes(search_item.toLowerCase())) {
          result[j] = item[i];
          j++;
        }
      });
    }
  });

  localStorage["result"] = JSON.stringify(result.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  }));
}

function searchResult() {
 init();
  document.getElementById("search_result").value = localStorage.search_request;
  var i = 1;
  if (JSON.parse(localStorage["result"]).length>0){
  JSON.parse(localStorage["result"]).forEach(function (item){
    document.getElementById("card_"+i).innerHTML = item;
    document.getElementById("card_"+i).parentNode.style.display="";
    i++;
  });}
  else {
    document.getElementsByTagName("h2")[0].innerHTML = "Sorry... Nothing seems to match";
    document.getElementsByTagName("h4")[0].innerHTML = "";
  }
}

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
  // document.getElementById("card_9").innerHTML=category_9[getRandomCard(category_9)];
}

function openCard(){
    window.location.href="card.html";
}

function openAbout(){
    window.location.href="about.html";
}

function getCardName(id){
  localStorage.title = document.getElementById(id).getElementsByTagName('p')[0].innerHTML;
}
