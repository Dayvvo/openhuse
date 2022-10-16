import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Woke = () => {
    return (
        <Flex flexDir={'column'}
            bgColor={{ base: '#4C0E7D', lg: 'none' }} h={{ base: '100%', lg: '100vh' }}
            p={{ base:'50px 90px', lg: '50px 150px' }} 
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
                    className='roboto' mt='40px' mb='40px' fontSize={{ base: '1.125rem', lg: '4rem' }} 
                    fontWeight='400' color='#fff' textAlign={{ base: 'center', lg: 'left' }}
                    lineHeight={{ base: '21.09px', lg: '75px' }}
                >
                    A Web3 Community for Real Estate Investors
                </Text>
                <Box>
                    <Img src='/hero-img.svg' w={'800px'} />
                </Box>
            </Flex>
            <Flex 
                flexDir={'column'} m={{ base: '20px auto', lg: '-80px 0' }}
                align={{ base: 'center', lg: 'flex-start' }} gap='20px'
            >
                <Link 
                    className='roboto' fontSize={{ base:'.875rem', lg: '1.35rem' }} fontWeight='400' color={'#292D30'} 
                    bgColor={'#B1D4E5'} borderRadius='9px' p={{ base: '10px 30px', lg: '12px 10px' }}
                    w={{ base: '100%', lg: '20%'}} mt='30px' target='_blank' _hover={{ textDecor: 'none' }}
                    href='https://docs.google.com/forms/d/16QZiqesiw0-CVDlmN9zlED8fbKMET5cr278Coohxd6U/edit?ts=633cc2f7'
                >
                    Join the Waitlist
                </Link>
                <Text color='#fff' fontSize={{ base:'.875rem', lg: '1.25rem' }}>Coming 2023</Text>
            </Flex>
        </Flex>
    )
}

export default Woke