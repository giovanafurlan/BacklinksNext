import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Text
} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import SimpleSidebar from './components/aside'

export default function Home() {

  const [post, setPost] = React.useState([]);

  const post_array = [];

  post_array.push({
    "keywords": [
      "phone",
      "iphone",
      "samsung"
    ],
    "language_name": "English",
    "location_code": 2840
  });

  const axios = require('axios');

  useEffect(() => {

    const gerar = document.querySelector('#button-buscar');
    gerar.addEventListener('click', Gerar);

    function Gerar() {

      axios({
        method: 'post',
        url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/bulk_search_volume/live',
        auth: {
          username: 'rm88936',
          password: '60150d64f964be96'
        },
        data: {
          keywords: [
            document.querySelector('#keyword').value
          ],
          language_name: "English",
          location_code: 2840
        },
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
    }

  }, [axios]);

  if (!post) return null;

  const dados = [
    {
      version: post.version
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
            Bulk Search
          </Heading>
          <Flex flexDir={'column'}>
            <Box bg='white'
              border={'1px'}
              borderColor='gray.300'
              borderRadius={'lg'}
              p='1vw'>
              <Text fontWeight={500}
                mb='1vw'>Dados</Text>
              <FormControl mb='1vw'>
                <Flex>
                  <Input id='keyword' />
                  <Button id='button-buscar'
                    w='10vw'
                    ml='1vw'>Buscar</Button>
                </Flex>
                <FormHelperText>*número máximo de palavras-chave que você pode especificar nesta matriz: 1000;
                  dividias por vírgula;
                  cada palavra-chave deve ter pelo menos 3 caracteres;
                  as palavras-chave serão convertidas para o formato minúsculo</FormHelperText>
              </FormControl>
              <Box key=''>
                {dados.map(dado => (
                  <Text key='' fontSize='lg'>{dado.version}</Text>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </SimpleSidebar>
    </>
  )
}