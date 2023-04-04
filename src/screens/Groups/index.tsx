import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat', 'Galera do Ignite', 'Galera do Next Level Week'])

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada. Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && 
          { flex: 1}}
      />

      <Button title="Criar nova turma" />

    </Container>
  )
}
