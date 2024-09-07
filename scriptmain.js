function Loginsubmit(event) {
    event.preventDefault(); // Prevent the form from being submitted automatically

    // Get form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Check if all fields are filled
    if (name && age && state && phone && email) {
        alert('Form submitted successfully!');
        // Reset the form if needed
        document.querySelector('form').reset();
    } else {
        alert('Please fill all the fields before submitting.');
    }
    return false; // Return false to prevent form submission
    
}

let crsr=document.querySelector('.crsr')

document.querySelector("#main").addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})