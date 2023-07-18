import { SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'

export const ChakraUIGrid = () => {
    return (
        <SimpleGrid bg={'green.500'} justifyContent={'center'} wrap={'wrap'} mt={'80px'}
            minChildWidth={'200px'} gap={'10px'} borderTop={'10px'} h={'100vh'} w={'100%'}>
            <Box as='aside' border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>



            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>


            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>

            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>


            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>


            <Box border={'2px'}>Grid</Box>
            <Box border={'2px'}>Grid</Box>


        </SimpleGrid>
    )
}
