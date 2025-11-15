document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");
    const btnClose = document.getElementById("btn-close");

    let currentModel = null;  
    let currentMarker = null;  

    const materi = {
        "marker-buddha": {
            title: "Arca Buddha",
            text: "Makna spiritual Arca Buddha dari Borobudur..."
        },
        "marker-borobudur": {
            title: "Candi Borobudur",
            text: "Candi Borobudur merupakan warisan Buddha terbesar..."
        },
        "marker-brahma": {
            title: "Dewa Brahma",
            text: "Dewa pencipta dalam Hindu, bagian dari Trimurti..."
        },
        "marker-dolmen": {
            title: "Dolmen",
            text: "Meja batu besar untuk sesaji dan bagian kubur megalitikum..."
        },
        "marker-erectus": {
            title: "Homo Erectus",
            text: "Manusia purba tegak dengan kapasitas otak 750–1200cc..."
        },
        "marker-kjokken": {
            title: "Kjokkenmoddinger",
            text: "Tumpukan sampah dapur manusia purba dari kulit kerang..."
        },
        "marker-megan": {
            title: "Meganthropus",
            text: "Manusia purba tertua dan berpostur besar dari Sangiran..."
        },
        "marker-menhir": {
            title: "Menhir",
            text: "Batu tegak tradisi megalitikum untuk pemujaan leluhur..."
        },
        "marker-prambanan": {
            title: "Prambanan",
            text: "Candi Hindu terbesar abad 9 yang dipersembahkan bagi Trimurti..."
        },
        "marker-ciaruteun": {
            title: "Prasasti Ciaruteun",
            text: "Prasasti peninggalan Tarumanegara dengan telapak kaki Purnawarman..."
        }
    };

    function attachMarkerEvents(markerId, modelId) {
        const marker = document.getElementById(markerId);
        const model = document.getElementById(modelId);

        marker.addEventListener("markerFound", () => {
            currentMarker = markerId;
            currentModel = model;

            // Tampilkan popup materi
            popupTitle.innerText = materi[markerId].title;
            popupText.innerText = materi[markerId].text;
            popup.classList.remove("popup-hidden");
            popup.classList.add("popup-visible");

            // Sembunyikan model dulu
            model.setAttribute("visible", false);
        });

        marker.addEventListener("markerLost", () => {
            popup.classList.add("popup-hidden");
            popup.classList.remove("popup-visible");

            if (model) {
                model.setAttribute("visible", false);
            }
        });
    }

    btnClose.addEventListener("click", () => {
        popup.classList.add("popup-hidden");
        popup.classList.remove("popup-visible");

        if (currentModel) {
            currentModel.setAttribute("visible", true);
        }
    });

    // Daftarkan semua marker-model
    attachMarkerEvents("marker-buddha", "model-buddha");
    attachMarkerEvents("marker-borobudur", "model-borobudur");
    attachMarkerEvents("marker-brahma", "model-brahma");
    attachMarkerEvents("marker-dolmen", "model-dolmen");
    attachMarkerEvents("marker-erectus", "model-erectus");
    attachMarkerEvents("marker-kjokken", "model-kjokken");
    attachMarkerEvents("marker-megan", "model-megan");
    attachMarkerEvents("marker-menhir", "model-menhir");
    attachMarkerEvents("marker-prambanan", "model-prambanan");
    attachMarkerEvents("marker-ciaruteun", "model-ciaruteun");
});
