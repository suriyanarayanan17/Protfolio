// Initialize EmailJS
(function() {
    emailjs.init("6GgrQXQuGcS0cTrnn"); // Replace with your EmailJS public key
})();

function sendEmail(e) {
    e.preventDefault();

    // Get form data
    const templateParams = {
        to_name: 'Suriya Narayanan',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        formatted_message: `
Sender Information:
------------------
Name: ${document.getElementById('name').value}
Email: ${document.getElementById('email').value}

Message Details:
---------------
Subject: ${document.getElementById('subject').value}
Message: ${document.getElementById('message').value}
        `,
        // Include all fields separately for template usage
        sender_name: document.getElementById('name').value,
        sender_email: document.getElementById('email').value,
        message_subject: document.getElementById('subject').value,
        message_body: document.getElementById('message').value
    };

    console.log('Sending email with data:', templateParams);

    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    // Send email
    emailjs.send('service_a3gls1i', 'template_byj3dd9', templateParams)
        .then(function() {
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Sent Successfully!';
            document.getElementById('contact-form').reset();
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);
        }, function(error) {
            console.error('EmailJS Error:', error);
            submitBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed to Send';
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);
        });

    return false;
}
