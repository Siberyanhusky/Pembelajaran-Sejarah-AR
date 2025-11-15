// ===================== DATABASE MATERI =====================

const materi = {
    "marker-buddha": { title: "Arca Buddha (Dharmacakra Mudra)", text: `...` },
    "marker-borobudur": { title: "Candi Borobudur", text: `...` },
    "marker-brahma": { title: "Dewa Brahma", text: `...` },
    "marker-dolmen": { title: "Dolmen", text: `...` },
    "marker-erectus": { title: "Homo Erectus", text: `...` },
    "marker-kjokken": { title: "Kjokkenmoddinger", text: `...` },
    "marker-megan": { title: "Meganthropus Palaeojavanicus", text: `...` },
    "marker-menhir": { title: "Menhir", text: `...` },
    "marker-prambanan": { title: "Candi Prambanan", text: `...` },
    "marker-ciaruteun": { title: "Prasasti Ciaruteun", text: `...` }
};

// ===================== FIXED POPUP LOGIC =====================

const popup = document.getElementById("popup");
const titleEl = document.getElementById("popup-title");
const textEl = document.getElementById("popup-text");
const btnClose = document.getElementById("btn-close");

let activeModel = null;
let activeMarker = null;

// FIX: memakai event "componentchanged" untuk cek VISIBILITY model
function setupMarker(markerId, modelId) {
    const marker = document.getElementById(markerId);
    const model = document.getElementById(modelId);

    // Event ketika marker benar-benar terlihat
    marker.addEventListener("markerFound", () => {
        console.log(markerId + " FOUND");
    });

    // Event ketika marker hilang
    marker.addEventListener("markerLost", () => {
        console.log(markerId + " LOST");

        popup.classList.add("popup-hidden");
        popup.classList.remove("popup-show");

        model.setAttribute("visible", false);

        activeModel = null;
        activeMarker = null;
    });

    // FIX: deteksi hanya saat model BENERAN terlihat
    model.addEventListener("componentchanged", (evt) => {
        if (evt.detail.name === "visible" && model.getAttribute("visible") === true) {

            // Cegah popup muncul 10x
            if (activeMarker === markerId) return;

            activeMarker = markerId;
            activeModel = model;

            const data = materi[markerId];
            titleEl.textContent = data.title;
            textEl.textContent = data.text;

            // Munculkan popup
            popup.classList.remove("popup-hidden");
            popup.classList.add("popup-show");

            // Sembunyikan model dulu
            model.setAttribute("visible", false);
        }
    });
}

// Tombol close → tampilkan modelnya
btnClose.addEventListener("click", () => {
    popup.classList.add("popup-hidden");
    popup.classList.remove("popup-show");

    if (activeModel) {
        activeModel.setAttribute("visible", true);
    }
});

// REGISTER semua marker
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
