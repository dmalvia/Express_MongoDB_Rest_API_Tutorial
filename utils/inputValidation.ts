
function isValidEmail(email : string) {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    return emailRegex.test(email);
  }

function isValidPassword(password: string) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,16}$/
  
    return passwordRegex.test(password);
  }

  function isValidUsername(username: string) {
    // Define the rules for a valid username
    const regex = /^[a-zA-Z0-9_]{3,16}$/; // Must start with a letter, contain only letters, numbers, and underscores, and be between 3 and 16 characters long
  
    // Test the username against the regex
    return regex.test(username); 
  }
  

  export {isValidEmail, isValidPassword, isValidUsername}