import styled from "styled-components";

const ListItem = styled.li`
  padding-top: 8px;
  line-height: 1;

  &::marker {
    color: ${({ theme }) => theme.colors.violet};
    font-size: 30px;
  }
`;

export { ListItem };
