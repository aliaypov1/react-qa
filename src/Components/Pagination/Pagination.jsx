import React from "react";

const Pagination =({reposPage , totalRepos, paginate})=>{
    const pageNumber = []
    for(let i = 1;i < Math.ceil(totalRepos / reposPage); i++){
        pageNumber.push(i)
    }
    return(
        <>
        <ul className="pagination">
            {
                pageNumber.map(number =>(
                    <li key={number}>
                        <a  className="pagination__button" onClick={e => paginate(number)}>{number}</a>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
export default Pagination;