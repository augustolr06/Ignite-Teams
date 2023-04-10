import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from "react-native"
import { Container, Icon } from "./styles"

interface ButtonIconProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary'
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon(props: ButtonIconProps) {
  const { variant = "primary", icon = 'help', ...rest } = props
  return (
    <Container {...rest}>
      <Icon name={icon} variant={variant} />
    </Container>
  )
}
