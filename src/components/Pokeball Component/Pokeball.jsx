import "./Pokeball.scss"
export const Pokeball = () => {
    const OpenUrl = () => {
        window.open("https://github.com/xstiff");
    }
    return (
        <img onClick={OpenUrl} alt="Pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" className="pokeball" />
    )
}

