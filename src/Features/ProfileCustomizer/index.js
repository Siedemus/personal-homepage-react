import { Header } from "../../Common/Header";
import { List } from "../../Common/List/styled";
import { ListItems } from "../../Common/ListItems";
import { Section } from "../../Common/Section";

export const ProfileCustomizer = ({ title, content }) => (
  <Section
    header={<Header containerHeader={true} fontSize={"30px"} body={title} />}
    body={
      <List>
        <ListItems items={content} />
      </List>
    }
  />
);
