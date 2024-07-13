function encodeAndDecodeMessages() {

    buttons = document.getElementsByTagName("button");
    let encode = buttons[0];
    let decode = buttons[1];
    let textareas = document.getElementsByTagName("textarea");

    encode.addEventListener("click", () => {

        let value1 =  textareas[0].value;

        let final_text = "";
        
        for (let letters of value1){
            let code = letters.charCodeAt(0) + 1;
            final_text += String.fromCharCode(code);
        }

        textareas[0].value = "";
        textareas[1].value = final_text;

    })

    decode.addEventListener("click", () => {

        let value1=  textareas[1].value;
        let final_text = "";
        
        for (let letters of value1){
            let code = letters.charCodeAt(0) - 1;
            final_text += String.fromCharCode(code);
        }

        textareas[1].value = "";
        textareas[1].value = final_text;


    })


}
