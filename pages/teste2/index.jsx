import {
    Box,
    Text
} from '@chakra-ui/react'
import { 
    Area, 
    AreaChart, 
    CartesianGrid, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis } from 'recharts';
import React from 'react';
import SimpleSidebar from '../components/aside/index'

export default function Teste2() {

    const [post, setPost] = React.useState([]);

    const axios = require('axios');

    React.useEffect(() => {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
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
            x: post.title
        },
    ];

    console.log(dados);

    return (
        <>
            <SimpleSidebar>
                <Box>
                    <Text>Teste 2</Text>
                </Box>
                <Box>
                    {dados.map(dado => (
                        <Box key=''>
                            <Text>{dado.x}</Text>
                        </Box>
                    ))}
                </Box>
                <Box h='50vh'>
                    {/* <ResponsiveContainer width="100%" height="100%">
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
                    </ResponsiveContainer> */}
                </Box>
            </SimpleSidebar>
        </>
    )
}