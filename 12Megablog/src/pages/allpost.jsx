import React,{useState,useEffect} from 'react'
import {Container,Post,PostCard} from '../components'
import appwriteService from "../appwrite/config"
function allpost() {
    const [posts,setPosts] = useState([])
    useEffect(()=> {},[])
    appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })


  return (
    <div className='w-full py-8 '>
        <Container>
            {/* {posts.map((post) =>(
                <PostCard key = {post.$id} post = {post} />
            ))} */}
            <div className='flex flex-wrap'>
                {posts.map((post)=>{
                    <div className='flex flex-wrap'>
                        {posts.map((post) => {
                            <div key = {post.$id} className='p-2 w-1/4'>
                                <PostCard post = {post} />
                                </div>
                        })}

                    </div>
                })}
                

                
            </div>
            </Container>
            </div>
  )
}

export default allpost