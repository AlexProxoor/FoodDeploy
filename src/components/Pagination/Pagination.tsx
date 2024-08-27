import React from "react";
import { ButtonLoad } from "./styled";

interface PaginationProps {
  loading: boolean;
  onLoadMoreClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  loading,
  onLoadMoreClick,
}) => {
  return (
    <ButtonLoad>
      <button onClick={onLoadMoreClick} disabled={loading}>
        {loading ? "Loading..." : "Load more"}
      </button>
    </ButtonLoad>
  );
};

export default Pagination;
