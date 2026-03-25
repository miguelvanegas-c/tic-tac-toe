export default function GameInfo({ movements }) {
    return (
        <div className="game-info">
            <h2>Movements</h2>
            <ul>
                {movements.map((move, index) => (
                    <li key={index}>{move}</li>
                ))}
            </ul>
        </div>
    );
}