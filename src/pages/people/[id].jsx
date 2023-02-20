import ToCheck from '@/components/tocheck'
import { getPeople } from '@/utils/api'
import { Checkbox } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const SingleUser = ({data}) => {
  return (
    <div >
        {
            data.map((item)=>{
                return <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"10px"
                }} key={item.id}>
                        
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            {item.completed ? <ToCheck />:"Pending..."}
                           
                        </p>
                </div>
            })
        }
    </div>
  )
}

export default SingleUser

export const getStaticPaths=async()=>{
    const data=await getPeople()

    return {
        paths: data.map((prod)=>({params:{id:String(prod.id)}})),
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params?.id;
    const data=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((r)=>{
        return r.data
    }).catch((e)=>{
        console.log(e)
    })
    return {
        props:{data}
    }
}