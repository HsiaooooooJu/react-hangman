export default function HangmanDrawing() {
  const word = 'test'
  const guessLetters = ['t', 'e', 'a']

  // index is unique in this case, cuz the spelling of the word will never change
  // which means that the order of the letter (index number) will never change
  const letters = word.split('').map((letter: string, index: number) => {
    return (
      <span style={{ borderBottom: '.1em solid black' }} key={index}>
        <span
          style={{ visibility: guessLetters.includes(letter) ? 'visible' : 'hidden' }}
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
        fontSize: '5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
    >
      {letters}
    </div>
  )
}
