import { Container, Message } from "./styles"

interface ListEmptyProps {
  message: string
}

export function ListEmpty(props : ListEmptyProps) {
  const { message } = props
  return (
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}
