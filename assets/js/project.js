let projects = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let content = document.getElementById("input-project-content").value
    let image = document.getElementById("input-project-image")

    image = URL.createObjectURL(image.files[0])

    let blog = {
        title,
        content,
        image
    }

    projects.push(blog)
    renderProjects()
}

function renderProjects() {
    console.log(projects);

    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
        containerBlogs.innerHTML += `
        <div class="project-list-item">
            <div class="project-image">
                <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${projects[i].title}</a>
                </h1>
                <div class="detail-project-content">
                    8 Jul 2022 4:35 WIB | Abel Dustin Hyman Susilo
                </div>
                <p>
                    ${projects[i].content}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">8 minutes ago</span>
                </div>
            </div>
        </div>
        `
    }
}