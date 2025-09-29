const projects = [
    {
        title: "Dumbways Web App",
        image: "gambar/1.jpg",
        duration: "3 bulan",
        desc: "App that used for dumbways student, it was deployed and can be downloaded on playstore. Happy download.",
        tech: ["Android", "Java", "JS"]
    },
    {
        title: "Dumbways Web App",
        image: "gambar/2.jpg",
        duration: "3 bulan",
        desc: "App that used for dumbways student, it was deployed and can be downloaded on playstore. Happy download.",
        tech: ["Android", "Java", "JS"]
    },
    {
        title: "Dumbways Web App",
        image: "gambar/3.jpg",
        duration: "3 bulan",
        desc: "App that used for dumbways student, it was deployed and can be downloaded on playstore. Happy download.",
        tech: ["Android", "Java", "JS"]
    }
]

const projectList = document.querySelector(".project-list");

projects.forEach(p => {
    projectList.innerHTML += `
    <div class="project-card" onclick="window.location.href='project-detail.html'">
    <img src="${p.image}" alt=""
    <h3>${p.title}</h3>
    <p class="duration">Durasi: ${p.duration}</p>
    <p>${p.desc}</p>

    <div class="tech-icons">
        ${p.tech.map(t => {
          if (t === "Android") return `<i class="fa-brands fa-android"></i>`;
          if (t === "Java") return `<i class="fa-brands fa-java"></i>`;
          if (t === "JS") return `<i class="fa-brands fa-js"></i>`;
        }).join(" ")}
      </div>

      <div class="card-buttons">
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
      </div>

    </div>`;
});