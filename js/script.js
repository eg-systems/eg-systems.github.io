(function(){
    emailjs.init("LY09EPufKh4hH0f7k");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'service_141uf43';
    const templateID = 'template_7793lfq';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
});