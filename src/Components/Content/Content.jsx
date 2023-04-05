import { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Resp from "../Resp/Resp";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { json } from "react-router-dom";
const Content = () => {
    const [repository, setRepository] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    // const [data, setData]
    const searchName = input

    // const getData = async () => {
    //     const res = await axios.get('https://api.github.com/search/repositories?q=timer')
    //     console.log(res.data.items);
    // }

    // getData()

    const getRepos = async () => {
        try{
        setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${searchName}/repos?per_page=100`)
        setRepository(res.data)
        setLoading(false)
        }catch(e){
            alert('пользователь не найден')
            setLoading(false)
        }
    }


    const lastReposIndex = currentpage * reposPage
    const firstReposIndex = lastReposIndex - reposPage
    const currentRepos = repository.slice(firstReposIndex, lastReposIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)



    return (
        <>
            <Header></Header>
            <div className="container">
                
            <h1 id="start" className="content__title">Get a Repository</h1>
                <div className="wrapper">
                    <input className="seacrh-input" placeholder="owner" type="text" onChange={e => setInput(e.target.value)} />
                    <button className="get-btn" onClick={getRepos}>Search</button>
                </div>
                <Resp repository={currentRepos} loading={loading}/>
                <br />
                <br />
                <Pagination
                    reposPage={reposPage}
                    totalRepos={repository.length}
                    paginate={paginate}
                   
                />

            </div>
            <Footer></Footer>

        </>
    )
}
export default Content;