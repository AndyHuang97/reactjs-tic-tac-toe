const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({}) {
  return (
    <ol id="game-board">
      {initalGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button key={colIndex}>{playerSymbol}</button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
