const Pagination = ({ recsPerPage, totalRecs, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalRecs / recsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination pagination-sm justify-content-end'>
          <span className='pagelabel'>Pages: &nbsp; </span>
          {pageNumbers.map(number => (
            <li key={number} className='page-item' >
              <a onClick={() => paginate(number)} href='#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;