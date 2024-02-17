import { useMemo, memo } from "react";
import {
  PageItem,
  PaginationContainer,
  PaginationWrapper,
} from "./Pagination.styled";
const Pagination = ({ totalPages, currentPage, onClick }) => {
  const paginatinRender = useMemo(() => {
    let list = [];
    for (let i = 1; i <= totalPages; i++) {
      list.push(
        <PageItem
          className={i === currentPage ? "active" : ""}
          onClick={() => onClick(i)}
        >
          {i}
        </PageItem>
      );
    }
    return list;
  }, [currentPage, onClick, totalPages]);
  return (
    <PaginationWrapper>
      <PaginationContainer>{paginatinRender}</PaginationContainer>
    </PaginationWrapper>
  );
};

export default memo(Pagination);
