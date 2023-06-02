import { ListItem, ItemContent } from "./styled";

export const ListItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ListItem key={item}>
          <ItemContent>{item}</ItemContent>
        </ListItem>
      ))}
    </>
  );
};
