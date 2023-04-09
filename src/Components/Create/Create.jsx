import React from "react";
import { NavLink, Link } from "react-router-dom"
import { useState } from "react";


const Create = ({ repository, loading }) => {
    if (loading) {
        return <div className="loader"></div>
    }

    return (
        <>
            <ul>
                {

                    repository.map(item => (

                        <li key={item.id}>
                            <div className="content">
                                <nav>
                                    <img src={item.owner.avatar_url} width='80px' height='40px' alt="" />
                                </nav>
                                <div className="desc">
                                    <a className="desc__title" target="_blanck">{item.full_name} </a>
                                    <p>{item.pushed_at} - last commit</p>
                                    <p className="desc__stars">{item.stargazers_count} <i className="fa-solid fa-star"></i></p>

                                    <a href={item.html_url} className="resp__title" target="_blank">перейти на репозиторий</a>
                                    <Link to={`repository/${item.name}/${item.id}`} className="details">Details</Link>
                                    <br />
                                </div>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </>
    )

}
export default Create;