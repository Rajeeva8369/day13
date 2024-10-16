function handleSubmit(event) {
    event.preventDefault();
    
    const fields = {
      firstname: 'your first name',
      lastname: 'your last name', 
      email: 'a valid email',
      password: 'a password' };
   
      const error = document.getElementById('error');
    error.textContent = '';
    for (let id in fields) {
      const value = document.getElementById(id).value.trim();
      if (!value) {
        error.textContent = `Please enter ${fields[id]}`;
        return;
      }}
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    if (!email.includes('@')) {
      error.textContent = 'Email is badly formatted';
      return;}
   
    if (password.length < 8) {
      error.textContent = 'Password must be at least 8 characters long and contain at least a letter and a number';
      return; }
    error.textContent = 'Form submitted!';
    event.target.reset();
   }
