// because the "hangman" is going to show up dynamically
// so put it in variable
const HEAD = (
  <div
    style={{
      position: 'absolute',
      top: '50px',
      // (- HEAD 50px/2 - border 10px/2)
      right: '-30px',
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black'
    }}
  />
)

const BODY = (
  <div
    style={{
      position: 'absolute',
      // HEAD 50px + border 20px + BODY 50px/2
      top: '120px',
      right: 0,
      width: '10px',
      height: '90px',
      background: 'black'
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      position: 'absolute',
      top: '120px',
      right: '-85px',
      transformOrigin: 'left top',
      rotate: '35deg',
      width: '85px',
      height: '10px',
      background: 'black'
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      position: 'absolute',
      top: '120px',
      right: '10px',
      transformOrigin: 'right top',
      rotate: '-35deg',
      width: '85px',
      height: '10px',
      background: 'black'
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      position: 'absolute',
      top: '200px',
      right: '-90px',
      transformOrigin: 'left bottom',
      rotate: '50deg',
      width: '100px',
      height: '10px',
      background: 'black'
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      position: 'absolute',
      top: '200px',
      right: 0,
      transformOrigin: 'right bottom',
      rotate: '-50deg',
      width: '100px',
      height: '10px',
      background: 'black'
    }}
  />
)

export default function HangmanDrawing() {
  return (
    <div style={{ position: 'relative' }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '50px',
          width: '10px',
          background: 'black'
        }}
      />
      <div
        style={{
          height: '10px',
          width: '220px',
          marginLeft: 'calc(250px/2 - 10px/2 )',
          background: 'black'
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          marginLeft: 'calc(250px/2 - 10px/2 )',
          background: 'black'
        }}
      />
      <div
        style={{
          height: '10px',
          width: '250px',
          background: 'black'
        }}
      />
    </div>
  )
}