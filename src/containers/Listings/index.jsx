import React from 'react';
import ListingCard from '../../components/ListingCard';
import useFetchData from "../../hooks/useFetchData.js";
import { mockApiCall } from '../../api/index.js';
import usePagination from "../../hooks/usePagination";


function ListingSection() {
  const { data: pricingData, loading, error } = useFetchData(() => mockApiCall());
  const itemsPerPage = 6; // Number of items per page
  const {
    currentData: paginatedData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  } = usePagination(pricingData, itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto py-16">
      {/* <h1 className="text-3xl font-bold text-center mb-10">Pricing</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map(({plan, heading, price, features, subHeading, color}) => (
          <ListingCard key={plan} heading={heading} plan={plan} price={price} features={features} subHeading={subHeading} color={color}/>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 rounded"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => goToPage(page + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === page + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default ListingSection;