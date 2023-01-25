import styles from './Keyboard.module.css'

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65))

export default function Keyboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.6rem'
      }}
    >
      {alphabet.map((key: string) => {
        return (
          <button className={`${styles.btn}`} type="button" key={key}>
            {key}
          </button>
        )
      })}
    </div>
  )
}
