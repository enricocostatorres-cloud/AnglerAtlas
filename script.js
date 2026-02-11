document.addEventListener('DOMContentLoaded', () => {
    
    // LIKE BUTTONS
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.innerHTML = '<i class="fa-solid fa-fish"></i> Liked!';
            } else {
                this.innerHTML = '<i class="fa-solid fa-fish"></i> Like';
            }
        });
    });

    // SHARE BUTTONS
    const shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("🎣 Link copied!");
        });
    });

    // MODAL & POSTING LOGIC
    const modal = document.getElementById("postModal");
    const openBtn = document.getElementById("openPostModalBtn");
    const closeBtn = document.querySelector(".close-modal");
    const postForm = document.getElementById("createPostForm");

    if(openBtn) {
        openBtn.addEventListener("click", () => modal.style.display = "block");
    }
    if(closeBtn) {
        closeBtn.addEventListener("click", () => modal.style.display = "none");
    }
    window.addEventListener("click", (e) => {
        if (e.target == modal) modal.style.display = "none";
    });

    if(postForm) {
        postForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const species = document.getElementById("speciesInput").value;
            const depth = document.getElementById("depthInput").value;
            
            // Create HTML for new post
            const newPostHTML = `
            <article class="post-card">
                <div class="post-header">
                    <div class="user-avatar"></div>
                    <span class="username">You</span>
                </div>
                <div class="post-image-container">
                    <img src="https://placehold.co/600x400/00578a/ffffff?text=${species}" class="post-image">
                </div>
                <div class="post-data">
                    <strong>Catch:</strong> ${species} | <strong>Depth:</strong> ${depth}
                </div>
                <div class="post-actions">
                    <button class="action-btn like-btn"><i class="fa-solid fa-fish"></i> Like</button>
                    <button class="action-btn share-btn"><i class="fa-solid fa-anchor"></i> Share</button>
                    <button class="action-btn comment-btn"><i class="fa-regular fa-comment"></i> Comment</button>
                </div>
            </article>`;

            // Insert after header
            document.querySelector(".feed-header").insertAdjacentHTML('afterend', newPostHTML);
            modal.style.display = "none";
            postForm.reset();
        });
    }
});
