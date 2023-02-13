import "./Card.scss"
import { useState } from "react";
import { PokemonRequest } from "../../utility/PokemonRequest";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Card = ({id, name, image}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [description, setDescription] = useState({});
    const imageUrl = image + "/high.png";

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        requestDesc()
    }

    const requestDesc = () => {
        PokemonRequest(`https://api.tcgdex.net/v2/en/cards/${id}`).then((res) => {
            setDescription(res);
        })
    }


    const { rarity, hp, types, weaknesses, evolvesFrom } = description;

    return (
        <div 
        className="card-container"
        
        >
            {showDescription && (
                <div className="description-overlay">
                    <div className="description">
                
                        <h2>{name}</h2>
                        <p>ID: {id}</p>
                        <p>HP: {hp}</p>
                        <p>Types: {types}</p>
                        <p>Rarity:  {rarity}</p>
                        { evolvesFrom && <p>Evolve From: </p>}

                        { weaknesses && <p>Weaknesses: {weaknesses[0].type} | {weaknesses[0].value}</p>}
                        <div className="close">
                        <button onClick={toggleDescription}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                </div>

            </div>)}
            <div className={ showDescription ? "img active" : "img"}
            style={{backgroundImage: `url(${imageUrl})`}}
            onClick={toggleDescription}>
            </div>
        </div>
    )
}