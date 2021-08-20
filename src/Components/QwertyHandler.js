import KeyboardEventHandler from "react-keyboard-event-handler";

export const QwertyHandler = () => {
  return (
    <KeyboardEventHandler
      handleKeys={["a", "s", "d"]}
      onKeyEvent={(key, e) => console.log(`Pressed ${key}`)}
    />
  );
};
