let projects = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let content = document.getElementById("input-project-content").value
    let image = document.getElementById("input-project-image")

    image = URL.createObjectURL(image.files[0])

    let projecting = {
        title,
        content,
        image,
        postedAt: new Date()
    }

    projects.push(projecting)
    renderProjects()
}

let month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

function pewaktu(time) {
    let dates = time.getDate()
    let months = time.getMonth()
    let years = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    return `${dates} ${month[months]} ${years} | ${hours}:${minutes} +07:00 GMT`
}

function timing(time) {
    let timer = new Date() - new Date(time)

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour
    let hourInDay = 23

    let dayTiming = timer / (miliseconds * secondInHour * hourInDay)

    if (dayTiming >= 1) {
        const dayDate = `${Math.floor(dayTiming)} Days Ago`
        return dayDate
    } else {
        let hourTiming = Math.floor(timer / (miliseconds * secondInHour))
        if (hourTiming > 0) {
            return `${hourTiming} Hours Ago`
        } else {
            let minuteTiming = Math.floor(timer / (miliseconds * secondInMinutes))
            return `${minuteTiming} Minutes Ago`
        }
    }
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
                    <a href="myProject-detail.html" target="_blank">${projects[i].title}</a>
                </h1>
                <div class="detail-project-content">
                    ${pewaktu(projects[i].postedAt)} | Abel Dustin Hyman Susilo
                </div>
                <p>
                    ${projects[i].content}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">${timing(projects[i].postedAt)}</span>
                </div>
            </div>
        </div>
        `
    }
}

setInterval (function () {
    renderProjects()
}, 2000)