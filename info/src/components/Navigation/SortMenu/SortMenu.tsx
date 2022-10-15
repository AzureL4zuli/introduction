import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Box,
  Flex,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const SortMenu = (props) => {
  const { children, item1, item2, item3, item4, item5 } = props
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        bg="#f2f2f2"
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        colorScheme="teal"
        pr="50px"
        pl="50px"
      >
        {children}
      </MenuButton>
      <MenuList maxW="10px">
        <MenuOptionGroup type="checkbox">
          <MenuItemOption value="item1">{item1}</MenuItemOption>
          <MenuItemOption value="item2">{item2}</MenuItemOption>
          <MenuItemOption value="item3">{item3}</MenuItemOption>
          <MenuItemOption value="item4">{item4}</MenuItemOption>
          <MenuItemOption value="item5">{item5}</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default SortMenu
