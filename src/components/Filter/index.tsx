import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

interface FilterProps extends TouchableOpacityProps {
  title: string
  isActive?: boolean
}

export function Filter(props: FilterProps) {
  const { title, isActive = false, ...rest } = props
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
