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

async function filtrarFotos() {
    const filtrarImagem = document.getElementById("search").value.toLowerCase();
    const resposta = await fetch('https://api.jikan.moe/v4/anime');
    const imagemEncontrada = await resposta.json();
    const animes = imagemEncontrada.data;

    const animesFiltrados = animes.filter(anime => 
        anime.title.toLowerCase().includes(filtrarImagem)
    );

    const galeria = document.getElementById("gallery");
    if (animesFiltrados.length > 0) {
        galeria.innerHTML = animesFiltrados.map(anime => `
            <div class="gallery-item">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <p>${anime.title}</p>
            </div>
        `).join("");
    } else {
        galeria.innerHTML = "<p>Nenhum anime encontrado.</p>";
    }
}

carregarAnimes();