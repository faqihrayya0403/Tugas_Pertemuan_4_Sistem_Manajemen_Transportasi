// Class Pelanggan
// Menyimpan data nama, nomor telepon, dan kendaraan yang disewa.
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    // Method untuk mencatat transaksi penyewaan kendaraan.
    catatTransaksi() {
        return `${this.nama} menyewa ${this.kendaraanDisewa}`;
    }
}

// Array untuk menyimpan semua pelanggan yang sedang menyewa.
const daftarPelanggan = [];

// Mengambil elemen HTML yang dibutuhkan.
const formPelanggan = document.getElementById("formPelanggan");
const tabelPelanggan = document.getElementById("tabelPelanggan");
const jumlahPelanggan = document.getElementById("jumlahPelanggan");
const jumlahKendaraan = document.getElementById("jumlahKendaraan");

// Menampilkan data pelanggan ke dalam tabel.
function tampilkanPelanggan() {
    tabelPelanggan.innerHTML = "";

    if (daftarPelanggan.length === 0) {
        tabelPelanggan.innerHTML = `
            <tr>
                <td colspan="6" class="empty">Belum ada data penyewaan.</td>
            </tr>
        `;
    } else {
        daftarPelanggan.forEach((pelanggan, index) => {
            const baris = document.createElement("tr");

            baris.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${pelanggan.nama}</strong></td>
                <td>${pelanggan.nomorTelepon}</td>
                <td>${pelanggan.kendaraanDisewa}</td>
                <td><span class="badge">Sedang Menyewa</span></td>
                <td>
                    <button class="btn-delete" onclick="hapusPelanggan(${index})">
                        Hapus
                    </button>
                </td>
            `;

            tabelPelanggan.appendChild(baris);
        });
    }

    jumlahPelanggan.textContent = daftarPelanggan.length;
    jumlahKendaraan.textContent = daftarPelanggan.length;
}

// Event ketika form penyewaan dikirim.
formPelanggan.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nomorTelepon = document.getElementById("nomorTelepon").value.trim();
    const kendaraan = document.getElementById("kendaraan").value;

    // Membuat object menggunakan class Pelanggan.
    const pelangganBaru = new Pelanggan(
        nama,
        nomorTelepon,
        kendaraan
    );

    // Memanggil method catatTransaksi().
    console.log(pelangganBaru.catatTransaksi());

    // Menambahkan object pelanggan ke array.
    daftarPelanggan.push(pelangganBaru);

    // Memperbarui tampilan tabel menggunakan DOM.
    tampilkanPelanggan();

    // Mengosongkan form.
    formPelanggan.reset();

    alert("Data penyewaan berhasil dicatat!");
});

// Fungsi untuk menghapus pelanggan dari daftar.
function hapusPelanggan(index) {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        daftarPelanggan.splice(index, 1);
        tampilkanPelanggan();
    }
}

// Menampilkan kondisi awal.
tampilkanPelanggan();
