;(function( window ){
    
    var searchObj = document.getElementById("search_main");
    var pressObj = document.getElementById("press_key");
    
    // onkeydown, onkeyup, onkeypress
    searchObj.addEventListener("keyup", function(e){
        
        pressObj.innerHTML = e.keyCode;
    })
    
    
}(window));
