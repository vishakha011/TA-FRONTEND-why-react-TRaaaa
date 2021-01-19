let root = document.querySelector(".movie-container");
let input = document.querySelector("input");

let allMovies = JSON.parse(localStorage.getItem("movies")) || [];

// get the data
function handleKey(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "") {
        let movie = {
            name : value,
            status : "Watched"
        };
        allMovies.push(movie);
        console.log(allMovies)
        input.value = "";
    };
    localStorage.setItem("movies", JSON.stringify(allMovies));
    renderMovieName(allMovies);
};

// handel delete
function handleDelete(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    localStorage.setItem('movies', JSON.stringify(allMovies));
    renderMovieName(allMovies);
}

// toggle status
function handleToggle(event) {
    console.log(event.target)
    let id = event.target.dataset.id;
    allMovies[id].status = !allMovies[id].status;
    localStorage.setItem('movies', JSON.stringify(allMovies));
    // if(allMovies[id].status = !allMovies[id].status) {
    //     event.target.innerText = "Watched";
    // }else {
    //     event.target.innerText = "To Watch";
    // }
    renderMovieName(allMovies);
}

// render movies
function renderMovieName(allMovies) {
    root.innerText = "";
    allMovies.forEach((movie, index) => {

        // create div
        let div = document.createElement("div");
        div.classList.add("movies", "flex-between");
        div.innerText = movie.name.charAt(0).toUpperCase() + movie.name.slice(1);

        let subDiv = document.createElement("div");
        let button = document.createElement("button");
        button.setAttribute("data-id", index)
        button.innerText = movie.status ? "Watched" : "To watch";

        let deleteMovie = document.createElement('i');
        deleteMovie.classList.add('fas', "fa-times")
        deleteMovie.setAttribute('data-id', index);

        subDiv.append(button, deleteMovie)
        div.append(subDiv);
        root.append(div);

        deleteMovie.addEventListener("click", handleDelete);
        button.addEventListener("click", handleToggle)
    });
};

renderMovieName(allMovies)

localStorage.setItem("movies", JSON.stringify(allMovies));
input.addEventListener("keyup", handleKey);