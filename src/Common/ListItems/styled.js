import styled from "styled-components";

const ListItem = styled.li`
  padding: 8px 0;
`;

const ItemContent = styled.span`
  color: ${({ theme }) => theme.colors.slateGray};
`;

export { ListItem, ItemContent };
