import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text
} from '@chakra-ui/react'
import React from 'react';
import SimpleSidebar from '../components/aside'

export default function RelatedKeywords() {

  const [post, setPost] = React.useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const post_array = [];

  const axios = require('axios');

  post_array.push({
    "keyword": "samsung watch",
    "language_name": "English",
    "location_code": 2840,
    "limit": 5,
    "include_seed_keyword": true
  });

  React.useEffect(() => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/related_keywords/live',
      auth: {
        username: 'giovananelofurlan@gmail.com',
        password: '60150d64f964be96'
      },
      data: post_array,
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      setPost(response['data']['tasks']);

      var result = response['data']['tasks'];
      console.log(result);

    }).catch(error => {
      console.log(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axios]);

  if (!post) return null;

  const dados = [
    {
      a: post.version
    },
  ];

  return (
    <>
      <SimpleSidebar>
        <Box m='1vw'>
          <Heading as="h1"
            fontWeight={600}
            fontSize="2xl"
            mb='1vw'>
            Related Keywords
          </Heading>
          <Flex flexDir={'column'}>
            <Box bg='white'
              border={'1px'}
              borderColor='gray.300'
              borderRadius={'lg'}
              p='1vw'>
              <Text fontWeight={600}>Keyword</Text>
              <Flex>
                <Input id='keyword' mb='1vw' />
                <Button w='10vw'
                  ml='1vw'>Buscar</Button>
              </Flex>
              <Box>
                {dados.map(dado => (
                  <Box key=''>
                    <Text>Version{dado.a}</Text>
                    <Text fontSize='lg'></Text>
                    <Text fontSize='lg'></Text>
                    <Text fontSize='lg'></Text>
                    <Text fontSize='lg'></Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </SimpleSidebar>
    </>
  )
}
