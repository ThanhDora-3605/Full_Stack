import { useState } from "react";
import Content from "./components/content.jsx";

export default function MountUnmount() {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => setIsVisible(!isVisible);

  return (
    <div>
      {isVisible && <Content />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
