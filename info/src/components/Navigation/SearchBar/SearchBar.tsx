import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
  Spacer,
} from '@chakra-ui/react'
import SortMenu from '../SortMenu'

const SearchBar = () => {
  return (
    <>
      <Box w="80vw" h="60px" bg="#f2f2f2" rounded={10} wordBreak="keep-all">
        <HStack spacing="2.5" p="2.5">
          <Box>ユーザーの絞り込み</Box>

          <InputGroup maxW="auto">
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="search" placeholder="フリーワードで検索" />
          </InputGroup>
          <Spacer />
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              minW="150px"
              bg="#f2f2f2"
              _hover={{ backgroundColor: '#d8d8d8' }}
            >
              ステータス
            </MenuButton>
            <MenuList minW="150px">
              <MenuOptionGroup type="checkbox">
                <MenuItemOption value="現職">現職</MenuItemOption>
                <MenuItemOption value="退職済">退職済</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              minW="150px"
              bg="#f2f2f2"
              _hover={{ backgroundColor: '#d8d8d8' }}
            >
              従業員種別
            </MenuButton>
            <MenuList minW="150px">
              <MenuOptionGroup type="checkbox">
                <MenuItemOption value="normal">正社員</MenuItemOption>
                <MenuItemOption value="CEO">社長</MenuItemOption>
                <MenuItemOption value="intern">インターン生</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              minW="150px"
              bg="#f2f2f2"
              _hover={{ backgroundColor: '#d8d8d8' }}
            >
              業種
            </MenuButton>
            <MenuList minW="150px">
              <MenuOptionGroup type="checkbox">
                <MenuItemOption value="front">フロントエンド</MenuItemOption>
                <MenuItemOption value="back">バックエンド</MenuItemOption>
                <MenuItemOption value="design">デザイナー</MenuItemOption>
                <MenuItemOption value="jimu">事務</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              minW="150px"
              bg="#f2f2f2"
              _hover={{ backgroundColor: '#d8d8d8' }}
            >
              サークル
            </MenuButton>
            <MenuList minW="150px">
              <MenuOptionGroup type="checkbox">
                <MenuItemOption value="mypage">マイページ</MenuItemOption>
                <MenuItemOption value="equipment">貸与物</MenuItemOption>
                <MenuItemOption value="money">給与明細</MenuItemOption>
                <MenuItemOption value="circle">サークル</MenuItemOption>
                <MenuItemOption value="logout">ログアウト</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </>
  )
}

export default SearchBar
