export function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}
