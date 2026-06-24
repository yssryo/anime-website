function loadAnime() {
    const url = "https://api.jikan.moe/v4/anime/52991/";
    const urlstatistic = "https://api.jikan.moe/v4/anime/52991/statistics";
    fetch(url)
    .then(response => response.json())
    .then(responseObj => {
        const anime = responseObj.data;
        const linkImg = anime.images.jpg.image_url;
        const title   = anime.title;
        const card    = document.getElementById("animeCard");
        card.innerHTML = `
        <h2>${title}</h2>
        <img src="${linkImg}" alt="Poster ${title}" width="auto">
        <div id="statBox">loading statistic...</div>
        `;

        return fetch(urlstatistic)
    })
        .then(response => response.json())
        .then(responseObj => {
            const statistics = responseObj.data;
            const viewer     = statistics.watching;
            const total      = statistics.total;
    
            const scoreArray = statistics.scores[9];

            const statBox = document.getElementById("statBox");

            statBox.innerHTML = `
            <p><strong>current viewer:</strong> ${viewer.toLocaleString()} people</p>
            <p><strong>total viewer:</strong> ${total.toLocaleString()} people</p>
            <h4>skor</h4>
            <li>${scoreArray.score} ${scoreArray.percentage}%</li>

            `;
        })

    .catch(error => console.error("ada yang salah:", error));

};


fetch(`https://api.jikan.moe/v4/anime/47917/statistics`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));