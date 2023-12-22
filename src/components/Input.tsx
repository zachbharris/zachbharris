import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
