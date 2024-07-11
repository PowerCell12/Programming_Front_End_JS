function validate() {

    let value = document.getElementById("email");

    value.addEventListener("change", () => {

        let value1 = value.value;
        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        
        if (!emailPattern.test(value1)){
            value.setAttribute('class', 'error');
        }
        else{
            value.removeAttribute('class', 'error');            
        }



    }
)


}
