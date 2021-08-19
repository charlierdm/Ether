import KeyboardEventHandler from "react-keyboard-event-handler";

export const QwertyS = () => {
  return (
    <div>
       <KeyboardEventHandler
        handleKeys={["d"]}
        onKeyEvent={(key, e) => console.log(`Pressed ${key}`)}
      />  
    </div>
  )
}
