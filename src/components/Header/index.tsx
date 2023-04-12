import { TouchableOpacity } from 'react-native'
import logoImg from '@assets/logo.png'
import { BackIcon, Container, Logo } from './styles'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  hasBackButton?: boolean
}

export function Header(props: HeaderProps) {
  const { hasBackButton = false } = props
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('groups')
  }
  return (
    <Container hasBackButton={hasBackButton}>
      {hasBackButton && (
        <TouchableOpacity onPress={handleGoHome} >
          <BackIcon />
        </TouchableOpacity>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
