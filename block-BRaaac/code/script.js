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
    renderMovieName(allMovies);
}

// type : name of element
function elm(type, attr= {}, ...children) {
    let element = document.createElement(type);
    for(let key in attr) {
        if(key.startsWith('data-')) {
            element.setAttribute(key, attr[key])
        }else {
            element[key] = attr[key]
        }
    }
    console.log(children)
    return element;
}

// render movies
function renderMovieName(allMovies) {
    root.innerText = "";
    allMovies.forEach((movie, index) => {

        // create div
        let div = elm("div", {
            className: "movies flex-between",
            innerText: movie.name.charAt(0).toUpperCase() + movie.name.slice(1)
        } 
        );

        let subDiv = elm(
            "div",
            {}, 
            elm("button", {
                "data-id": index,
                innerText: movie.status ? "Watched" : "To watch"
            }),
            elm('i', {
                classList: "fas fa-times",
                "data-id": index
            })
        );
        // let button = elm("button", {
        //     "data-id": index,
        //     innerText: movie.status ? "Watched" : "To watch"
        // });
        // let deleteMovie = elm('i', {
        //     classList: "fas fa-times",
        //     "data-id": index
        // });

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