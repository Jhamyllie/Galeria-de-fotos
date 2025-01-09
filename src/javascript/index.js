async function carregarAnimes() {
    const resposta = await fetch("https://api.jikan.moe/v4/anime");
    const fotosCarregadas = await resposta.json();
    const animes = fotosCarregadas.data;

    const galeria = document.getElementById("gallery");
    galeria.innerHTML = animes.map(anime => `
        <div class="gallery-item">
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <p>${anime.title}</p>
        </div>
    `).join("");
}

carregarAnimes();