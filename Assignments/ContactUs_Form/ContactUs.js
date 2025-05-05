const form = document.getElementById('hospitalForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const department = document.getElementById('department');
      const message = document.getElementById('message');
      const terms = document.getElementById('terms');

   
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
      }

      const phonePattern = /^[6-9]\d{9}$/;
      if (phone.value.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
      } else if (!phonePattern.test(phone.value.trim())) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit Indian number';
        isValid = false;
      }

      if (department.value === '') {
        document.getElementById('departmentError').textContent = 'Select a department';
        isValid = false;
      }

      if (message.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Please describe your issue';
        isValid = false;
      }

      if (!terms.checked) {
        document.getElementById('termsError').textContent = 'You must accept the terms';
        isValid = false;
      }

      if (isValid) {
        alert("Thank you! We'll get back to you shortly.");
        form.reset();
      }
    });