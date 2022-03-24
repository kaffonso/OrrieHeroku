function search(){
    var x = document.getElementById("search").value;
    x = x.toLowerCase();
    document.getElementById("resultado").innerHTML= "Resultado correspondente a " + "'" + x + "'";

    if (x === "m"){
        document.getElementById("x").style.display = "flex"
        document.getElementById("y").style.display = "flex"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "flex"

        document.getElementById("n_atual").innerHTML= "Martini Sunset";
        document.getElementById("l_atual").innerHTML= "Localização: Santa Filomena";
        document.getElementById("r_atual").innerHTML= "Rate 4.1/5";
        document.getElementById("total").innerHTML= "(123)"
        document.getElementById("s4").className="fas fa-star";
        document.getElementById("s5").className="fas fa-star-half-alt";
        document.getElementById("i_atual").src="images/restaurantes/martini.jpg";

        document.getElementById("link").href = "restaurants/geral/martini.html";
        document.getElementById("link1").href = "restaurants/geral/martini.html";

        document.getElementById("n_next").innerHTML= "Mindel Hotel";
        document.getElementById("l_next").innerHTML= "Localização: Avenida Marginal";
        document.getElementById("r_next").innerHTML= "Rate 4.5/5";
        document.getElementById("i_next").src="images/restaurantes/mindel.jpg";
        document.getElementById("totaln").innerHTML= "(244)"

        document.getElementById("link2").href = "restaurants/geral/mindel.html";
        document.getElementById("link3").href = "restaurants/geral/mindel.html";
        

    }else if (x === "laginha"){
        document.getElementById("x").style.display = "flex"
        document.getElementById("y").style.display = "flex"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "flex"

        document.getElementById("n_atual").innerHTML= "Caravela";
        document.getElementById("l_atual").innerHTML= "Localização: Laginha";
        document.getElementById("r_atual").innerHTML= "Rate 4.4/5";
        document.getElementById("s1").className="fas fa-star"
        document.getElementById("s2").className="fas fa-star"
        document.getElementById("s3").className="fas fa-star"
        document.getElementById("s4").className="fas fa-star"
        document.getElementById("s5").className="fas fa-star-half-alt"
        document.getElementById("total").innerHTML= "(103)"
        document.getElementById("i_atual").src="images/restaurantes/caravela.jpg";

        document.getElementById("link").href = "restaurants/geral/caravela.html";
        document.getElementById("link1").href = "restaurants/geral/caravela.html";

        document.getElementById("n_next").innerHTML= "U Sabor";
        document.getElementById("l_next").innerHTML= "Localização: Laginha";
        document.getElementById("r_next").innerHTML= "Rate 4/5";
        document.getElementById("i_next").src="images/restaurantes/usabor.jpg";
        document.getElementById("totaln").innerHTML= "(104)"

        document.getElementById("link2").href = "#";
        document.getElementById("link3").href = "#";

    } else if (x === "mindel" || x==="mindel hotel" || x === "hotel" ||  x==="m" || x === "avenida marginal" || x === "marginal" || x === "avenida"){
        document.getElementById("y").style.display = "flex"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "none"

        document.getElementById("n_atual").innerHTML= "Mindel Hotel";
        document.getElementById("l_atual").innerHTML= "Localização: Avenida Marginal";
        document.getElementById("r_atual").innerHTML= "Rate 4.5/5";
        document.getElementById("total").innerHTML= "(244)"
        document.getElementById("i_atual").src="images/restaurantes/mindel.jpg";

        document.getElementById("link").href = "restaurants/geral/mindel.html";
        document.getElementById("link1").href = "restaurants/geral/mindel.html";

    }else if (x === "caravela" || x === "c") {
        document.getElementById("link").links="d_geral-2.html"
        document.getElementById("y").style.display = "flex"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "none"

        document.getElementById("n_atual").innerHTML= "Caravela";
        document.getElementById("l_atual").innerHTML= "Localização: Laginha";
        document.getElementById("r_atual").innerHTML= "Rate 4.4/5";
        document.getElementById("s1").className="fas fa-star"
        document.getElementById("s2").className="fas fa-star"
        document.getElementById("s3").className="fas fa-star"
        document.getElementById("s4").className="fas fa-star"
        document.getElementById("s5").className="fas fa-star-half-alt"
        document.getElementById("i_atual").src="images/restaurantes/caravela.jpg";

        document.getElementById("link").href = "restaurants/geral/caravela.html";
        document.getElementById("link1").href = "restaurants/geral/caravela.html";

    }else if (x === "pizza" || x==="pizzart" || x==="pizza art" || x==="p" || x === "cha de alerim" || x === "chã de alecrim" || x === "alecrim"|| x === "cha"){
        document.getElementById("y").style.display = "flex"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "none"

        document.getElementById("n_atual").innerHTML= "Pizza & Art";
        document.getElementById("l_atual").innerHTML= "Localização: Chã de Alecrim";
        document.getElementById("r_atual").innerHTML= "Rate 4.5/5";
        document.getElementById("s1").className="fas fa-star"
        document.getElementById("s2").className="fas fa-star"
        document.getElementById("s3").className="fas fa-star"
        document.getElementById("s4").className="fas fa-star"
        document.getElementById("s5").className="fas fa-star-half-alt"
        document.getElementById("total").innerHTML= "(169)"
        document.getElementById("i_atual").src="images/restaurantes/pizzart.jpg";

        document.getElementById("link").href = "restaurants/geral/pizzart.html";
        document.getElementById("link1").href = "restaurants/geral/pizzart.html";

    }else if(x === "martini" || x==="martini sunset" || x === "sunset" || x === "santa filomena"|| x === "santa" || x === "filomena") {
        document.getElementById("y").style.display = "flex"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "none"

        document.getElementById("n_atual").innerHTML= "Martini Sunset";
        document.getElementById("l_atual").innerHTML= "Localização: Santa Filomena";
        document.getElementById("r_atual").innerHTML= "Rate 4.2/5";
        document.getElementById("s4").className="fas fa-star"
        document.getElementById("s5").className="fas fa-star-half-alt"
        document.getElementById("total").innerHTML= "(123)"

        document.getElementById("i_atual").src="images/restaurantes/martini.jpg";
        
        document.getElementById("link").href = "restaurants/geral/martini.html";
        document.getElementById("link1").href = "restaurants/geral/martini.html";

    }else if(x === "usabor" || x==="u sabor" || x==="sabor" ||  x==="u"){
        document.getElementById("y").style.display = "flex"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "flex"
        document.getElementById("line2").style.display = "none"
        document.getElementById("total").innerHTML= "(104)"

        document.getElementById("n_atual").innerHTML= "U Sabor";
        document.getElementById("l_atual").innerHTML= "Localização: Laginha";
        document.getElementById("r_atual").innerHTML= "Rate 4/5";
        document.getElementById("i_atual").src="images/restaurantes/usabor.jpg";

        document.getElementById("link").href = "#";
        document.getElementById("link1").href = "#";
    }else {
        document.getElementById("resultado").innerHTML= "Resultado correspondente a " + "'" + x + "'" + " não existe!";
        document.getElementById("y").style.display = "none"
        document.getElementById("x").style.display = "none"
        document.getElementById("line1").style.display = "none"
        document.getElementById("line2").style.display = "none"
    }
};