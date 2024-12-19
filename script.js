
 const form = document.getElementById('feedbackForm');
 const nameEntered = document.getElementById('name');
 const emailEntered = document.getElementById('email');
 const nameError = document.getElementById('nameError');
 const emailError = document.getElementById('emailError');
 const successMessage = document.getElementById('successMessage');

 
 form.addEventListener('submit', function(click) {
   
     click.preventDefault();

    
     nameError.style.display = 'none';
     emailError.style.display = 'none';
     successMessage.style.display = 'none';

     let isValid = true;
     if (nameEntered.value.trim() === '') {
         nameError.style.display = 'block';
         isValid = false;
     }

     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     if (!emailPattern.test(emailEntered.value)) {
         emailError.style.display = 'block';
         isValid = false;
     }

     if (isValid) {
         successMessage.style.display = 'block';
         nameEntered.value = '';
         emailEntered.value = '';
     }
 });