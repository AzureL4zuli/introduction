import { Flex, Box, Stack, VStack, Link, Spacer, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import UserMenu from 'components/DataDisplay/UserMenu'
import NextLink from 'next/link'
import SideButton from '../SideButton'
import {
  BsFillPersonFill as Person,
  BsFillPeopleFill as People,
  BsArchiveFill as Equipment,
} from 'react-icons/bs'

const SideMenuPresenter: NextPage = () => {
  return (
    <>
      <Stack direction="row" spacing="10px">
        <Flex>
          <Box w="280px" bg="#f2f2f2" h="100vh">
            <UserMenu />

            <VStack p="10px" ml="10px" spacing="10px">
              <SideButton
                href="/employee"
                bg="#f2f2f2"
                w="250px"
                p="4"
                borderRadius="lg"
                icon={Person}
              >
                従業員
              </SideButton>
              <SideButton
                href="/circle"
                bg="#f2f2f2"
                w="250px"
                p="4"
                borderRadius="lg"
                icon={People}
              >
                サークル
              </SideButton>
              <SideButton
                href="/equipment"
                bg="#f2f2f2"
                w="250px"
                p="4"
                borderRadius="lg"
                icon={Equipment}
              >
                備品
              </SideButton>
            </VStack>
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default SideMenuPresenter
