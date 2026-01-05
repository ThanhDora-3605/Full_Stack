import { useState } from "react";
type UserType = {
  id: number;
  name: string;
};
type Props = {
  name: string;
  email: string;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export default function User({ name, email, setUser }: Props) {
  const [value, setValue] = useState("");
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setUser({ id: 1, name: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeValue} />
        <button>Click me</button>
      </form>
    </div>
  );
}
