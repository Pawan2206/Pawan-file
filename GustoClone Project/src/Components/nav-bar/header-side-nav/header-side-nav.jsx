import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import './header-side-nav.css';
import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  IconButton,
  Box
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'


import {
  Popover,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { NAV_ITEMS } from '../../../interface/navList';
import {
  Text,
  Icon,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';


export default function HeaderSideNavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')

  return (
    <>
      <div className="container padding-top-none padding-bottom-none margin-top">
        <div className="row menu-bar no-gutters width-100 align-items-center">
          <Box>
            <Flex>
              <Flex
                top="1rem"
                right="1rem"
                align="center"
              >
                <Flex
                  display={['none', 'none', 'flex', 'flex']}
                >
                  <Link href="/" mr={6}>
                    <img
                      className="gusto-logo"
                      title="Online Payroll Services, HR, and Benefits | Gusto"
                      alt="Online Payroll Services, HR, and Benefits | Gusto"
                      src="https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg"
                    ></img>
                  </Link>
                  <Desktop />
                  <Link mr={0} fontSize="2xl" color='#0a8080' ml={50} href="https://play.chakra-ui.com">

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z" />
                    </svg>

                    <span>See Demo</span>
                  </Link>


                  <ButtonGroup gap='12px'>
                    <Button colorScheme='red'
                      size='6xl'
                      height='47px'
                      width='140px'
                      borderColor='#f8f5f2'
                      p={[12, 0]}
                      borderRadius='5px'
                      textAlign='center'> How its works</Button>
                    <Button
                      size='6xl'
                      height='47px'
                      width='140px'
                      borderColor='#f8f5f2'
                      p={[12, 0]}
                      borderRadius='5px'
                      textAlign='center'
                      bgColor='#f8f5f2'>Create account</Button>

                    <Button
                      size='6xl'
                      height='47px'
                      width='140px'
                      borderColor='#fff'
                      p={[12, 0]}
                      borderRadius='5px'
                      textAlign='center'
                      bgColor='#fff'>Sign In</Button>
                  </ButtonGroup>
                </Flex>

                {/* Mobile */}
                <IconButton
                  aria-label="Open Menu"
                  size="xlg"
                  mr={2}
                  icon={
                    <HamburgerIcon />
                  }
                  onClick={() => changeDisplay('flex')}
                  display={['flex', 'flex', 'none', 'none']}
                />
                <Switch
                  color="green"
                  isChecked={isDark}
                  size='lg'
                  ml={10}
                  colorScheme='teal'
                  onChange={toggleColorMode}
                />
              </Flex>

              {/* Mobile Content */}
              <Flex
                w='100vw'
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
              >
                <Flex justify="flex-end">
                  <IconButton
                    mt={2}
                    mr={2}
                    aria-label="Open Menu"
                    size="lg"
                    icon={
                      <CloseIcon />
                    }
                    onClick={() => changeDisplay('none')}
                  />
                </Flex>

                <Flex
                  flexDir="column"
                  align="center"
                >
                  <Link href="/" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="Home"
                      my={5}
                      w="100%"
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/about" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="About"
                      my={5}
                      w="100%"
                    >
                      About
                    </Button>
                  </Link>

                  <Link href="/contact" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="Contact"
                      my={5}
                      w="100%"
                    >
                      Contact
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>

        </div>
      </div>
    </>
  );
}

const Desktop = () => {
  return (
    <Stack direction={'row'} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

const NavItem = ({ label, href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkColor = useColorModeValue('gray.600', 'white')
  const linkHoverColor = useColorModeValue('#0a8080', '#0a8080')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const hoverFontWeight = useColorModeValue('bold', 'bold');

  return (
    <Box key={label}>
      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Box
            as="a"
            p={2}
            href={href ?? '#'}
            fontSize={'3xl'}
            lineHeight={'24px'}
            color={isHovered ? linkHoverColor : linkColor}
            fontWeight={isHovered ? hoverFontWeight : 'normal'}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              transition: "background-color 0.3s, color 0.3s"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {label}
          </Box>
        </PopoverTrigger>

        {children && children.length > 0 && (
          <>
            {isHovered ? <ChevronUpIcon /> : <ChevronDownIcon />}
            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={popoverContentBgColor}
              p={4}
              rounded={'xl'}
              minW={'5xl'}
            >
              <Stack>
              <SimpleGrid columns={3} spacing='40px'>
                {children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </SimpleGrid>
              </Stack>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Box>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('#fff', '#fff') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'xl'} >{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
        </Flex>
      </Stack>
    </Box>
  );
};

