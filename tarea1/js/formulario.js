function revisaCheck(element){
    if (element.checked) {
      document.getElementById(element.name).style.display = "block";
    } 
    else {
       document.getElementById(element.name).style.display = "none";
    }
}

function revisaOtro(select, parent_id){
    if(select.value == "otro") {
        let otroInput = document.createElement("input");
        otroInput.id = "otro-input-" + parent_id;
        otroInput.type = "text";
        otroInput.maxLength = "15";
        otroInput.minLength = "3";
        document.getElementById(parent_id).appendChild(otroInput);
    }
    else {
        const otroInput = document.getElementById("otro-input-" + parent_id);
        if(otroInput != null) {
            document.getElementById(parent_id).removeChild(otroInput);
        }
    }
}