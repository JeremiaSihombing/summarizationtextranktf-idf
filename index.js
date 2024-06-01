// Tangkap elemen file input
const fileInput = document.getElementById('fileInput');
// Tangkap textarea pertama
const originalTextArea = document.querySelector('.original-textarea');

// Tambahkan event listener untuk perubahan pada file yang diunggah
fileInput.addEventListener('change', function(event) {
  // Pastikan ada file yang dipilih
  if (event.target.files.length > 0) {
    // Buat objek FileReader
    const reader = new FileReader();
    // Ketika pembacaan file selesai
    reader.onload = function(e) {
      // Isi textarea pertama dengan isi file yang dibaca
      originalTextArea.value = e.target.result;
    };
    // Baca isi file yang diunggah sebagai teks
    reader.readAsText(event.target.files[0]);
  }
});
