import { useCallback, useEffect, useState, useMemo } from 'react'
import words from './wordList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

export default function App() {
  const wordToGuess = useMemo(() => {
    // Math.random(): return 0 <= random number < 1
    // Math.floor(Math.random() * 5); // random number from 0 to 4
    return words[Math.floor(Math.random() * words.length)]
  }, [])

  // the state will be an array of string, string length will be 1
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  // incorrect letters are all the guessed letters that aren't in 'word' to guess
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  // every letter in wordToGuess is included in guessedLetters
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))
  const isLoser = incorrectLetters.length >= 6

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e
      if (!key.match(/^[a-zA-Z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [addGuessedLetter])

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '2rem auto',
        alignItems: 'center',
        fontFamily: 'Baloo Tamma 2'
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >
        {isLoser && 'Nice try! Refresh to play again! 💪🏻'}
        {isWinner && 'Good job! Refresh to play again! 😎'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}
