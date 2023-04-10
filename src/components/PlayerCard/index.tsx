import { Container, PlayerName, Icon } from "./styles"
import { ButtonIcon } from "@components/ButtonIcon"

interface PlayerCardProps {
  name: string
  onRemove?: () => void
}

export function PlayerCard(props: PlayerCardProps) {
  const { name, onRemove } = props
  return (
    <Container>
      <Icon name='person' />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon='close' variant='secondary' onPress={onRemove} />
    </Container>
  )
}
