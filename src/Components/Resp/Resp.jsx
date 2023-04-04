import React from "react";
import Content from "../Content/Content";
const Resp = ({ repos, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        
            <ul>
               {repos.map(item => (
                <div className="content">
                    <img src={item.owner.avatar_url} width='80px' height='40px' alt="" />
                    <a className="resp__title" href="#">{item.full_name}</a>
                    <ul>
                        <a href={item.html_url} className="resp__title"  target="_blank">перейти на репозиторий</a>
                    </ul>
                </div>
        ))}
            </ul>
        
    )
}
export default Resp;