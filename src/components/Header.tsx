export const Header = () => {
    return <header>
        <Logo />
        <Navigation />
        <ContactMe />
    </header>
}

const Logo = () => {
    return <div className="logo">
        <h1>Portfolio</h1>
    </div>
}

const Navigation = () => {
    return <nav>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projects</a>
    </nav>
}

const ContactMe = () => {
    return <div className="contact">
        <button>Contact</button>
    </div>
}