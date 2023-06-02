import styled from "styled-components";

const ListItem = styled.li`
  padding-top: 8px;

  &::marker {
    color: ${({ theme }) => theme.colors.violet};
    font-size: 30px;
  }
`;

const ItemContent = styled.span`
  color: ${({ theme }) => theme.colors.slateGray};
`;

export { ListItem, ItemContent };
