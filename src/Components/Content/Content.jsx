import { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Resp from "../Resp/Resp";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
const Content = () => {
    const [repository, setRepository] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    const searchName = input

   
    useEffect(()=>{
        if(input !== ''){
            setLoading(true)
            getRepos()
            setLoading(false)
        }else{
            setInput([])
        }
    },[input])
    const getRepos = async () => {
            
            setLoading(true)
            const res = await axios.get(`https://api.github.com/users/${searchName}/repos?per_page=100`)
            setRepository(res.data)
            setLoading(false)
            
       
        
    }
    
 


    const lastReposIndex = currentpage * reposPage
    const firstReposIndex = lastReposIndex - reposPage
    const currentRepos = repository.slice(firstReposIndex, lastReposIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const sort = () => {

        return (

            <>
                <ul>
                    {


                        repository
                            .sort((a, b) => b.stargazers_count > a.stargazers_count ? 1 : -1)
                            
                            
                    }
                </ul>
            </>
        )

    }

    return (
        <>
            <Header></Header>
            <h1 className="page">Page-2</h1>
            
            <div className="container-2">
                {repository.map(item => (
                    <img className="img" src={item.owner.avatar_url} width='180px' alt="" />
                ))}
                <h1 id="start" className="content__title">Get a User Repository</h1>
                <div className="wrapper">
                    <input className="seacrh-input" placeholder="userName" type="text" onChange={e => setInput(e.target.value)} />
                    {/* <button className="get-btn" onClick={getRepos}>Search</button> */}
                    <button className="get-btn" onClick={() => {
                        setLoading(true)
                        sort()
                        setTimeout(() => { setLoading(false) }, 1000)
                    }}>sort <i className="fa-solid fa-star"></i></button>
                </div>
                <Resp repository={currentRepos} loading={loading} />
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

            <Footer></Footer>

        </>
    )
}
export default Content;