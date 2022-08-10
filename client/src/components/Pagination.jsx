import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ setPage }) => {
  return (
    <Pagination
      className="Pagination"
      onClick={(e) => setPage(e.target.textContent)}
    >
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>{7}</Pagination.Item>
      <Pagination.Item>{8}</Pagination.Item>
      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationComponent;
