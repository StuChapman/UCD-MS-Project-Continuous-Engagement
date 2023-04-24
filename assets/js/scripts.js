

//Function: use emailjs account to email a question from the help? button on the header //
function sendEmail() {
    //Validate user entry 
    if (!/^[a-zA-Z]*$/g.test(this.name.value) || this.name.value == "") {
        alert('Please enter your name, with no special characters or numbers.');
        this.name.focus();
        return;
    }
    if (!(/^\S+@\S+\.\S+$/.test(this.emailinput.value))) {
        alert('Please enter a valid email address.');
        this.emailinput.focus();
        return;
    }
    if (this.question.value.length < 10) {
        alert('Please enter a question of at least 10 characters.');
        return false;
    }
    
    emailjs.init("user_37585cYmkMNZRiOobd27i");

    var template_params = {
    "from_name": this.name.value,
    "from_email": this.emailinput.value,
    "question": this.industry.value + ": " + this.servicesselect.value + ": " + this.question.value,
    };
    console.log('template_params');
    var service_id = "continuous_engagement";
    var template_id = "template_6DMLrcJu";

    emailjs.send(service_id, template_id, template_params);
    
    alert('Email sent successfully.');

}
