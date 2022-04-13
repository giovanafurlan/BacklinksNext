import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Amazon
        </Text>
      </Flex>

      <Flex flexDir={'column'}>
        <Link m='1vw' onClick={() => router.push('/teste')}>Teste</Link>
        <Link m='1vw' onClick={() => router.push('/teste2')}>Teste 2</Link>
        <Link m='1vw' onClick={() => router.push('/teste3')}>Teste 3</Link>
        <Link m='1vw' onClick={() => router.push('/teste4')}>Teste 4</Link>
        <Link m='1vw' onClick={() => router.push('/teste5')}>Teste 5</Link>
        <Link m='1vw' onClick={() => router.push('/')}>* Bulk Search</Link>
        <Link m='1vw' onClick={() => router.push('/relatedKeywords')}>Related Keywords</Link>
        <Link m='1vw' onClick={() => router.push('/rankedKeywords')}>Ranked Keywords</Link>
        <Link m='1vw' onClick={() => router.push('/productRank')}>Product Rank</Link>
        <Link m='1vw' onClick={() => router.push('/productCompetitors')}>Product Competitors</Link>
        <Link m='1vw' onClick={() => router.push('/productKeyword')}>Product Keyword</Link>
      </Flex>

    </Box>
  );
};