import { useState,useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Resp from "../Resp/Resp";
import Pagination from "../Pagination/Pagination";
const Content = () =>{
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage,setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    const searchName = input
    
    useEffect(()=>{
        const getRepos = async()=>{
            setLoading(true)
            const res = await axios.get(`https://api.github.com/users/aliaypov1/repos`)
            setRepos(res.data)
            setLoading(false)
        }
        getRepos()
    },[])

    const lastReposIndex = currentpage * reposPage
    const firstReposIndex = lastReposIndex - reposPage
    const currentRepos = repos.slice(firstReposIndex, lastReposIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
   
   
    
    return(
        <>
        <Header></Header>
        <div className="container">
            <input type="text" onChange={e => setInput(e.target.value)} />
        <h1 className="content__title">Get a repository</h1>
        <Resp repos={currentRepos} loading={loading}/>
        <br />
        <br />
        <Pagination 
        reposPage={reposPage}
        totalRepos={repos.length}
        paginate={paginate}
        />
        
        </div>
        
        </>
    )
}
export default Content;