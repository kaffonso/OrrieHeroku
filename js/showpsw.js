function mostrar(){
    var x = document.getElementById("senha1")
    var y = document.getElementById("senha2")

    if (x.type === "password"  ) {
        x.type = "text"
        y.type = "text"
    } else {
        x.type = "password"
        y.type= "password"
    }
}