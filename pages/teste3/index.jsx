import {
    Box,
    Button,
    Flex,
    Input,
    Text
} from '@chakra-ui/react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import React, { useEffect, useState } from 'react';
import SimpleSidebar from '../components/aside/index'
import { render } from 'react-dom';

export default function Teste3() {

    const axios = require('axios');

    const [post, setPost] = useState(0);

    useEffect(() => {

        const gerar = document.querySelector('#button-buscar');
        gerar.addEventListener('click', Gerar);

        function Gerar() {

            axios({
                method: 'get',
                url: 'https://api.agify.io/?name=' + document.querySelector("#busca").value,
                // data: {
                //     title: 'foo',
                //     body: 'bar',
                //     userId: document.querySelector("#busca").value,
                // },
            }).then(response => {
                setPost(response['data'])

                var result = response['data'];
                console.log(result);

            }).catch(error => {
                console.log(error);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (!post) return null;

            console.log(dados);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [axios]);
        
        const dados = [
            {
            x: post.age,
            y: post.count
        },
        {
            x: post.body
        },
    ];

    const data = [
        {
            name: post.age,
            uv: post.count
        },
    ];

    return (
        <>
            <SimpleSidebar>
                <Box>
                    <Text>Teste 3</Text>
                </Box>
                <Box>
                    <Flex>
                        <Input id='busca' />
                        <Button id='button-buscar'
                            w='10vw'
                            ml='1vw'>Buscar</Button>
                    </Flex>
                    <Box>
                        {dados.map(dado => (
                            <Box key={dado.x}>
                                <Text>{dado.x}</Text>
                                <Text>{dado.y}</Text>
                            </Box>
                        ))}
                    </Box>
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