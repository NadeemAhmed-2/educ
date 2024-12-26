
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.css"
export const Card = ({ card }) => {
    const nav = useNavigate();

    const handleClick = () => {
        if (card.CardName === "Languages") nav("/CardInner");
        else if (card.CardName === "Development") nav("/CardInnerDev");
        else if (card.CardName === "DSA") nav("/CardInnerDsa");
        else if (card.CardName === "Computer") nav("/CardInnerCs");
        else if (card.CardName === "Engineering") nav("/CardInnerEng");
        else if (card.CardName === "Aptitude") nav("/CardInnerapt");
    };

    return (
        <div onClick={handleClick} key={card.key} className="card card-my" style={{display:"flex",flexDirection:"column"}}>
            
            <img src={card.CardImage} className="card-img-top" alt={card.CardName} />
            <div className="card-body">
                <p className="card-text">{card.CardBody}</p>
            </div>

    
        </div>
    );
};
