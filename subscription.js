// const submitFormButton = document.getElementById('submitFormButton');
// const userEmail = document.getElementById('userEmail');
// const submitMessage = document.getElementById('submitMessage');
// const subscriptionForm = document.getElementById('subscriptionForm');

const mailValidator = () => {
    const validRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const userEmail = document.forms['subscriptionForm']['userEmail'].value;
    const userEmailField = document.forms['subscriptionForm']['userEmail'];
    const submitMessage = document.getElementById('submitMessage');
    const submitFormButton = document.getElementById('submitFormButton');
    if(userEmail.match(validRegx)) {
        userEmailField.style.borderColor ='hsl(223, 100%, 88%)';
        submitFormButton.value = 'Thank you!';
        document.forms['subscriptionForm'].style.pointerEvents = 'none';
        submitMessage.innerHTML = '';
        submitMessage.style.marginBottom = '0px';
        return false;
    } else {
        userEmailField.style.borderColor = 'hsl(354, 100%, 66%)';
        submitMessage.innerHTML = 'Please provide a valid email address';
        submitMessage.style.marginBottom = '1rem';
        return false;
    }
    
};

