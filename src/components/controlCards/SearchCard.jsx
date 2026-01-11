import React from "react";

const SearchCard = ({
  searchQuery,
  setSearchQuery,
  isLoading,
  handleSearch,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-lg">Image Search</h2>
        <form onSubmit={handleSearch} className="form-control gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search images..."
            className="input input-bordered w-full px-4"
          />
          <button
            type="submit"
            disabled={isLoading || !searchQuery.trim()}
            className="btn btn-primary w-full bg-base-100 hover:bg-base-300 mt-2"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Search"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;