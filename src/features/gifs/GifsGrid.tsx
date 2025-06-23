import { chunkIntoColumns } from "../../helper";
import type { GifObject } from "./gifs.type";

type GifsGridProps = {
  gifs: GifObject[];
};

const GifsGrid = ({ gifs }: GifsGridProps) => {
  const columns = chunkIntoColumns(gifs, 4);

  return (
    <div className="mx-auto flex flex-wrap w-9/12 transition-all duration-300">
      {columns.map((column, colIdx) => (
        <div
          key={colIdx}
          className="flex flex-col w-1/4 aligh-center min-w-[150px]"
        >
          {column.map((gif) => {
            const aspectRatio =
              parseFloat(gif.images.original.width) /
              parseFloat(gif.images.original.height);

            return (
              <a
                key={gif.id}
                href={gif.url}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden w-full p-1 relative group"
                style={{
                  aspectRatio: aspectRatio.toFixed(2),
                }}
              >
                <div className="absolute top-0 left-0 min-h-full min-w-full z-1 group-hover:bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[transparent] "></div>
                <div className="hidden group-hover:flex gap-2 justify-start items-center group-hover:absolute bottom-0 left-0  min-w-full z-[2] text-white p-2 font-semibold">
                  {gif.user?.display_name ? (
                    <>
                      <img
                        className="h-4 aspect-square"
                        src={gif?.user?.avatar_url}
                      ></img>
                      {gif.user?.display_name}
                      {gif.user?.is_verified && (
                        <svg
                          fill="white"
                          viewBox="0 0 21 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-giphyBlue size-3.5 shrink-0"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.7447 0L15.9028 2.55331L18.9947 3.81966L19.2419 7.15562L21 10L19.2419 12.8444L18.9947 16.1803L15.9028 17.4467L13.7447 20L10.5 19.2046L7.25532 20L5.09719 17.4467L2.00532 16.1803L1.75806 12.8444L0 10L1.75806 7.15562L2.00532 3.81966L5.09719 2.55331L7.25532 0L10.5 0.795382L13.7447 0ZM9.44644 15.2103L17.0434 7.52136L14.7399 5.19002L9.42133 10.5719L7.1186 8.24091L4.83951 10.5476L9.44644 15.2103Z"
                          ></path>
                        </svg>
                      )}
                    </>
                  ) : (
                    <>{gif.alt_text}</>
                  )}
                </div>
                <img
                  src={gif.images.original.url}
                  alt={gif.title}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GifsGrid;
