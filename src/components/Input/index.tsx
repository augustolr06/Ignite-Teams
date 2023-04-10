import { TextInputProps } from "react-native"
import { Container } from "./styles"
import { useTheme } from "styled-components/native"

interface InputProps extends TextInputProps {}

export function Input(props: InputProps) {
  const { ...rest } = props

  const theme = useTheme()
  return (
    <Container
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  )
}
