type LoadMoreButtonProps = {
  onLoadMore: () => void;
};

const LoadMoreButton = ({ onLoadMore }: LoadMoreButtonProps) => (
  <div className="flex justify-center my-6">
    <button
      onClick={onLoadMore}
      className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
    >
      Load More
    </button>
  </div>
);

export default LoadMoreButton;
