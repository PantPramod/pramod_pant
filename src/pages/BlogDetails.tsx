import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import blogData from "../data/blogData"
import Prism from "prismjs";
import "../components/Code/CodeComponent.css"
import Markdown from 'react-markdown'

const BlogDetails = () => {
    const [result, setResult] = useState('')
    const { id } = useParams()

    const blogs = blogData.filter((blog) => blog.id === id)
    useEffect(() => {
        fetch(blogs[0].file).then((response) => response.text()).then((text: string) => {
            console.log(text)
            setResult(text)
            setTimeout(() => Prism.highlightAll(), 1000)
        })
    }, [])
    return (<div className="blog">
        <Markdown>{result}</Markdown>
    </div>
    )
}

export default BlogDetails
