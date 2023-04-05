import React from "react";
import Content from "../Content/Content";
const Resp = ({ repos, loading}) => {
    if (loading) {
        return <div className="loader"></div>
    }
    return (
        
            <ul>
               {repos.map(item => (
                <div className="content">
                    <nav>
                    <img src={item.owner.avatar_url} width='80px' height='40px' alt="" />
                    </nav>
                    <div className="desc">
                    <a className="desc__title" href={item.html_url} target="_blanck">{item.full_name} </a>
                    <p>{item.pushed_at} - last commit</p>
                    <p className="desc__stars">{item.stargazers_count} <i className="fa-solid fa-star"></i></p>
                    
                     <a href={item.html_url} className="resp__title"  target="_blank">перейти на репозиторий</a>
                     </div>
                </div>
        ))}
            </ul>
        
    )
}
export default Resp;