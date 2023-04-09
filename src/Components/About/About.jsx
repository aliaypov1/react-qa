import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Create from "../Create/Create";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

const About = () => {
    const [repository, setRepository] = useState([])
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    const repos = input
   
useEffect(()=>{
    if(input === ''){
        const getTopRepos = async() =>{
            const res = await axios.get('https://api.github.com/search/repositories?q=react&sort=stars&per_page=10')
            setRepository(res.data.items)
        }
        getTopRepos()
    }else{
        const getData = async (a, b) => {
       
            setLoading(true)
            const res = await axios.get(`https://api.github.com/search/repositories?q=${repos}&per_page=100`,{
                headers:{
                    'Accept': 'application/vnd.github.text-match+json',
                    
                }
            }
               
            )
            setRepository(res.data.items)
            setLoading(false)
        }
        getData()
    }
},[input])

    const API_TOKEN = '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'
    localStorage.setItem('KEYS',API_TOKEN)
    const token = localStorage.getItem('KEYS')
  
    useEffect(()=>{
        if(input === ''){
            setLoading(true)
            
            setLoading(false)
            
        }

    },[input])
    

    const lastReposIndex = currentpage * reposPage
    const firstReposIndex = lastReposIndex - reposPage
    const currentRepos = repository.slice(firstReposIndex, lastReposIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const sort = () => {
        return (
           <>
                    {

                        repository
                            .sort((a, b) => b.stargazers_count > a.stargazers_count ? 1 : -1)
                           



                                

                            
                    }
             </>
        )
    }

    return (
        <>
            <Header></Header>
            
            <h1 className="page">Page-1</h1>
            <div className="container-2">
                <h1 id="start" className="content__title">Get a Repository</h1>
                <div className="wrapper">
                    <input className="seacrh-input"  type="text" placeholder="RepositoryName" onChange={e =>  setInput(e.target.value)} />
                    {/* <button className="get-btn" onClick={() => getData()}>Search</button> */}
                    <button className="get-btn" onClick={() => {
                        setLoading(true)
                        sort()
                        setTimeout(() => { setLoading(false) }, 1000)


                    }}>Sort <i className="fa-solid fa-star"></i></button>
                </div>
                
                <Create repository={currentRepos} loading={loading} />
                

                <br />
                <br />
                <Pagination
                    reposPage={reposPage}
                    totalRepos={repository.length}
                    paginate={paginate}

                />
            </div>
            <div className="container">
                <h2 className="content__text">Для поиска нужного элемента можно использовать REST API. Например, можно найти пользователя или определенный файл в репозитории. Это похоже на поиск в Google. API поиска предназначен для поиска одного результата, который вы ищете (или, возможно, несколько результатов). <br /> <br /> Так же, как при поиске в Google, иногда требуется просмотреть несколько страниц результатов поиска, чтобы найти элемент, который лучше всего соответствует вашим требованиям. Для удовлетворения этой потребности REST API GitHub предоставляет до 1000 результатов для каждого поиска.
                    Поиск можно сузить с помощью запросов. Дополнительные сведения о синтаксисе поискового запроса см. в разделе</h2>
            </div>
            <Footer />
        </>
    )
}
export default About;