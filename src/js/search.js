function search(e, id){
     if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that rusn
        localStorage.search = document.getElementById(id).value;
        alert("You are searching for: " + localStorage.search);
        // window.location.href="searchResults.html";
     }
}
