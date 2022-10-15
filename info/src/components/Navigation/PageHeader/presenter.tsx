import { Box, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import ItemNumber from 'components/DataDisplay/ItemNumber'
import Button from 'components/General/Button'
import SearchBar from 'components/Navigation/SearchBar'

const PageHeaderPresenter: NextPage = () => {
  return (
    <>
      <Box mb="10px">
        <ItemNumber title="従業員" number="123" unit="名" />
      </Box>

      <HStack spacing="20px">
        <Button s="md" bg="#f2f2f2" variant="outline">
          従業員の追加
        </Button>
        <Button s="md" bg="#f2f2f2" variant="outline">
          ダウンロード
        </Button>
      </HStack>
      <Box mt="20px" mb="20px">
        <SearchBar />
      </Box>
    </>
  )
}

export default PageHeaderPresenter
