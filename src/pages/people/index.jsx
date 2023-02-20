import React from 'react'
import axios from "axios"
import PeopleCard from '@/components/peopleCard'
import { GetStaticProps } from 'next'
import { getPeople } from '@/utils/api'
import { Grid, GridItem } from '@chakra-ui/react'

const People = ({data}) => {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4, 1fr)",
        gap:"20px",
        alignItems:"center",
        justifyContent:"center",
        width:"80%",
        margin:"auto"

    }} >
      {
        data?.map((item=>{
            return <div  key={item.id}>

                <PeopleCard  {...item}/>
            </div> 
        //   return <div key={item.id}>
        //     <h1>{item.name}</h1>
        //     <p>{item.username}</p>
        //   </div>
        }))
      }
    </div>
  )
}

export default People

{/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid> */}

// export const getStaticProps=async()=>{

// }
export async function getStaticProps() {
  const data=await getPeople()
  .then((r)=>{
    return r
  }).catch((r)=>{
    console.log(r)
  })
  return {
    props: {data}, // will be passed to the page component as props
  }
}