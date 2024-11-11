document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const postLists = document.querySelectorAll(".post-list");

    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();

        postLists.forEach(postList => {
            const posts = postList.getElementsByTagName("li");
            let hasVisiblePosts = false;

            Array.from(posts).forEach(post => {
                const text = post.textContent || post.innerText;
                if (text.toLowerCase().indexOf(filter) > -1) {
                    post.style.display = "";
                    hasVisiblePosts = true;
                } else {
                    post.style.display = "none";
                }
            });

            postList.style.display = hasVisiblePosts ? "" : "none";
        });
    });
});