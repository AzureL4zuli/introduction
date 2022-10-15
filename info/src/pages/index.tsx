import { Container, Heading, Link, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

const PageRoot: NextPage = () => {
  return (
    <>
      <HStack spacing="10px">
        <Container padding="10">
          <Heading mb={10}>ホーム画面</Heading>
          <NextLink href="/employee" passHref>
            <Link>社員一覧へ</Link>
          </NextLink>
        </Container>
      </HStack>
    </>
  )
}

export default PageRoot
