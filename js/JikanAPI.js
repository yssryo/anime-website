    // const url = `https://api.jikan.moe/v4/top/anime?=limit3`
    // fetch(url)
    // .then(response => response.json())
    // .then(responseObj => {
    //     const rawData   = responseObj.data;
    //     const topTrandingA = rawData ? rawData.slice(0, 10) : [];

    //     console.log("top 3 anime this season:", topTrandingA);
    //     console.log("current data:", topTrandingA.lenght);

    //     topTrandingA.forEach((anime, index) => {
    //         console.log(`rank ${index + 1}: ${anime.title}`);
    //     });
    // });

    
function loadAnimeTop() {
    const urlTop = `https://api.jikan.moe/v4/top/anime`
    fetch(urlTop)
    .then(response => response.json())
    .then(responseObj => {
        const topTen = responseObj.data ? responseObj.data.slice(0, 10) : [];
        showToPage(topTen);
    })
    .catch(error => console.error("something went wrong:", error))
}

function showToPage(animeList) {
    const container = document.getElementById('card-topA')
    if(!container) return;
    let contentHtml= "";
    
    animeList.forEach(anime => {
        contentHtml += 
        `<div class="anime-card">
            <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}" class="card-image"></img>
            <h3 class="text-card">${anime.title}</h3>
            <p class="text-card">${anime.score || `N/A`}</p>
        </div>
        `;
    });
    container.innerHTML = contentHtml;
}

document.addEventListener(`DOMContentLoaded`, loadAnimeTop);