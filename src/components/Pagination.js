import Pagination from 'react-bootstrap/Pagination';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';






function AdvancedExample(props)  {




  return (
    <div >
      
      <ReactPaginate
      containerClassName={'pagination justify-content-center'}
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={5}
        pageCount={+props.Pagination}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}


export default AdvancedExample;