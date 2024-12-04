import React, {useEffect,useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container,PostCard } from '../components'

function Home() {
 const [post,setPosts] = useState([])

 useEffect(() => {},[])
 appwriteService.getPosts([]).then((post) => {
    if(post) {
        setPosts(post.documents)
    }
 })
 if (post.length === 0) {
    return (
        <div>
            <Container>
                
            </Container>
        </div>
    )
    
 }
}

export default Home