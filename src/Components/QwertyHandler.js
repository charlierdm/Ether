import KeyboardEventHandler from "react-keyboard-event-handler";

export const QwertyHandler = ({ setKeyPress }) => {
  return (
    <KeyboardEventHandler
      handleKeys={["a", "s", "d"]}
      onKeyEvent={(key, e) => {
        setKeyPress(key);
      }}
    />
  );
};
