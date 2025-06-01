type HangManWordProps = {
    word: string
    guessedLetters: string[]
    reveal?: boolean
}

export function HangManWord({ word, guessedLetters, reveal = false }: HangManWordProps) {
    return (
        <div className="hangman-word">
            {word.split('').map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter)
                const shouldReveal = reveal && !isGuessed

                return (
                    <span
                        className="letter"
                        key={index}
                        style={{
                            color: shouldReveal ? 'red' : isGuessed ? 'white' : 'transparent',
                            borderBottom: '2px solid #ccc',
                            width: '32px',
                            display: 'inline-block',
                            textAlign: 'center',
                            fontSize: '2rem',
                        }}
                    >
                        {letter}
                    </span>
                )
            })}
        </div>
    )
}
