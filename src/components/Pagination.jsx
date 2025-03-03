/* eslint-disable react/prop-types */
const Pagination = ({ page, setPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page > 3) {
        pages.push(1, '...');
      } else {
        pages.push(1, 2, 3);
      }

      if (page > 3 && page < totalPages - 2) {
        pages.push(page - 1, page, page + 1, );
      }

      if (page < totalPages - 2) {
        pages.push('...', totalPages);
      }
    }
    return pages;
  };
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`rounded-lg px-5 py-2 font-bold text-white transition ${
          page === 1 ? 'cursor-not-allowed bg-yellow-200' : 'bg-yellow-600 hover:bg-yellow-200'
        }`}
      >
        Prev
      </button>

      {generatePageNumbers().map((pages, index) =>
        pages === '...' ? (
          <span key={index} className="px-3">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setPage(pages)}
            className={`rounded px-3 py-1 ${page === pages ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {pages}
          </button>
        ),
      )}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className={`rounded-lg px-5 py-2 font-bold text-white transition ${
          page === totalPages ? 'cursor-not-allowed bg-primary-400' : 'bg-blue-600 hover:bg-primary-400'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
