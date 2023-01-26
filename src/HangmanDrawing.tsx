// because the "hangman" is going to show up dynamically
// so put it in variable
const HEAD = (
  <div
    key="head"
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
    key="body"
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
    key="right-arm"
    style={{
      position: 'absolute',
      top: '120px',
      right: '-80px',
      transformOrigin: 'left top',
      rotate: '35deg',
      width: '85px',
      height: '10px',
      background: 'black',
      borderRadius: '5px'
    }}
  />
)

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      position: 'absolute',
      top: '120px',
      right: '5px',
      transformOrigin: 'right top',
      rotate: '-35deg',
      width: '85px',
      height: '10px',
      background: 'black',
      borderRadius: '5px'
    }}
  />
)

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      position: 'absolute',
      top: '200px',
      right: '-90px',
      transformOrigin: 'left bottom',
      rotate: '50deg',
      width: '100px',
      height: '10px',
      background: 'black',
      borderRadius: '5px'
    }}
  />
)

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      position: 'absolute',
      top: '200px',
      right: 0,
      transformOrigin: 'right bottom',
      rotate: '-50deg',
      width: '100px',
      height: '10px',
      background: 'black',
      borderRadius: '5px'
    }}
  />
)

// put the body part in a correct order
const BODY_PART = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

type HangmanDrawingProps = { numberOfGuesses: number }

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PART.slice(0, numberOfGuesses)}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '55px',
          width: '10px',
          background: 'black',
          borderRadius: '5px'
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
          background: 'black',
          borderRadius: '5px'
        }}
      />
    </div>
  )
}
