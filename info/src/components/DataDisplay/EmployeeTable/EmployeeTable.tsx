import { SearchIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
  Box,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const EmployeeTable = () => {
  return (
    <Flex w="80vw" h="65vh" overflow="auto">
      {/*画面内スクロールの実装*/}

      <Table variant="simple" wordBreak="keep-all">
        <TableCaption>Imperial to metric conversion factors</TableCaption>

        <Thead>
          <Tr>
            <Th>従業員名</Th>
            <Th>カラビナネーム</Th>
            <Th>従業員番号</Th>
            <Th>ステータス</Th>
            <Th>従業員種別</Th>
            <Th>業種</Th>
            <Th>サークル</Th>
          </Tr>
        </Thead>

        <Tbody>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>

          <NextLink href="employee/1" passHref>
            <Tr _hover={{ backgroundColor: '#f2f2f2' }}>
              <Td>工藤俊晃</Td>
              <Td>9do</Td>
              <Td>123456</Td>
              <Td>現職</Td>
              <Td>正社員</Td>
              <Td>デザイナー</Td>
              <Td>わくわくクリエイティブ</Td>
            </Tr>
          </NextLink>
        </Tbody>
      </Table>
    </Flex>
  )
}

export default EmployeeTable
