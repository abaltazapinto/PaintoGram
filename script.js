const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 199
    }
]


const renderEl = document.getElementById("render");

window.onload = function(){
    let structure = ``;
    for(let i=0; i<posts.length; i++){
        structure += 
        `
        <section class="card-container">

        <div class="card-header">
            <img src="${posts[i].avatar}" alt="avatar ${posts[i].name}" id="avatar-vangogh">
            <div class="name-location">
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>

        <img src="${posts[i].post}" alt="${posts[i].name} post" class="main-img" ondblclick="increaseLike(${i})">

        <div class="icons">
            <img src="./images/icon-heart.png" alt="like icon" class="icon" onclick="increaseLike(${i})">
            <img src="./images/icon-comment.png" alt="add comment icon" class="icon">
            <img src="./images/icon-dm.png" alt="share icon" class="icon">
        </div>

        <p class="likes"><span id="like${i}">${(posts[i].likes).toLocaleString()}</span> likes</p>
        <p class="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>

    </section>
        `
    }
    renderEl.innerHTML = structure;
}

function increaseLike(i) {
    let id = "like" + i;
    let likes = posts[i].likes;
    likes += 1;
    posts[i].likes+=1;
    document.getElementById(id).textContent = likes.toLocaleString();
}