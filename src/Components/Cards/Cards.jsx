import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Cards = () => {
    const key = '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'
    localStorage.setItem('token', key)
    const token = localStorage.getItem('token')
    const [details, setDetails] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.github.com/repositories/${id}`)
            const data = await res.data
            setDetails(data)
        }
        getData()
    }, [id])


    return (
        <>
            <Link to='/' className="exit"><i className="fa-solid fa-arrow-left"></i></Link>
            {
                details && (
                    <div className="cards__content">
                        <div className="cards">
                            <img src={details.owner.avatar_url} alt="" />
                            <ul className="cards__text">
                                <a href={details.html_url} className="cards__sm-text" target="_blanck">{details.full_name}</a>
                                <li><a className="cards__sm-text">last-commit :</a> {details.updated_at}</li>
                                <li><a className="cards__sm-text">language :</a> {details.language}</li>
                                <li><i className="fa-solid fa-star"></i> {details.stargazers_count}</li>
                                <li><a className="cards__sm-text">description :</a> {details.description}</li>
                            </ul>
                        </div>

                    </div>
                )
            }
        </>
    )
}
export default Cards