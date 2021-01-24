function Header() {
    return (
        <header className="header">
            <div className="container flex-between">
                <h1><a className="logo" href="">LOGO</a></h1>


                <nav class="nav">
                    <ul class="nav-menu flex">
                        <li class="nav-menu-item"><a href="#">Home</a></li>
                        <li class="nav-menu-item"><a href="#">About</a></li>                  
                        <li class="nav-menu-item"><a href="#">Contact</a></li>
                    </ul>
                </nav>
        
            </div>
            
        </header>
    )
}

export default Header;