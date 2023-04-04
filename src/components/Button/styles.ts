import styled from 'styled-components/native'

interface ContainerProps {
  variant: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  min-width: 56px;
  min-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, variant }) => 
  variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
