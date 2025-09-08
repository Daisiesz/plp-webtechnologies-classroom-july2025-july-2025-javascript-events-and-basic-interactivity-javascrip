const button = document.getElementById('myButton');
button.onclick = function() {
    alert('Button clicked! - DOM Property Element');
};

 let eventListenerButton = document.getElementById('eventListenerButton');
 let output = document.getElementById('output');
    
 
 eventListenerButton.addEventListener('click', function() {
        output.textContent= 'Umebonyeza! - Event Listener'
});


//  Answer 2: More interactive events
function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}

// Answer 3: Form validation
function validateForm(){
    let email = document.getElementById('email').value.trim();
    let username = document.getElementById('username').value.trim();

    if(email === "" || username === ""){
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

if(validateEmail(email)){
    // Email is valid
}else{
    alert("Please enter a valid email address.");
    return false;
}

alert("Form submitted successfully!"); 
return true;
