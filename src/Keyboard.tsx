import styles from './Keyboard.module.css'

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  // function that takes in a letter string and return nothing
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter
}: KeyboardProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.6rem'
      }}
    >
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`
              ${styles.btn} 
              ${isActive ? styles.active : ''} 
              ${isInactive ? styles.inactive : ''}
            `}
            disabled={isActive || isInactive}
            type="button"
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
