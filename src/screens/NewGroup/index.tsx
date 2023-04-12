import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"

import { Container, Content, Icon } from "./styles"
import { useNavigation } from "@react-navigation/native"

export function NewGroup() {

  const navigation = useNavigation()

  function handleCreateGroup() {
    navigation.navigate('players', { group: 'Nova Turma' })
  }
  return (
    <Container>
      <Header hasBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova Turma" subtitle="Crie a turma para adicionar as pessoas" />
        <Input
          placeholder="Nome da turma"
        />
        <Button title="Criar" style={{marginTop: 20}} onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}
