import data from "../countries.json"

function Cards() {
    return (
        <>
        {data.map((country) => (
            <Card key= {country.unicode} {...country}/>
        ))}
        </>
    )
}


function Card(props) {
    return (
        <>
            <li className="list-item" onClick= {() => handleClick(props.code, props.emoji)}>{props.name} <span>{props.emoji}</span></li>
        </>
    )
}


function handleClick(code, emoji) {
    alert(`The code is ${code} and the emoji is ${emoji}`)
    
}


export default Cards;