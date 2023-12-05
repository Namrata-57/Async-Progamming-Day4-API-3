
function GET() {
    var apiurl = "https://source.unsplash.com/random";
    var img = document.getElementById("img-random");
    fetch(apiurl)
        .then((res) => {
            img.src = res.url;
        })
        .catch((error) => {
            console.error("Error fetching random image:", error);
        })
}


