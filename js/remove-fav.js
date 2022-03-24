function remove1(){
    document.getElementById("rm2").style.left="175px"
    document.getElementById("fav1").style.display="none"
    
    var x = document.getElementById("fav1").style.display
    var y = document.getElementById("fav2").style.display

    if(x==="none" && y==="none"){
        document.getElementById("no-fav").style.display="block"
    } else{
        document.getElementById("no-fav").style.display="none"
    }

    
}
function remove2(){
    document.getElementById("fav2").style.display="none"
    var x = document.getElementById("fav1").style.display
    var y = document.getElementById("fav2").style.display

    if(x==="none" && y==="none"){
        document.getElementById("no-fav").style.display="block"
    } else{
        document.getElementById("no-fav").style.display="none"
    }
}