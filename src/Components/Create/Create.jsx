import React from "react";
import { useState } from "react";
const Create =({repository, loading})=>{
    const [modal, setModal] = useState(false)
    const styles={
        display: modal ? 'block' : 'none',
        
    }
    if(loading){
        return <div className="loader"></div>
    }
    return(
        <>
        <ul>
            {
                
               repository
            //    .sort((a,b)=> b.stargazers_count > a.stargazers_count ? 1 : -1)
               .map(item =>(
                    
                    <li item={item}>
                        <div className="content">
                    <nav>
                    <img src={item.owner.avatar_url} width='80px' height='40px' alt="" />
                    </nav>
                    <div className="desc">
                    <a className="desc__title"  target="_blanck">{item.full_name} </a>
                    <p>{item.pushed_at} - last commit</p>
                    <p className="desc__stars">{item.stargazers_count} <i className="fa-solid fa-star"></i></p>
                    
                     <a href={item.html_url} className="resp__title"  target="_blank">перейти на репозиторий</a>
                     <a className="details" onClick={e => setModal(prev => !prev)}>Details</a>
                     <br />
                     
                     </div>
                  
                        </div>
                        <div style={styles} className="text">
                        <p>ID : {item.id}</p>
                        <p>lang : {item.language}</p>
                        <p>created_at : {item.created_at}</p> 
                        <p>updated_at : {item.updated_at}</p>
                        <p>default_branch : {item.default_branch}</p>
                       
                        </div>
                     
                
                
                    
                    </li>
                    
                ))
            }
        </ul>
        </>
    )
}
export default Create;