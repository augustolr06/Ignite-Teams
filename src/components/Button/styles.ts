import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  variant: 'primary' | 'secondary'
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  min-width: 56px;
  min-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, variant }) => 
  variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`
