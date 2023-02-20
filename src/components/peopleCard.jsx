import React from "react";

import { Card, CardHeader, CardBody, CardFooter,Stack ,Heading,Text ,Divider, ButtonGroup,Button} from '@chakra-ui/react'
import Image from "next/image";
import { useRouter } from "next/router";
const PeopleCard = ({id,name,username}) => {
  const router=useRouter()
  const handleClick=()=>{
    router.push(`/people/${id}`)
  }
  return (
    <Card maxW="sm">
      <CardBody >
        
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          {/* <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text> */}
          <Text color="blue.600" fontSize="2xl">
            {username}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={handleClick}>
            Get Todos
          </Button>
         
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PeopleCard;
