import { useState } from "react";

type SearchBarProps = {
  onSearch: (term: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  return (
    <form
      className="flex justify-center gap-3 my-4 relative mx-auto w-9/12 sticky top-0 left-0 z-10 bg-black h-20 py-4"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSearch(input);
      }}
    >
      <div className="w-2/12 text-white fill-white stroke-white flex h-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 35"
          className="h-full aspect-square"
        >
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path fill="#00ff99" d="M0 3h4v29H0z"></path>
            <path fill="#9933ff" d="M24 11h4v21h-4z"></path>
            <path fill="#00ccff" d="M0 31h28v4H0z"></path>
            <path fill="#fff35c" d="M0 0h16v4H0z"></path>
            <path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path>
            <path className="shadow" d="M24 16v-4h4M16 0v4h-4"></path>
          </g>
        </svg>
        <svg viewBox="0 0 128 36" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path
                d="m22.6,12c-2,-1.9 -4.4,-2.4 -6.2,-2.4c-4.4,0 -7.3,2.6 -7.3,8c0,3.5 1.8,7.8 7.3,7.8c1.4,0 3.7,-0.3 5.2,-1.4l0,-3.5l-6.9,0l0,-6l13.3,0l0,12.1c-1.7,3.5 -6.4,5.3 -11.7,5.3c-10.7,0 -14.8,-7.2 -14.8,-14.3c0,-7.1 4.7,-14.4 14.9,-14.4c3.8,0 7.1,0.8 10.7,4.4l-4.5,4.4zm9.1,19.2l0,-27.2l7.6,0l0,27.2l-7.6,0zm20.1,-7.4l0,7.3l-7.7,0l0,-27.1l13.2,0c7.3,0 10.9,4.6 10.9,9.9c0,5.6 -3.6,9.9 -10.9,9.9l-5.5,0zm0,-6.5l5.5,0c2.1,0 3.2,-1.6 3.2,-3.3c0,-1.8 -1.1,-3.4 -3.2,-3.4l-5.5,0l0,6.7zm36.7,13.9l0,-10.3l-9.8,0l0,10.3l-7.7,0l0,-27.2l7.7,0l0,10.3l9.8,0l0,-10.3l7.6,0l0,27.2l-7.6,0zm24.2,-17.9l5.9,-9.3l8.7,0l0,0.3l-10.8,16l0,10.8l-7.7,0l0,-10.8l-10.3,-16l0,-0.3l8.7,0l5.5,9.3z"
                id="svg_2"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded flex-1 h-14"
        placeholder="Search all the GIFs and Stickers"
      />
      <button
        onClick={() => onSearch(input)}
        className="aspect-square right-0 flex justify-center items-center h-14"
        style={{
          position: "absolute",
          background:
            "linear-gradient(45deg, rgb(230, 70, 182) 0%, rgb(255, 102, 102) 100%)",
          borderRadius: "0px 4px 4px 0px",
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 30 30" version="1.1" className="text-white h-10 w-10">
          <defs>
            <path
              d="M11.5482521,20.4090671 L4.24727698,28.2009189 C3.68084207,28.8054377 2.73159653,28.8363108 2.12707771,28.2698759 C1.5225589,27.703441 1.4916858,26.7541954 2.0581207,26.1496766 L9.40599838,18.3077689 C7.95982241,16.4371424 7.0978836,14.0789715 7.0978836,11.5181818 C7.0978836,5.44914339 11.9392549,0.518181818 17.9252787,0.518181818 C23.9113026,0.518181818 28.7526738,5.44914339 28.7526738,11.5181818 C28.7526738,17.5872202 23.9113026,22.5181818 17.9252787,22.5181818 C15.539851,22.5181818 13.3361963,21.7351359 11.5482521,20.4090671 Z M17.9252787,19.5181818 C22.242011,19.5181818 25.7526738,15.9425536 25.7526738,11.5181818 C25.7526738,7.09381 22.242011,3.51818182 17.9252787,3.51818182 C13.6085464,3.51818182 10.0978836,7.09381 10.0978836,11.5181818 C10.0978836,15.9425536 13.6085464,19.5181818 17.9252787,19.5181818 Z"
              id="giphy-search-icon-path-1"
            ></path>
          </defs>
          <g
            id="search"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="icons/search">
              <mask id="giphy-search-icon-mask-2" fill="white">
                <use xlinkHref="#giphy-search-icon-path-1"></use>
              </mask>
              <use
                id="Mask"
                fill="#FFFFFF"
                fill-rule="nonzero"
                xlinkHref="#giphy-search-icon-path-1"
              ></use>
              <g mask="url(#giphy-search-icon-mask-2)">
                <g transform="translate(0.250000, 0.250000)">
                  <g></g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
