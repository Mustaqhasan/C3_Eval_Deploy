import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Heading } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Box width="40%" margin="auto">
    <Heading>
    Welcome to the C4 evaluation for
RCT-201
    </Heading>
    </Box>
    </>
  )
}
