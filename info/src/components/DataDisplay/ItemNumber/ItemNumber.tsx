import { HStack, Tag, TagLabel, Text } from '@chakra-ui/react'

const ItemNumber = (props) => {
  const { title, number, unit } = props

  return (
    <HStack spacing="2">
      <Text fontSize="xl" fontWeight="bold" color="gray">
        {title}
      </Text>
      <Tag size="md" colorScheme="red" borderRadius="full">
        <TagLabel>
          {number}
          {unit}
        </TagLabel>
      </Tag>
    </HStack>
  )
}

export default ItemNumber
