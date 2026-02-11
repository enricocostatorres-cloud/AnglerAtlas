// Wait for the HTML to load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIN LOGIC ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from refreshing the page
            
            // Get values (In a real app, you'd send these to a server)
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;

            if(email && password) {
                // Simulate logging in...
                alert("Welcome back, " + email + "!");
                // Redirect to the main dashboard
                window.location.href = "index.html"; 
            }
        });
    }

    // --- 2. LIKE BUTTON LOGIC ---
    // Find all like buttons on the page
    const likeBtns = document.querySelectorAll('.like-btn');

    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle the 'liked' class which makes it red (defined in CSS)
            this.classList.toggle('liked');
            
            // Change the text based on state
            if (this.classList.contains('liked')) {
                this.innerHTML = '<i class="fa-solid fa-fish"></i> Liked!';
            } else {
                this.innerHTML = '<i class="fa-solid fa-fish"></i> Like';
            }
        });
    });

    // --- 3. SHARE BUTTON LOGIC ---
    const shareBtns = document.querySelectorAll('.share-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("🎣 Catch Link copied to your clipboard!");
        });
    });

    // --- 4. NAVIGATION LOGIC (Sign out) ---
    // If we are on the dashboard, let's make the profile button log us out for now
    const profileLink = document.querySelector('.nav-item .fa-user');
    if(profileLink) {
        profileLink.parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            let confirmLogout = confirm("Do you want to log out?");
            if(confirmLogout) {
                window.location.href = "login.html";
            }
        });
    }
});
