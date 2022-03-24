function check(){
    var x = document.getElementById("cmt").value;
    var star = document.getElementsByName("rates").value
    document.getElementById("new_comment").style.display="none"

    if(x===""){
        document.getElementById("new_comment").style.display="none"
        document.getElementById("line").style.display="none"
        document.getElementById("atual").innerHTML="(124)"

    }else{
        document.getElementById("atual").innerHTML="(124)"
        document.getElementById("line").style.display="block"
        document.getElementById("new_comment").style.display="block"
        document.getElementById("cmt2").innerHTML = x;
    }
    
}