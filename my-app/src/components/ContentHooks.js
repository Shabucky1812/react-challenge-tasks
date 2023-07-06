import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedPosts, setFetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setFetchedPosts(savedPosts)
        }, 2000)
    }, [])

    const handleSearch = (event) => {
        let name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post) => post.name.toLowerCase().includes(name))
        setFetchedPosts(filteredPosts)
    }

    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchInput">Search:</label>
                    <input type="text" placeholder="By Author" id="searchInput" onChange={handleSearch} />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (<PostItem savedPosts={fetchedPosts} />) : (<Loader />)}
            </div>
        </div>
    )
}

export default ContentHooks