import type { NextPage } from 'next'
import {
  Flex,
  HStack,
  Avatar as CAvatar,
  Text,
  Spacer,
  Box,
  Heading,
} from '@chakra-ui/react'
import Button from 'components/General/Button'

const EmployeeDitailPresenter: NextPage = () => {
  return (
    <>
      <Flex w="75vw" bg="#f2f2f2" p="10" pt="1" h="85vh">
        <Flex>
          <Box>
            <HStack spacing="20px">
              <CAvatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
                size="lg"
              />
              <Text fontSize="xl" fontWeight="medium">
                Segun Adebayo
              </Text>
            </HStack>
          </Box>
        </Flex>

        <Spacer />

        <Flex>
          <Box>
            <HStack>
              <Button>編集</Button>
              <Button>ダウンロード</Button>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default EmployeeDitailPresenter
