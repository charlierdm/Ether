import KeyboardEventHandler from "react-keyboard-event-handler";

export const QwertyA = () => {
  return (
    <div>
      <KeyboardEventHandler
        handleKeys={["a"]}
        onKeyEvent={(key, e) => console.log(`Pressed ${key}`)}
      />  
    </div>
  );
};
