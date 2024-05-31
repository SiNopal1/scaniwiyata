const daftarTanaman = [
  {
    "nama_umum": "Anggrek Bulan",
    "nama_latin": "Phalaenopsis amabilis",
    "nama_gambar": "https://cataas.com/cat",
    "eksplorasi": "phalaenopsis-amabilis.html"
  },
  {
    "nama_umum": "Rafflesia Arnoldi",
    "nama_latin": "Rafflesia arnoldii",
    "nama_gambar": "https://cataas.com/cat",
    "eksplorasi": "rafflesia-arnoldii.html"
  },
  {
    "nama_umum": "Kantong Semar",
    "nama_latin": "Nepenthes spp.",
    "nama_gambar": "https://cataas.com/cat",
    "eksplorasi": "nepenthes-spp.html"
  },
  {
    "nama_umum": "Bunga Bangkai",
    "nama_latin": "Amorphophallus titanum",
    "nama_gambar": "https://cataas.com/cat",
    "eksplorasi": "amorphophallus-titanum.html"
  },
  {
    "nama_umum": "Edelweiss Jawa",
    "nama_latin": "Anaphalis javanica",
    "nama_gambar": "https://cataas.com/cat",
    "eksplorasi": "anaphalis-javanica.html"
  }
]

const mainTaman = document.querySelector('.main-taman');
const searchInput = document.querySelector('input[name="search"]');

function filterTanaman() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTanaman = daftarTanaman.filter(tanaman => {
    return tanaman.nama_umum.toLowerCase().includes(searchTerm) ||
           tanaman.nama_latin.toLowerCase().includes(searchTerm);
  });

  // Update only the changed elements
  const existingTamanDivs = mainTaman.querySelectorAll('.taman');
  existingTamanDivs.forEach(tamanDiv => {
    const namaUmum = tamanDiv.querySelector('.medium').textContent.toLowerCase();
    const namaLatin = tamanDiv.querySelector('.small').textContent.toLowerCase();
    if (namaUmum.includes(searchTerm) || namaLatin.includes(searchTerm)) {
      tamanDiv.style.display = 'block'; // Show if it matches
    } else {
      tamanDiv.style.display = 'none'; // Hide if it doesn't match
    }
  });
}

// Initial display of all plants
displayTanaman(daftarTanaman);

// Event listener for search input
searchInput.addEventListener('input', filterTanaman);