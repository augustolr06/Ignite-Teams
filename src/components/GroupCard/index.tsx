import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard(props: GroupCardProps) {
  const { title, ...rest } = props;
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}




