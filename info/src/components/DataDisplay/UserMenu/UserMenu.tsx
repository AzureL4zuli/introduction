import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Avatar,
  VStack,
  Link,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const UserMenu = () => {
  return (
    <>
      <VStack p="60px" spacing="20px">
        <Avatar
          size="xl"
          name="UserName" // ここはpropsで受け取る?
          src="https://bit.ly/sage-adebayo" // ここはpropsで受け取る?
        />

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color="black"
            fontSize="20"
            bg="#f2f2f2"
            _hover={{ backgroundColor: '#d8d8d8' }}
          >
            UserName {/*ここはpropsで受け取る */}
          </MenuButton>

          <MenuList>
            <NextLink href="../" passHref>
              <Link borderRadius="1g">
                <MenuItem _hover={{ backgroundColor: '#d8d8d8' }}>
                  マイページ
                </MenuItem>
              </Link>
            </NextLink>

            <NextLink href="/equipment" passHref>
              <Link borderRadius="1g">
                <MenuItem _hover={{ backgroundColor: '#d8d8d8' }}>
                  貸与物
                </MenuItem>
              </Link>
            </NextLink>

            <NextLink href="../" passHref>
              <Link borderRadius="1g">
                <MenuItem _hover={{ backgroundColor: '#d8d8d8' }}>
                  給与明細
                </MenuItem>
              </Link>
            </NextLink>

            <NextLink href="/circle" passHref>
              <Link borderRadius="1g">
                <MenuItem _hover={{ backgroundColor: '#d8d8d8' }}>
                  サークル
                </MenuItem>
              </Link>
            </NextLink>

            <NextLink href="../" passHref>
              <Link borderRadius="1g">
                <MenuItem _hover={{ backgroundColor: '#d8d8d8' }}>
                  ログアウト
                </MenuItem>
              </Link>
            </NextLink>
          </MenuList>
        </Menu>
      </VStack>
    </>
  )
}

export default UserMenu
