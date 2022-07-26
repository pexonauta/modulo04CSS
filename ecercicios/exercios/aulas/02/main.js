function fSubmit() {
    var correctanswer = document.getElementById("oi");
    if (correctanswer.checked == true) {
        document.getElementById("div-certo").style.display = 'block';
    } else {
        document.getElementById("div-errado").style.display = 'block';
    }
}