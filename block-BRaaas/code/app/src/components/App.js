let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

function App() {
    return (
        <>
        <div className="container">
            <button onClick ={alerttext}>Click Me</button>
            <hr />
            <button onClick ={alerttextOptions}>How can I help you?</button>
            <hr />
            <button onClick={handleEvent}>Arya</button>
            <button onClick={handleEvent}>John</button>
            <button onClick={handleEvent}>Bran</button>
        </div>

        <div className="container">
            <button onClick={Button}>Arya</button>
            <button onClick={Button}>John</button>
            <button onClick={Button}>Bran</button>
        </div>

        <div className="container">
            {
                fruits.map(fruit => {
                    return <button onClick={() => fruitHandler(fruit)}>{fruit.id}</button>                 
                })
            }
        </div>

        
        </>
    )
}

function alerttext() {
    alert("Hello React Event")
}

function alerttextOptions() {
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX");
};

function handleEvent(event) {
    let name = event.target.innerText;
    alert(`Hello ${name}`)
}


function Button(props) {
    return (
        alert(`Hello ${props.target.innerText}`)
    )
}


function fruitHandler(fruit) {
    console.log(fruit)
    alert(fruit.value)
}

export default App;