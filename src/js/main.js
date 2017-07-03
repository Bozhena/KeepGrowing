function onPageLoad() {
  // init();
  // setTitles();
}

function search(e, id){
     if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that rusn
        localStorage.search_request = document.getElementById(id).value;
        var res = searching(localStorage.search_request);
        window.location.href="searchResults.html";
     }
}

function collapseSearchField(id){
  // document.getElementById(id).style.backgroundImage = "url('../images/Search-with-dots.webp')";
  var elem = document.getElementById(id);
  elem.className = "collapsed";
  elem.value = "";
}

function expandSearchField(id){
  var elem = document.getElementById(id);
  elem.className = "expanded";
  // elem.style.backgroundImage = "url('..//images/Search Tool.webp')";
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
  JSON.parse(localStorage["result"]).forEach(function (item){
    document.getElementById("card_"+i).innerHTML = item;
    document.getElementById("card_"+i).parentNode.style.display="";
    i++;
  });
}
