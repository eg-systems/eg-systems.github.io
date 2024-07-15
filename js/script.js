(function(){
    emailjs.init("rhLgr1qJ_xsHX45E3");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'service_mnjshrw';
    const templateID = 'template_8i8mvqd';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
});