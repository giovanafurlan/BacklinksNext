import {
  Box,
  Text
} from '@chakra-ui/react'
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SimpleSidebar from '../components/aside/index'

export default function Teste() {

  const [post, setPost] = React.useState([]);

  const axios = require('axios');

  React.useEffect(() => {
    axios({
      method: 'get',
      url: 'https://catfact.ninja/fact',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      setPost(response['data'])

      var result = response['data'];
      console.log(result);

    }).catch(error => {
      console.log(error);
    });
  }, [axios]);

  if (!post) return null;

  const dados = [
    {
      x: post.fact
    },
  ];

  const data = [
    {
      name: post.fact,
      uv: post.length,
    },
    {
      name: post.fact,
      uv: post.length,
    },
  ]

  console.log(dados);

  return (
    <>
      <SimpleSidebar>
        <Box>
          <Text>Teste</Text>
        </Box>
        <Box>
          {dados.map(dado => (
            <Text key=''>{dado.x}</Text>
          ))}
        </Box>
        <Box h='50vh'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </SimpleSidebar>
    </>
  )
}