import { Container, Heading, Flex, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

const EquipmentListPresenter: NextPage = () => {
  return (
    <>
      <Flex>
        <Container padding="10">
          <Heading mb={10}>備品一覧画面</Heading>
          <NextLink href="../" passHref>
            <Link>戻る</Link>
          </NextLink>
        </Container>
      </Flex>
    </>
  )
}

export default EquipmentListPresenter
