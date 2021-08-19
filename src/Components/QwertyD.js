import KeyboardEventHandler from "react-keyboard-event-handler";

export const QwertyD = () => {
  return (
    <div>
       <KeyboardEventHandler
        handleKeys={["s"]}
        onKeyEvent={(key, e) => console.log(`Pressed ${key}`)}
      />  
    </div>
  )
}
