function Star({ onRate, full, size = 3 }) {
  return (
    <>
      {full ? (
        <span
          className={`cursor-pointer text-[${size}rem] text-yellow-400`}
          onClick={onRate}
        >
          ☆
        </span>
      ) : (
        <span
          className={`cursor-pointer text-[${size}rem] text-yellow-400`}
          onClick={onRate}
        >
          ★
        </span>
      )}
    </>
  );
}

export default Star;
