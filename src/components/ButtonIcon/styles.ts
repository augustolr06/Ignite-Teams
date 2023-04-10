import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'


export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  `

interface ButtonIconProps {
  variant?: 'primary' | 'secondary'
}

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({ theme, variant }) => ({
  color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  size: 24,
}))``
