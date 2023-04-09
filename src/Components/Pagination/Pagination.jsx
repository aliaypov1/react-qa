import React from "react";
import { useState } from "react";
const Pagination = ({ reposPage, totalRepos, paginate }) => {
    const pageNumber = []
    for (let i = 1; i < Math.ceil(totalRepos / reposPage); i++) {
        pageNumber.push(i)
    }
    const [colored, setColored] = useState(false)
    const styles = {
        background: colored ? 'black' : 'blue'
    }
    return (
        <>
            <ul className="pagination">
                {
                    pageNumber.map(number => (
                        <li key={number}>
                            <a style={styles} href="#start" className="pagination__button" onClick={e => paginate(number) & setColored(prev => !prev)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Pagination;