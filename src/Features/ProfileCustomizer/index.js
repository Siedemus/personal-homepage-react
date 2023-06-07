import { Header } from "../../Common/Header/styled";
import { List } from "../../Common/List/styled";
import { Section } from "../../Common/Section/styled";
import { ListItem } from "../../Common/ListItems/styled";

export const ProfileCustomizer = ({ title, content }) => (
  <Section>
    <Header containerHeader={true} fontSize={"30px"}>
      {title}
    </Header>
    <List>
      {content.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </Section>
);
