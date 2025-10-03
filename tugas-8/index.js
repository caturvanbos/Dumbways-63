const express = require('express');
const app = express();

// middleware untuk parsing JSON
app.use(express.json());

let dataku = {
    nama: "Catur",
    usia: "28",
    alamat: "Banyumas, Jawa Tengah"
}

app.get('/dataku', (req, res) => {
  res.json(dataku);
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
