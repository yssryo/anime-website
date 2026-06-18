// fetch("https://api.jikan.moe/v4/anime/61006")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

// function searchAnime() {
//   const keyword = "bocchi";
//   const url = `https://api.jikan.moe/v4/anime?q=${keyword}&type=tv&limit=5`;

//   fetch(url)
//   .then(response => response.json())
//   .then(responseObj => {
//     const animeResault = responseObj.data
//     console.log(`Ditemukan ${animeResault.length} anime dengan kata kunci "${keyword}":\n`);
    
//     animeResault.forEach((anime, index) => {
//       console.log(`${index + 1}. judul: ${anime.title}`);
//       console.log(`ID: ${anime.mal_id}`);
//       console.log(`score: ${anime.score}`);
//       console.log(`Gambar: ${anime.images.jpg.image_url}`);
//     });
//   })
//   .catch(error => console.log("terjadi kesalahan ketik saat mencari", error));
// }

// searchAnime();

// function searchAnime() {
//   const keyword = "jujutsu";
//   const url = `https://api.jikan.moe/v4/anime?q=${keyword}&type=tv&limit=5`;

//   fetch(url)
//     .then(response => response.json())
//     .then(responseObj => {
//       // 1. Mengambil array data anime hasil pencarian
//       const animeResults = responseObj.data; 

//       console.log(`Ditemukan ${animeResults.length} anime dengan kata kunci "${keyword}":\n`);

//       // 2. Karena berbentuk array (banyak data), kita pakai looping .forEach()
//       animeResults.forEach((anime, index) => {
//         console.log(`${index + 1}. Judul: ${anime.title}`);
//         console.log(`   ID MAL: ${anime.mal_id}`);
//         console.log(`   Rating/Score: ${anime.score}`);
//         console.log(`   Gambar: ${anime.images.jpg.image_url}`);
//         console.log("-----------------------------------------");
//       });

//       // 3. (Opsional) Kamu juga bisa membaca info pagination-nya
//       console.log("Halaman saat ini:", responseObj.pagination.current_page);
//       console.log("Apakah ada halaman berikutnya?", responseObj.pagination.has_next_page);
//     })
//     .catch(error => console.log("Terjadi error saat mencari:", error));
// }

// // Jalankan fungsi pencarian
// searchAnime();



function searchAnime() {
  const kataKunci = document.getElementById("searching").value;
  if(!kataKunci) {
    alert("salah");
    return;
  }
  const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(kataKunci)}&limit=5`
  fetch(url) 
  .then(response => response.json())
  .then(responseObj => {
    const animeResault = responseObj.data;
    console.clear();
    console.log(`hasil: "${kataKunci}"`);

    animeResault.forEach((anime, index) => {
      console.log(`${index + 1}.${anime.title}.${anime.type}.${anime.images}.${anime.rating}${anime.synopsis} (score: ${anime.score})`)
    })
  })
  .catch(error => console.error("not found:", error))
}