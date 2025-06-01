import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './hangman_words.json'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangManWord } from './components/HangManWord'

type WordEntry = {
  word: string
  hint: string,
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<WordEntry>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetter, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetter.filter(
    letter => !wordToGuess.word.includes(letter)
  )
  // Make win and lose
  const isLosser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.word.split("")
    .every(letter => guessedLetter
      .includes(letter))

  // Refresh game 
  const refreshGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setWordToGuess(randomWord)
    setGuessedLetters([])
  }

  // Add new guessed letter
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetter.includes(letter) || isLosser || isWinner) return
    setGuessedLetters(current => [...current, letter])
  }, [guessedLetter, isWinner, isLosser])

  // Keyboard event listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key.match(/^[a-z]$/)) {
        e.preventDefault()
        addGuessedLetter(key)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [guessedLetter])

  return (
    <>
      <div className='card'>
        <div className='display-banner'>
          {isLosser && "Nice Try"}
          {isWinner && "Winner 🏆 "}
        </div>
        <button className="refresh-button" onClick={refreshGame} title="Restart Game">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6a6 6 0 0 1-5.65-4H4.26a8 8 0 0 0 7.74 6c4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
          </svg>
        </button>



        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangManWord word={wordToGuess.word} guessedLetters={guessedLetter} reveal={isLosser} />

        <div className='hint'>
          Hint: {wordToGuess.hint}
        </div>
      </div>
    </>
  )
}

export default App
