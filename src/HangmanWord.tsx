type HangmanWordProps = {
  wordToGuess: string
  guessedLetters: string[]
}

export default function HangmanWord({ wordToGuess, guessedLetters }: HangmanWordProps) {
  // index is unique in this case, cuz the spelling of the word will never change
  // which means that the order of the letter (index number) will never change
  const letters = wordToGuess.split('').map((letter: string, index: number) => {
    return (
      <span
        style={{
          width: '4rem',
          textAlign: 'center',
          borderBottom: '.1em solid black'
        }}
        key={index}
      >
        <span
          style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden' }}
        >
          {letter}
        </span>
      </span>
    )
  })
  return (
    <div
      style={{
        display: 'flex',
        padding: '.5em',
        gap: '.25em',
        lineHeight: '5rem',
        fontSize: '5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
    >
      {letters}
    </div>
  )
}
