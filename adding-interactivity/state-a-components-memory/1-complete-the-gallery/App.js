import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const isPrevDisabled = index === 0;
  function handlePrevClick() {
    setIndex(index - 1);
  }

  const isNextDisabled = index === sculptureList.length - 1;
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button disabled={isPrevDisabled} onClick={handlePrevClick} style={{ display: "inline-block", marginRight: "10px" }}>
        Previous
      </button>
      <button disabled={isNextDisabled} onClick={handleNextClick} style={{ display: "inline-block" }}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
