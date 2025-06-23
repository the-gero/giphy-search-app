import { useEffect, useRef, useState } from "react";
import {
  useGetTrendingQuery,
  useLazySearchGifsQuery,
} from "../features/gifs/gifsApi";
import SearchBar from "../components/SearchBar";
import GifsGrid from "../features/gifs/GifsGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import type { GifObject } from "../features/gifs/gifs.type";

const LIMIT = 24;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);
  const [searchResults, setSearchResults] = useState<GifObject[]>([]);
  const [trendingResults, setTrendingResults] = useState<GifObject[]>([]);

  const searchTermRef = useRef("");

  const { data: trendingData, isFetching: isTrendingLoading } =
    useGetTrendingQuery(offset, {
      skip: !!searchTerm,
    });

  const [triggerSearch, { isFetching: isSearching }] = useLazySearchGifsQuery();

  // Handle search
  useEffect(() => {
    if (!searchTerm) return;

    searchTermRef.current = searchTerm;
    triggerSearch({ q: searchTerm, offset }).then((res) => {
      if ("data" in res && res.data?.data) {
        if (offset === 0) {
          setSearchResults(res.data.data);
        } else {
          setSearchResults((prev) => [...prev, ...(res?.data?.data ?? [])]);
        }
      }
    });
  }, [searchTerm, offset]);

  // Handle trending fetch
  useEffect(() => {
    if (searchTerm || !trendingData?.data) return;

    if (offset === 0) {
      setTrendingResults(trendingData.data);
    } else {
      setTrendingResults((prev) => [...prev, ...trendingData.data]);
    }
  }, [trendingData, searchTerm, offset]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setOffset(0);
  };

  const handleLoadMore = () => {
    setOffset((prev) => prev + LIMIT);
  };

  const gifs = searchTerm ? searchResults : trendingResults;
  const isLoading = isSearching || isTrendingLoading;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && offset === 0 && <p className="text-center">Loading...</p>}
      <GifsGrid gifs={gifs} />
      <LoadMoreButton onLoadMore={handleLoadMore} />
    </div>
  );
};

export default Home;
