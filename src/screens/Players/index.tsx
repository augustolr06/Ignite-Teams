import { ButtonIcon } from "@components/ButtonIcon"
import { Filter } from "@components/Filter"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Input"
import { ListEmpty } from "@components/ListEmpty"
import { PlayerCard } from "@components/PlayerCard"
import { useState } from "react"
import { FlatList } from "react-native"
import { AddPlayerForm, Container, HeaderList, PlayersCount } from "./styles"
import { Button } from "@components/Button"

export function Players(){
  const [selectedTeam, setSelectedTeam] = useState("time a")
  const [players, setPlayers] = useState(["Augusto", "Aline", "Davi", "Maria"])
  const [newPlayer, setNewPlayer] = useState("")
  return (
    <Container>
      <Header hasBackButton />

      <Highlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
        />
        <AddPlayerForm>
          <Input
            placeholder="Nome da Pessoa"
            autoCorrect={false}
            value={newPlayer}
            onChangeText={setNewPlayer}
          />
          <ButtonIcon icon="add" variant="primary" onPress={() => {
            setPlayers([...players, newPlayer])
            setNewPlayer("")
          }} />
        </AddPlayerForm>
        <HeaderList>
          <FlatList
            data={["time a", "time b", "time c"]}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter title={item} isActive={item === selectedTeam} onPress={() => setSelectedTeam(item)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <PlayersCount>{players.length}</PlayersCount>
        </HeaderList>
        <FlatList
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PlayerCard
            name={item}
            onRemove={() => setPlayers(players.filter(player => player !== item))}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <ListEmpty message="Nenhum jogador encontrado" />
          }

          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}
        />
        <Button title='Remover Turma' variant='secondary' />
    </Container>
  )
}
