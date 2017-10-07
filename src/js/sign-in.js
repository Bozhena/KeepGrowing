// Popup Open
function popupOpen(){
    document.getElementById("popup").style.display="block";
    document.getElementById("overlay").style.display="block";
    document.body.style.overflow="hidden";
    document.getElementById("overlay").addEventListener("click", overlayClose);
        function overlayClose() {
          document.getElementById("overlay").style.display="none";
          document.getElementById("popup").style.display="none";
        }
}

function popupClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
    document.body.style.overflow="auto";
	}

function tabActive(tabName){
  if (tabName === 'sign-in') {
    document.getElementById ("log-up").style.display = "none";
    document.getElementById ("log-in").style.display = "block";
    document.getElementById ("tab-1").className = 'active';
    document.getElementById ("tab-2").className = 'inactive';
    var elems = document.getElementsByClassName("log-in-name");
    for (var i = 0; i < elems.length; ++i) {
        elems[i].value = '';
    }
    elems = document.getElementsByClassName("log-in-password");
    for (var i = 0; i < elems.length; ++i) {
      elems[i].value = '';
   }
  } else {
    document.getElementById ("log-up").style.display = "block";
    document.getElementById ("log-in").style.display = "none";
    document.getElementById ("tab-1").className = 'inactive';
    document.getElementById ("tab-2").className = 'active';
    var elems = document.getElementsByClassName("log-up-name");
    for (var i = 0; i < elems.length; ++i) {
        elems[i].value = '';
    }
    elems = document.getElementsByClassName("log-up-password");
    for (var i = 0; i < elems.length; ++i) {
      elems[i].value = '';
   }
   elems = document.getElementsByClassName("log-up-email");
   for (var i = 0; i < elems.length; ++i) {
     elems[i].value = '';
  }
 }
}
