// import {
//   Box,
//   Flex,
//   Avatar,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
// } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import Link from 'next/link';


// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'flex-start'} gap={6}>
//           <Box>Logo</Box>

//             <Link href={"/people"}>
//             <Box>People</Box>
//             </Link>
//           {/* <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                   <Avatar
//                     size={'sm'}
//                     src={'https://avatars.dicebear.com/api/male/username.svg'}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={'https://avatars.dicebear.com/api/male/username.svg'}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex> */}
//         </Flex>
//       </Box>
//     </>
//   );
// }

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      display:"flex", gap:"20px"
    }}>

      <Link href={"/"}>
      <button >LOGO</button>
      </Link>
      <Link href={"/people"}>
      People
      </Link>
    </div>
  )
}

export default Navbar
