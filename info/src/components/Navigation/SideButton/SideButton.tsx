import { Box, Link, Text, Icon, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'

const SideButton = (props) => {
  const { bg, w, p, borderRadius, href, children, icon } = props

  return (
    <NextLink href={href} passHref>
      <Link borderRadius={borderRadius}>
        <Box
          bg={bg}
          w={w}
          p={p}
          borderRadius={borderRadius}
          _hover={{ backgroundColor: '#d8d8d8' }}
        >
          <HStack spacing="20px">
            <Icon boxSize="6" as={props.icon} />

            <Text fontSize="xl">{children}</Text>
          </HStack>
        </Box>
      </Link>
    </NextLink>
  )
}

export default SideButton
