import './App.css'
import { useState } from 'react'
import words from './wordList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Math.random(): return 0 <= random number < 1
    // Math.floor(Math.random() * 5); // random number from 0 to 4
    return words[Math.floor(Math.random() * words.length)]
  })
  // the state will be an array of string, string length will be 1
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >
        Lose / Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}
