interface ChuckJokeProps {
    key: number,
    joke: string
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => <p>{joke}</p>

export default ChuckJoke;
