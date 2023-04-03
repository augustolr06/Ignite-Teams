import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

interface ContainerProps {
  hasBackButton?: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: ${({ hasBackButton }) => (hasBackButton ? 'space-between' : 'center')};
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``
