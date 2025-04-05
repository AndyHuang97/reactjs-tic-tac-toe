export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.player}-${turn.square.row}-${turn.square.col}`}>
                    <span>
                        {turn.player} selected ({turn.square.row},{turn.square.col})
                    </span>
                </li>
            ))}
        </ol>
    );
}