/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { TrackWithPeer } from '@100mslive/react-sdk/dist/utils/layout';
import React from 'react';

function Pagination({ list, page, setPage }) {
  const disableLeft = list.length - page === list.length;
  const disableRight = list.length - page === 1;
  const nextPage = () => {
    setPage(Math.min(page + 1, list.length - 1));
  };
  const prevPage = () => {
    setPage(Math.max(page - 1, 0));
  };
  return (
    <div className="flex items-center space-x-2 absolute -bottom-16 right-10 z-20 border-solid border-gray-700 border px-1 py-2 rounded-3xl">
      <button
        className="arrow-btn"
        onClick={prevPage}
        disabled={disableLeft}
        type="button"
      >
        <ChevronLeft />
      </button>
      {list.map((_, i) => (
        <div
          className={`w-[6px] h-[6px] rounded-full cursor-pointer ${
            i === page ? 'bg-gray-200' : 'bg-gray-500'
          }`}
          onClick={() => setPage(i)}
        />
      ))}
      <button
        className="arrow-btn"
        onClick={nextPage}
        disabled={disableRight}
        type="button"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;

function ChevronLeft() {
  return (
    <svg
      width={14}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      color="white"
      className="cursor-pointer"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      color="white"
      className="cursor-pointer"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
