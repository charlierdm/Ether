import KeyboardEventHandler from 'react-keyboard-event-handler';

export const QwertyKey = () => {
  return (
    <div>
    <KeyboardEventHandler
      handleKeys={['a', 'b', 'c']}
      onKeyEvent={(key, e) => console.log(`Pressed ${key}`)} />
    </div>
  )
}
