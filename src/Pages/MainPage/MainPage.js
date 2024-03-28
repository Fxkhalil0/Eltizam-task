import React, { useState, useEffect } from "react";
import style from './MainPage.module.css'
import Logo from '../../assets/pngimg.com - github_PNG40.png'
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const uri = process.env.REACT_APP_URI


function MainPage() {
    const [userData, setUserData] = useState(null);
    const [activeItem, setActiveItem] = useState("Overview");
    const { userName } = useParams();
    // console.log(userName)

    useEffect(() => {
        axios.get(`${uri}/users/${userName}`)
            .then((response) => {
                // console.log(response.data);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    return (
        <>
            <nav>
                <div className={style["first__part"]}>
                    <div className={style["left__side"]}>
                        <i class="fa-solid fa-bars"></i>
                        <img src={Logo} alt="logo" />
                        <p>{userData?.name}</p>
                    </div>
                    <div className={style["right__side"]}>
                        <div className={style["search__input"]}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input placeholder="Type / to search" />
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className={style["icons"]}>
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <div className={style["third__icons"]}>
                            <i class="fa-regular fa-circle-dot"></i>
                            <i class="fa-solid fa-code-pull-request"></i>
                            <i class="fa-solid fa-inbox"></i>
                            <img src={userData?.avatar_url} alt="user's avatar" />
                        </div>
                    </div>
                </div>
                <div className={style["second__part"]}>
                    <ul>
                        <li onClick={() => handleItemClick("Overview")} className={activeItem === "Overview" ? style["active"] : ""}><i className="fa-solid fa-book-open"></i> Overview</li>
                        <li onClick={() => handleItemClick("Repositories")} className={activeItem === "Repositories" ? style["active"] : ""}><i className="fa-solid fa-book-bookmark"></i> Repositories <span>{userData?.public_repos}</span></li>
                        <li onClick={() => handleItemClick("Projects")} className={activeItem === "Projects" ? style["active"] : ""}><i className="fa-regular fa-square"></i> Projects</li>
                        <li onClick={() => handleItemClick("Packages")} className={activeItem === "Packages" ? style["active"] : ""}><i className="fa-solid fa-cube"></i> Packages</li>
                        <li onClick={() => handleItemClick("Stars")} className={activeItem === "Stars" ? style["active"] : ""}><i className="fa-regular fa-star"></i> Stars</li>
                    </ul>
                </div>
            </nav>
            <div className={style["body__section"]}>
                <div className={style["container"]}>
                    <div className={style["body__content"]}>
                        <div className={style["left__div"]}>
                            <img src={userData?.avatar_url} alt="user's avatar" />
                            <div className={style["user__info"]}>
                                <h1>{userData?.name}</h1>
                                <small>{userData?.login}</small>
                                <p>{userData?.bio}</p>
                                <button>Edit Profile</button>
                                <div className={style["followers"]}>
                                    <i class="fa-solid fa-user-group"></i>
                                    <p><span>{userData?.following}</span> Following . <span>{userData?.followers}</span> Followers</p>
                                </div>
                                <p><i class="fa-solid fa-location-dot"></i> Location: {userData?.location}</p>
                                <p><i class="fa-solid fa-id-card"></i> Github ID: {userData?.id}</p>
                                <p><i class="fa-solid fa-code-branch"> </i>Public Repositories: {userData?.public_repos}</p>
                            </div>
                        </div>
                        <div className={style["right__div"]}>
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;