fetch("https://api.jikan.moe/v4/anime/47917/full")
.then(response => {
    if(!response.ok) {
        throw new error("anime not found")
    }
    return response.json()
})
// .then(responseObj => responseObj.data.title)
.then(data => console.log(data))
.catch(error => console.log("anime not found"));