import axios from "axios";
import { useState } from "react";
import Header from "../Header/Header";
import Create from "../Create/Create";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

const About = () => {
    const [repository, setRepository] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [reposPage] = useState(10)
    const [input, setInput] = useState('')
    const repos = input
    const getData = async (a, b) => {
        setLoading(true)
        const res = await axios.get(`https://api.github.com/search/repositories?q=${repos}&per_page=100`)
        setRepository(res.data.items)
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
                            .map(item => (

                                <li item={item}>
                                    <div className="content">
                                        <nav>
                                            <img src={item.owner.avatar_url} width='80px' height='40px' alt="" />
                                        </nav>
                                        <div className="desc">
                                            <a className="desc__title" target="_blanck">{item.full_name} </a>
                                            <p>{item.pushed_at} - last commit</p>
                                            <p className="desc__stars">{item.stargazers_count} <i className="fa-solid fa-star"></i></p>

                                            <a href={item.html_url} className="resp__title" target="_blank">перейти на репозиторий</a>
                                            <a >Details</a>
                                            <br />

                                        </div>

                                    </div>
                                    <div className="text">
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

    return (
        <>
            <Header></Header>
            
            <h1 className="page">Page-1</h1>
            <div className="container-2">
                <h1 id="start" className="content__title">Get a Repository</h1>
                <div className="wrapper">
                    <input className="seacrh-input" type="text" placeholder="RepositoryName" onChange={e =>getData( setInput(e.target.value))} />
                    <button className="get-btn" onClick={() => getData()}>Search</button>
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