// import App from "./components/App"
import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Article";
import Footer from "./Footer";




function App(props) {
    return (
    <>
        <Header />
        <main>  
            <Hero />
            <section className="article-section container">
                <h2 className="article-section-heading">Articles</h2>
                <Articles />
            </section>
        </main>
        <Footer />
        
    </>

    )
}







export default App;