import React from "react";
import style from './Card.module.css'



function Card() {
    const cardArray = new Array(6).fill(null);
    return (
        <div className={style["card__container"]}>
            {cardArray.map((_, index) => (
                <div className={style["card__box"]} key={index}>
                    <div className={style["card__title"]}>
                        <i className="fa-solid fa-book-bookmark"></i>
                        <h4>Project Title</h4>
                        <p>Public</p>
                    </div>
                    <div className={style["card__body"]}>
                        <p></p>
                        <p>Javascript</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;