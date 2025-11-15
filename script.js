// ===================== DATABASE MATERI =====================

const materi = {
    "marker-buddha": {
        title: "Arca Buddha (Dharmacakra Mudra)",
        text: `
Makna Umum Arca Buddha di Candi Borobudur:
- Ushnisha: simbol pencerahan tertinggi.
- Urna: simbol kebijaksanaan spiritual.
- Daun telinga panjang: melambangkan welas asih.
- Mata setengah terpejam: ketenangan dan konsentrasi.
- Busana sederhana: pelepasan duniawi.

Makna Dharmacakra Mudra:
- Dharma = kebenaran, Chakra = roda.
- Simbol khotbah pertama Buddha di Sarnath.
- Pemutaran roda dharma = penyebaran ajaran ke dunia.

Posisi Tangan:
- Dua lingkaran di jari: roda dharma.
- Tangan kanan keluar = ajaran ke dunia luar.
- Tangan kiri ke dalam = kebijaksanaan batin.
- Tiga jari = Tri Ratna: Buddha, Dharma, Sangha.
`
    },

    "marker-borobudur": {
        title: "Candi Borobudur",
        text: `
Candi Borobudur dibangun oleh Dinasti Syailendra (780–830 M) sebagai pusat pemujaan agama Buddha Mahayana.

Struktur Candi:
1. Kamadhatu → dunia nafsu
2. Rupadhatu → dunia bentuk
3. Arupadhatu → dunia tanpa bentuk

Fungsi:
- Tempat ibadah Waisak
- Media pengajaran melalui relief: Lalitavistara, Jataka, Avadana, Gandavyuha

Makna:
Perjalanan spiritual manusia menuju pencerahan (nirwana).
`
    },

    "marker-brahma": {
        title: "Dewa Brahma",
        text: `
Dewa Brahma adalah dewa pencipta dalam konsep Trimurti (Brahma, Wisnu, Siwa).

Ciri-ciri:
- 4 wajah: menguasai 4 Veda.
- 4 tangan: membawa lotus, mala, kitab suci, mudra.
- Simbol penciptaan dan pengetahuan.

Makna Filosofis:
- Manifestasi Saguna Brahman (Tuhan berwujud).
- Menciptakan alam semesta melalui daya pikir.
- Mengatur awal daur kehidupan.

Peran:
- Menciptakan makhluk hidup, dewa, manusia, hewan.
- Menciptakan tatanan sosial (varna).
`
    },

    "marker-dolmen": {
        title: "Dolmen",
        text: `
Dolmen = meja batu besar dari masa Megalitikum.

Fungsi:
- Tempat sesaji untuk arwah leluhur.
- Penutup kubur batu.
- Simbol kedudukan tokoh penting.

Sebaran di Indonesia:
- Bondowoso
- Puger
- Paseman
- Sumba

Makna:
Bagian dari tradisi megalitik bersama menhir, sarkofagus, peti batu.
`
    },

    "marker-erectus": {
        title: "Homo Erectus",
        text: `
Homo erectus hidup 1.5 juta – 300 ribu tahun lalu.

Ciri Fisik:
- Tinggi 160–170 cm
- Volume otak 750–1200 cc
- Alis tebal menonjol
- Berjalan tegak sempurna

Kemajuan Budaya:
- Pembuat kapak genggam
- Penguasaan api pertama kali
- Hidup berkelompok, tinggal di gua

Peran penting:
Leluhur penting dalam evolusi menuju manusia modern.
`
    },

    "marker-kjokken": {
        title: "Kjokkenmoddinger",
        text: `
Kjokkenmoddinger = tumpukan kulit kerang masa Mesolitikum.

Ciri-ciri:
- Sisa makanan laut
- Ada kapak genggam
- Bukti manusia semi-nomaden
- Hidup di pantai/muara

Sebaran:
- Sumatera Utara (Lhok Seumawe)
- Medan
- Langsa
- Binjai

Makna:
Menunjukkan pola hidup berburu dan mengumpulkan makanan.
`
    },

    "marker-megan": {
        title: "Meganthropus Palaeojavanicus",
        text: `
Manusia purba tertua di Indonesia (1–2 juta tahun lalu).

Ciri Fisik:
- Tinggi ±2.5 meter
- Rahang besar & kuat
- Dahi tebal, wajah mirip kera
- Volume otak ~900 cc
- Herbivora

Penemuan:
- Ditemukan Koenigswald (1937–1941)
- Situs Sangiran

Makna:
Salah satu manusia purba terbesar yang pernah ditemukan.
`
    },

    "marker-menhir": {
        title: "Menhir",
        text: `
Menhir = batu tegak megalitik.

Fungsi:
- Penghormatan leluhur
- Tanda kubur
- Media ritual spiritual

Perkembangan:
- Pada masa Islam menjadi nisan (contoh: makam raja Hitu)
- Bukti akulturasi budaya lokal & Islam.

Makna:
Simbol hubungan manusia dengan dunia spiritual sejak prasejarah.
`
    },

    "marker-prambanan": {
        title: "Candi Prambanan",
        text: `
Candi Hindu terbesar di Indonesia, dibangun masa Mataram Kuno (856 M).

Struktur:
- 240 candi
- Pusat pemujaan Trimurti (Siwa, Wisnu, Brahma)
- Denah mandala, berbentuk Gunung Mahameru

Sumber sejarah:
- Prasasti Siwagraha (856 M)

Makna:
Simbol harmoni kosmos menurut kosmologi Hindu.
`
    },

    "marker-ciaruteun": {
        title: "Prasasti Ciaruteun",
        text: `
Peninggalan Kerajaan Tarumanegara di Bogor.

Isi:
- Tulisan Pallawa & Sanskerta
- Ada telapak kaki Raja Purnawarman
- Disamakan dengan kaki Dewa Wisnu → simbol legitimasi kekuasaan

Inskripsi B:
- Masih diperdebatkan isinya

Makna:
Simbol kekuasaan raja & pengaruh Hindu di Nusantara.
`
    }
};


// ===================== POPUP LOGIC =====================

const popup = document.getElementById("popup");
const titleEl = document.getElementById("popup-title");
const textEl = document.getElementById("popup-text");
const btnClose = document.getElementById("btn-close");

let activeModel = null;

// UTAMA: saat marker terdeteksi
function setupMarker(markerId, modelId) {
    const marker = document.getElementById(markerId);
    const model = document.getElementById(modelId);

    marker.addEventListener("markerFound", () => {
        // munculkan popup materi
        const data = materi[markerId];
        titleEl.textContent = data.title;
        textEl.textContent = data.text;

        popup.classList.remove("popup-hidden");
        popup.classList.add("popup-show");

        // sembunyikan dulu modelnya
        model.setAttribute("visible", false);
        activeModel = model;
    });

    // saat marker hilang
    marker.addEventListener("markerLost", () => {
        popup.classList.add("popup-hidden");
        popup.classList.remove("popup-show");
        if (activeModel) activeModel.setAttribute("visible", false);
    });
}

// tutup popup → tampilkan model
btnClose.addEventListener("click", () => {
    popup.classList.add("popup-hidden");
    popup.classList.remove("popup-show");

    if (activeModel) activeModel.setAttribute("visible", true);
});


// ===================== REGISTRASI SEMUA MARKER =====================

setupMarker("marker-buddha", "model-buddha");
setupMarker("marker-borobudur", "model-borobudur");
setupMarker("marker-brahma", "model-brahma");
setupMarker("marker-dolmen", "model-dolmen");
setupMarker("marker-erectus", "model-erectus");
setupMarker("marker-kjokken", "model-kjokken");
setupMarker("marker-megan", "model-megan");
setupMarker("marker-menhir", "model-menhir");
setupMarker("marker-prambanan", "model-prambanan");
setupMarker("marker-ciaruteun", "model-ciaruteun");
