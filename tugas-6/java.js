

const projects = [
  {
      title: "Dumbways Web App 2021",
      image: "gambar/1.jpg",
      startDate: "2021-01-01", 
      endDate: "2021-04-01",   
      desc: "App that used for dumbways student, it was deployed and can be downloaded on playstore. Happy download.",
      technologies: ["Android", "Java", "JS"]
  },
  {
      title: "Dumbways Web App 2021",
      image: "gambar/2.jpg",
      startDate: "2022-03-01",
      endDate: "2022-06-01",
      desc: "Another mobile app project for dumbways students, focusing on new features and improved user experience.",
      technologies: ["Android", "Java", "JS"]
  },
  {
      title: "Dumbways Web App 2021",
      image: "gambar/3.jpg",
      startDate: "2023-01-15",
      endDate: "2023-08-15",
      desc: "A full-fledged e-commerce website built for a fictional client, demonstrating modern web practices.",
      technologies: ["Android", "Java", "JS"]
  }
];

const projectList = document.querySelector(".project-list");

// Fungsi untuk menghitung durasi
function getDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start); // dalam milidetik

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears > 0) {
      return `${diffYears} tahun`;
  } else if (diffMonths > 0) {
      return `${diffMonths} bulan`;
  } else {
      return `${diffDays} hari`;
  }
}

// Fungsi untuk mendapatkan ikon teknologi
function getTechIcons(technologies) {
  let iconsHtml = "";
  for (let i = 0; i < technologies.length; i++) {
      const tech = technologies[i];
      if (tech === "Node JS") {
          iconsHtml += `<i class="fa-brands fa-node-js"></i>`;
      } else if (tech === "Next JS") {
          iconsHtml += `<i class="fa-brands fa-react"></i>`;
      } else if (tech === "React Js") {
          iconsHtml += `<i class="fa-brands fa-react"></i>`;
      } else if (tech === "TypeScript") {
          iconsHtml += `<i class="fa-solid fa-code"></i>`;
      } else if(tech === "Android"){
        iconsHtml += `<i class="fa-brands fa-android"></i>`;
      } else if(tech === "Java"){
        iconsHtml += `<i class="fa-brands fa-java"></i>`;
      } else if(tech === "JS"){
        iconsHtml += `<i class="fa-brands fa-js"></i>`;
      }
  }
  return iconsHtml;
}


// ini untuk merender semua proyek
function renderProjects() {
  projectList.innerHTML = ""; // Bersihkan dulu daftar proyek sebelum merender ulang

  for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      const duration = getDuration(p.startDate, p.endDate);
      const techIcons = getTechIcons(p.technologies);

      projectList.innerHTML += `
          <div class="project-card" onclick="window.location.href='project-detail.html'">
              <img src="${p.image}" alt="">
              <h3>${p.title}</h3>
              <p class="duration">Durasi: ${duration}</p>
              <p>${p.desc}</p>

              <div class="tech-icons">
                  ${techIcons}
              </div>

              <div class="card-buttons">
                  <button class="btn-edit">edit</button>
                  <button class="btn-delete">delete</button>
              </div>
          </div>`;
  }
}

// Panggil fungsi renderProjects saat halaman pertama kali dimuat
renderProjects();


// Ambil elemen untuk menampilkan nama file
const projectImageInput = document.getElementById("projectImage");
const fileNameSpan = document.getElementById("fileName");

// Event listener untuk input file
projectImageInput.addEventListener("change", function() {
    if (this.files && this.files.length > 0) {
        fileNameSpan.textContent = this.files[0].name;
    } else {
        fileNameSpan.textContent = "no file choose";
    }
});


function addProject(event) {
    event.preventDefault(); // Mencegah halaman reload saat form disubmit

    const projectName = document.getElementById("projectName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;
    const projectImage = document.getElementById("projectImage").files; // Mengambil FileList

    // Validasi sederhana untuk tanggal
    if (new Date(startDate) > new Date(endDate)) {
        alert("End Date must be greater than Start Date!");
        return; // Hentikan fungsi jika validasi gagal
    }

    // Mengambil nilai teknologi yang dicentang
    const technologies = [];
    const techCheckboxes = document.querySelectorAll('.tech-checkbox:checked');
    for (let i = 0; i < techCheckboxes.length; i++) {
        technologies.push(techCheckboxes[i].value);
    }

    if (technologies.length === 0) {
        alert("Please select at least one technology!");
        return;
    }

    let imageUrl = '';
    if (projectImage.length > 0) {
        // Untuk saat ini, kita akan menggunakan URL objek sementara
        // Di aplikasi nyata, kamu akan mengunggah gambar ke server dan mendapatkan URL publiknya.
        imageUrl = URL.createObjectURL(projectImage[0]);
    } else {
        imageUrl = 'gambar/default.jpg'; // Gambar default jika tidak ada gambar diupload
    }


    const newProject = {
        title: projectName,
        startDate: startDate,
        endDate: endDate,
        desc: description,
        technologies: technologies,
        image: imageUrl // Gunakan URL gambar yang didapat
    };

    projects.push(newProject); // Tambahkan proyek baru ke array projects
    renderProjects(); // Panggil ulang fungsi renderProjects untuk menampilkan proyek baru

    // Bersihkan form setelah submit (opsional)
    document.querySelector(".main-form").reset();
    fileNameSpan.textContent = "no file choose"; // Reset tampilan nama file
}