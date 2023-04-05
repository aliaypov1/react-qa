import { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Resp from "../Resp/Resp";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
const Content = () => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    const searchName = input


    const getRepos = async () => {
        try{
        setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${searchName}/repos?per_page=100`)
        setRepos(res.data)
        setLoading(false)
        }catch(e){
            alert('пользователь не найден')
            setLoading(false)
        }
    }


    const lastReposIndex = currentpage * reposPage
    const firstReposIndex = lastReposIndex - reposPage
    const currentRepos = repos.slice(firstReposIndex, lastReposIndex)
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
                <Resp repos={currentRepos} loading={loading} />
                <br />
                <br />
                <Pagination
                    reposPage={reposPage}
                    totalRepos={repos.length}
                    paginate={paginate}
                />

            </div>
            <Footer></Footer>

        </>
    )
}
export default Content;