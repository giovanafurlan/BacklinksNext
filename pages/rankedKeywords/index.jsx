import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import SimpleSidebar from '../components/aside'

export default function RankedKeywords() {
  return (
    <>
      <SimpleSidebar>
        <Box m='1vw'>
          <Heading as="h1"
            fontWeight={600}
            fontSize="2xl"
            mb='1vw'>
            Ranked Keywords
          </Heading>
          <Flex flexDir={'column'}>
            <Box bg='white'
              border={'1px'}
              borderColor='gray.300'
              borderRadius={'lg'}
              p='1vw'>
              <Text fontWeight={500}
                mb='1vw'>Dados</Text>
              <Text fontSize='lg'></Text>
              <Text fontSize='lg'></Text>
              <Text fontSize='lg'></Text>
              <Text fontSize='lg'></Text>
              <Text fontSize='lg'></Text>
            </Box>
          </Flex>
        </Box>
      </SimpleSidebar>
    </>
  )
}
