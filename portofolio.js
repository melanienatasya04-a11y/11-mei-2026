import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>PORTOFOLIO</h1>
        <h2>Melanie Natasya Putri</h2>

        <p>
            Saya Melanie Natasya Putri, mahasiswi aktif 
            D4 Teknik Elektronika Industri Jurusan Teknik Elektro 
            Politeknik Negeri Padang angkatan 2023.
        </p>

        <p>
            Selain mengikuti kegiatan perkuliahan, saya juga aktif 
            dalam organisasi UKM-Robotik dan saat ini menjabat 
            sebagai Koor Departemen Kestari.
        </p>

        <p>
            Saya memiliki minat pada bidang robotika, sistem kendali, 
            dan otomasi industri.
        </p>

        <hr>

        <h3>Data Diri</h3>
        <ul>
            <li>Nama : Melanie Natasya Putri</li>
            <li>Tempat, Tanggal Lahir : Pekanbaru, 15 Mei 2005</li>
            <li>Pendidikan : Politeknik Negeri Padang</li>
            <li>Program Studi : D4 Teknik Elektronika Industri</li>
        </ul>

        <h3>Pengalaman</h3>
        <ul>
            <li>UKM-Robotik Politeknik Negeri Padang</li>
            <li>Koor Departemen Kestari</li>
            <li>Panitia MRC (Minangkabau Robot Contest)</li>
            <li>Mengikuti Training PLC</li>
        </ul>

        <h3>Keahlian</h3>
        <ul>
            <li>Arduino</li>
            <li>Dasar PLC</li>
            <li>Robotika Dasar</li>
            <li>Sistem Kendali</li>
        </ul>

        <p><b>Motto:</b> "Terus belajar dan berkembang menjadi lebih baik."</p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Melanie Natasya Putri',
            ttl: 'Pekanbaru, 15 Mei 2005',
            kampus: 'Politeknik Negeri Padang',
            prodi: 'D4 Teknik Elektronika Industri',
            organisasi: 'UKM-Robotik',
            jabatan: 'Koor Departemen Kestari'
        }
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});