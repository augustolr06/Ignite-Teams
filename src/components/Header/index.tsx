import { TouchableOpacity } from 'react-native'
import logoImg from '@assets/logo.png'
import { BackIcon, Container, Logo } from './styles'

interface HeaderProps {
  hasBackButton?: boolean
}

export function Header(props: HeaderProps) {
  const { hasBackButton = false } = props
  return (
    <Container hasBackButton={hasBackButton}>
      {hasBackButton && (
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
