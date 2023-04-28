

//Function: use emailjs account to email a question from the help? button on the header //
function sendEmail() {
    //Validate user entry 
    if (!(/^[a-z A-Z'-]+$/.test(this.nameinput.value)) || this.nameinput.value == "") {
        alert('Please enter your name, with no special characters or numbers.');
        this.nameinput.focus();
        return;
    }
    if (!(/^\S+@\S+\.\S+$/.test(this.emailinput.value))) {
        alert('Please enter a valid email address.');
        this.emailinput.focus();
        return;
    } 
    if (!(/^[a-z A-Z]+$/.test(this.industry.value))) {
        alert('Please enter your industry, with no special characters or numbers.');
        this.industry.focus();
        return;
    }
    if (!(/^[a-z A-Z?:,.-]+$/.test(this.question.value)) ||this.question.value.length < 10) {
        alert('Please enter a question of at least 10 characters, and no special characters .');
        this.question.focus();
        return false;
    }
    
    emailjs.init("user_37585cYmkMNZRiOobd27i");

    var template_params = {
    "from_name": this.nameinput.value,
    "from_email": this.emailinput.value,
    "question": this.industry.value + ": " + this.servicesselect.value + ": " + this.question.value,
    };
    console.log('template_params');
    var service_id = "continuous_engagement";
    var template_id = "template_6DMLrcJu";

    emailjs.send(service_id, template_id, template_params);
    
    alert('Message sent successfully.');

}
