function toggle() {

    let button  =  document.getElementsByClassName('button')[0];

    let text = document.getElementById('extra').children[0];

    let div = document.getElementById('extra');

    if (div.style.display === "none"){
        div.style.display = "block"
        button.textContent = "Less"
    }
    else{
        div.style.display = "none";
        button.textContent = 'More'
    }

}
