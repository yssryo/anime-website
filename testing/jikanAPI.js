// async function loadAnime() {
//     const url = "https://api.jikan.moe/v4/anime/52991";
//     const urlstatistic = "https://api.jikan.moe/v4/anime/52991/statistics";
//     fetch(url)
//     .then(response => response.json())
//     .then(responseObj => {
//         const anime = responseObj.data;
//         const linkImg = anime.images.jpg.image_url;
//         const title   = anime.title;
//         const card    = document.getElementById("animeCard");
//         card.innerHTML = `
//         <h2>${title}</h2>
//         <img src="${linkImg}" alt="Poster ${title}" width="auto">
//         <div id="statBox">loading statistic...</div>
//         `;

//         return fetch(urlstatistic)
//     })
//         .then(response => response.json())
//         .then(responseObj => {
//             const statistics = responseObj.data;
//             const viewer     = statistics.watching;
//             const total      = statistics.total;
    
//             const scoreArray = statistics.scores[9];

//             const statBox = document.getElementById("statBox");

//             statBox.innerHTML = `
//             <p><strong>current viewer:</strong> ${viewer.toLocaleString()} people</p>
//             <p><strong>total viewer:</strong> ${total.toLocaleString()} people</p>
//             <h4>skor</h4>
//             <li>${scoreArray.score} ${scoreArray.percentage}%</li>
//             `;
//         })

//     .catch(error => console.error("ada yang salah:", error));

// };





function loadAnime() {
    const keyWord = document.getElementById("searchingAnime").value;
    if(!keyWord) {
        alert("apa yang harus di cari?");
        return;
    }
    const urlOverall   = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(keyWord)}&limit=5`;
    fetch(urlOverall)
    .then(response => response.json())
    .then(responseObj => {
            const animeList = responseObj.data;
                if(!animeList || animeList.length === 0) {
                    document.getElementById("animecard").innerHTML = "<h1>your anime not founded</h1>";
                    return;
                }

            const anime     = animeList[0];
            const animeId   = anime.mal_id;
            const title     = anime.title;
            const synopsis  = anime.synopsis;
            const linkImg   = anime.images?.jpg?.large_image_url || anime.images?.jpg?.image.url;
            const card      = document.getElementById("animeCard");


        card.innerHTML = `
        <h2>${title}</h2>
        <h1 class="textS">${synopsis}</h1>
        <img src="${linkImg}" alt="Poster ${title}" width="auto">
        <div id="statBox">loading....</div>
        `;

        return fetch(`https://api.jikan.moe/v4/anime/${animeId}/statistics`)
    })
    .then(response => response.json())
    .then(responseObj => 
    {
        console.log("Isi Respon Statistik:", responseObj);
        const statistic     = responseObj.data;
        const viewer        = statistic.watching;
        const total         = statistic.total;
        const statBox       = document.getElementById("statBox");
        
        const scoreHere     = statistic?.scores && statistic?.score?.length > 9;

        const scoreArray    = statistic?.scores?.find(item => item.score === 10);
        let textScore = "";
        if(scoreArray) {
            textScore = `<ul>score: <br> ${scoreArray.score} <br> ${scoreArray.votes.toLocaleString()} user</ul>`;
        } else {
            textScore = `<ul>Belum ada data rating (Anime belum rilis/belum dinilai)</ul>`;
        }

        statBox.innerHTML = 
        `
        <p><strong>current viewer:</strong> ${viewer.toLocaleString()} user</p>
        <p><strong>total viewer:</strong> ${total.toLocaleString()} user</p>
        ${textScore}
        `;
    })
    .catch(error => console.error("something went wrong u know?:", error));
};


// fetch(`https://api.jikan.moe/v4/anime/47917/statistics`)
// .then(response => response.json())
// .then(data => console.log(data))