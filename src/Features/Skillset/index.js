import { Header } from "../../Common/Header";
import { List } from "../../Common/List";
import { ListItems } from "../../Common/ListItems";
import { Section } from "../../Common/Section";
import { skillset } from "./skillset";

export const Skillset = () => (
  <Section
    header={<Header containerHeader={true} fontSize={"22px"} body={"My skillset includes 🛠️"} />}
    body={<List body={<ListItems items={skillset} />} />}
  />
);
