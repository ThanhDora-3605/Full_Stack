import { forwardRef } from "react";

function Button({ ref }) {
  return (
    <button
      className="bg-primary-color text-white px-4 py-2 rounded-md border-secondary-color hover:bg-secondary-color hover:text-white"
      ref={ref}
    >
      Click me
    </button>
  );
}
export default forwardRef(Button);
