function onPageLoad() {
  // init();
  setTitles();
}

function search(e, elem) {
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that run
    localStorage.search_request = elem.value;
    searching(localStorage.search_request);
    window.location.href = "searchResults.html";
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
  document.getElementById("search_result").value = localStorage.search_request;
  var i = 1;
  JSON.parse(localStorage["result"]).forEach(function (item) {
    document.getElementById("card_" + i).innerHTML = item;
    document.getElementById("card_" + i).parentNode.style.display = "";
    i++;
  });
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
