import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Woke = ({className}) => {
    return (
        <Flex className={className} flexDir={'column'}
            bgColor={{ base: '#4C0E7D', lg: 'none' }} h={{ base: '100vh', lg: '100vh' }}
            p={{ base:'50px 20px', lg: '50px 150px' }} 
            bgGradient={{ base: 'none', lg: 'linear(to-r, #460865, #4C0E7D)' }}
        >
            <Box m={{ base: '0 auto', lg: '0 0' }}>
                <Img src='/opunhouse-logo.svg' />
            </Box>
            <Flex
                flexDir={{ base: 'column', lg: 'row' }} justify={'center'} gap={{ base: '20px', lg: '40px' }}
                align={{ base: 'center', lg: 'start' }} mt='15px'
            >
                <Text 
                    className='roboto headerr' mt={{base:'2.5em',lg:'40px'}} mb='40px' fontSize={{ base: '1.125rem', lg: '4rem' }} 
                    fontWeight='400' color='#fff' textAlign={{ base: 'center', lg: 'left' }}
                    lineHeight={{ base: '21.09px', lg: '75px' }}
                    
                >
                    A Web3 Community for Real Estate Investors
                </Text>
                <Box mt={{base:'2em',md:'initial'}}>
                    <Img transform={{base:'scale(1.3)',md:'scale(1.1)'}} src='/hero-img.svg' w={'800px'} />
                </Box>
            </Flex>
            <Flex 
                flexDir={'column'} m={{base:'3em 0', lg: '-80px 0' }}
                align={{ base: 'center', lg: 'flex-start' }} gap='20px'
                className='child'
            >
                <Link 
                    className='roboto' fontSize={{ base:'.875rem', lg: '1.35rem' }} fontWeight='400' color={'#292D30'} 
                    bgColor={'#B1D4E5'} borderRadius='9px' p={{ base: '10px 1em', lg: '12px 10px' }}
                    w={{ base: '80%', lg: '20%'}} mt={{base:'3em',lg:'20px'}} target='_blank' _hover={{ textDecor: 'none' }}
                    href='https://docs.google.com/forms/d/16QZiqesiw0-CVDlmN9zlED8fbKMET5cr278Coohxd6U/edit?ts=633cc2f7'
                >
                    Join the Waitlist
                </Link>
                <Text color='#fff' fontSize={{ base:'.875rem', lg: '1.25rem' }}>Coming 2023</Text>
            </Flex>
        </Flex>
    )
}

export default styled(Woke)`
    
    .child{
        @media(max-height:820px) and (max-width:500px) {
            margin-top:auto !important;
            margin-bottom:1em !important;
        }
    }
    .headerr{
        @media(max-height:750px){
            margin-top:1.1em !important;
            margin-bottom:1.1em !important;
        }
    }
    img{

        @media(max-width:900px){
            width:500px;
        }

        @media(max-width:600px){
            width:300px;
        }

        @media(max-width:400px){
            transform:scale(1);
            
        }

        @media(max-width:420px){
            transform:scale(1.1);
        }



    }

`