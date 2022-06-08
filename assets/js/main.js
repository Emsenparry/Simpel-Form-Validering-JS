function validateForm(form) {
    // console.dir(form.firstname.value); //Er en måde at få fat i felterne på inde i formularen.
    let result = true;

    if (!form.firstname.value) { //Hvis valuen ikke er sand skal den gå ind i scoopet. ! = Kaldes en 'Not operator.'
        showError(form.firstname);
        result = false;
        return false; //Den validere kun et valg af gangen.
    }

    if (!form.lastname.value) {
        showError(form.lastname);
        result = false;
        return false;
    }
    if (!form.email.value) {
        showError(form.email);
        result = false;
        return false;
    }
    if (!form.gender.value) {
        showError(form.gender, "Du skal vælge et køn!");
        result = false;
        return false;
    }

    if (result) { //If result er sandt, så skal den sende formularen.
        alert('Formularen kan sendes.')
        // form.submit();
    }
}

    

   
function showError(elm, message = "Du skal vælge et køn!") {
    elm.classList.add('field-error')
    if (!elm.nextElementSibling) {
        elm.insertAdjacentHTML('afterend', `<span class="text-error">${message}</span>`) //InsertAdjacent betyder 'Tilstødene' det er noget der kommer rundt om tagget. 
        elm.addEventListener('keypress', function () { //Eventlisteneren lytter på når brugeren taster i feltet (keypress).
            if(elm.nextElementSibling){
                elm.classList.remove('field-error'); //Remover klassen (borderen) fra input feltet.
                elm.nextElementSibling.remove(); //Når man taster i feltet så forsvinder erroren. (Teksten)
            }
        })
    }

}

function showError(elm, message = "Du skal vælge et køn!") { //funktionen definere to parameter som er elm og message. 
    elm.classList.add('field-error')
    if (!elm.nextElementSibling) {
        elm.insertAdjacentHTML('afterend', `<span class="text-error">${message}</span>`) //Du bruger det andet parameter for at ændre text-erroren i et andet felt.
        elm.addEventListener('change', function () { //Change bruges når du skal select en value. 
            if(elm.nextElementSibling){
                elm.classList.remove('field-error'); 
                elm.nextElementSibling.remove(); 
            }
        })
    }

}



