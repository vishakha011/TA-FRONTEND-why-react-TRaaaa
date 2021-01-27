import data from "../users.json"
let fruitsEmoji = {
    "strawberry": "🍓",
    "banana": "🍌",
    "apple": "🍎"
  }


function Cards() {
    return (
        <>
        <div>
            {data.map((user) => (
                <Card key= {user.id} {...user}/>
            ))}
        </div>
        
        </>
    )
}


function Card(props) {
    return (
        <>
        <article className="flex article" id= "display">
            <section className="left-section">
                <span className="level">Level 13</span>
                <div className="img">
                    <img className="userimg" src={props.picture} alt="user"></img>
                </div>
                <span className="balance">{props.balance} ponts</span>
            </section>
            <section className="right-section" id={props.isActive ? "active-bg" : "inactive-bg"}>
                <div className="user-info">
                    <h1 className="user-name">{props.name}<span className="gender-emoji">{props.gender === "male" ? "🙋‍♂️" : "🤷‍♀️"} </span></h1>          
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text book.</p>
                    <div className="personal-info grid">
                        <span>Company: {props.company}</span>
                        <span>Email: {props.email}</span>
                        <span>Gender: {props.gender}</span>
                        <span>Age: {props.age}</span>
                        <span>Eye-Color: {props.eyeColor}</span>
                        <span>Phone: {props.phone}</span>
                    </div> 
                    <div className="fav-fruit">Favourite Fruit: {fruitsEmoji[props.favoriteFruit]}</div> 
                </div>
            </section>
        </article>

        {/* mouse move card */}
        {/* <article className="flex article">
            <section className="left-section">
                <span className="level">Level 13</span>
                <div className="img">
                    <img className="userimg" src={props.picture} alt="user"></img>
                </div>
                <span className="balance">{props.balance} ponts</span>
            </section>
            <section className="right-section" id={props.isActive ? "active-bg" : "inactive-bg"}>
                <div className="user-info">
                    <h1 className="user-name">{props.name}</h1>
                    <div className="personal-info grid">
                        <span>Company: {props.company}</span>
                        <span>Email: {props.email}</span>
                        <span>Gender: {props.gender}</span>
                        <span>Age: {props.age}</span>
                        <span>Eye-Color: {props.eyeColor}</span>
                        <span>Phone: {props.phone}</span>

                    </div>  
                </div>
            </section>
        </article> */}
        </>
    )
}


export default Cards;