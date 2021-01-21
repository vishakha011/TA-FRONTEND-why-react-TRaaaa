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
        // console.log(allMovies)
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
    // console.log(event.target)
    let id = event.target.dataset.id;
    allMovies[id].status = !allMovies[id].status;
    localStorage.setItem('movies', JSON.stringify(allMovies));
    renderMovieName(allMovies);
}

// type : name of element
// function elm(type, attr = {}, ...children) {
//     let element = document.createElement(type);
//     for(let key in attr) {
//         if(key.startsWith('data-')) {
//             element.setAttribute(key, attr[key])
//         }else {
//             element[key] = attr[key]
//         }
//     }
//     // console.log(children)
//     children.forEach(child => {
//         if(typeof child === "object") {
//             element.append(child)
//         }
//         if(typeof child === "string") {
//             // cannot append a string, but can append an object
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     })
//     return element;
// }

// render movies
function renderMovieName(allMovies) {
    // root.innerText = "";
    let movieUI = allMovies.map((movie, index) => {

        // create div
        let div = React.createElement(
            "div", 
            {
                className: "movies flex-between"
            }, 
            movie.name.charAt(0).toUpperCase() + movie.name.slice(1),

            React.createElement(
                "div",
                {}, 
                React.createElement(
                    "button", 
                    {
                        "data-id": index
                    }, 
                    movie.status ? "Watched" : "To watch"),
                    React.createElement(
                        'i', 
                        {
                            className: "fas fa-times",
                            "data-id": index
                        })
            )
        );
        // root.append(div);
        return div;

    });
    ReactDOM.render(movieUI, root);
};

let div = document.querySelector("div")
div.addEventListener("click", (e) => {
    // console.log(e.target.tagName)
     if (e.target.tagName == "BUTTON") {
        handleToggle(e);
    }
    if (e.target.tagName == "I") {
        handleDelete(e);
    }
});

renderMovieName(allMovies)

localStorage.setItem("movies", JSON.stringify(allMovies));
input.addEventListener("keyup", handleKey);