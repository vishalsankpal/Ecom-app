import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;
const PaginationContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;
const PageItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &.active {
    border: 1px solid red;
  }
`;
export { PageItem, PaginationContainer, PaginationWrapper };
