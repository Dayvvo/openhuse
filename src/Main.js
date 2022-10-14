import React from 'react'
import { Box, Button, Flex, Img, Link, Text } from '@chakra-ui/react'

const Main = () => {
    return (
        <Flex
            justify={'center'} gap='40px' align='center' h={'100vh'}
            p={'30px 50px'} bgGradient='linear(to-r, #460865, #4C0E7D)'
        >
            <Box textAlign={'left'}>
                <Link 
                    className='pt-sans' fontSize={'1.5rem'} fontWeight='400' color='#fff' 
                    _hover={{ textDecor: 'none' }}
                >
                    opunhouse.com
                </Link>
                <Text 
                    className='roboto' mt='60px' mb='60px' fontSize={'4rem'} fontWeight='400'
                    color='#fff' textAlign={'left'} lineHeight='75px'
                >
                    A Web3 Community <br/> for Real Estate <br/> Investors
                </Text>
                <Link 
                    className='roboto' fontSize={'1.2rem'} fontWeight='400' color={'#292D30'} target='_blank'
                    bgColor={'#B1D4E5'} borderRadius='9px' p={'12px 15px'} _hover={{ bgColor: 'none' }}
                    href='https://docs.google.com/forms/d/16QZiqesiw0-CVDlmN9zlED8fbKMET5cr278Coohxd6U/edit?ts=633cc2f7'
                >
                    Join the Waitlist
                </Link>
                <Text mt='30px' color='#fff' fontSize={'1.25rem'}>Coming 2023</Text>
            </Box>
            <Box>
                <Img src='/hero-img.svg' w={'400px'} />
            </Box>
        </Flex>
    )
}

export default Main