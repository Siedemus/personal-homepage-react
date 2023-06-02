import { Header } from "../../Common/Header";
import { List } from "../../Common/List";
import { ListItems } from "../../Common/ListItems";
import { Section } from "../../Common/Section";
import { technologies } from "./technologies";

export const WantLearn = () => (
  <Section
    header={
      <Header
        containerHeader={true}
        fontSize={"30px"}
        body={"What I want to learn next 🚀"}
      />
    }
    body={<List body={<ListItems items={technologies} />} />}
  />
);
