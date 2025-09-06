import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url",
    text: "some texg",
  },
  {
    id: 2,
    url: "some url",
    text: "some texg",
  },
  {
    id: 3,
    url: "some url",
    text: "some texg",
  },
];
function Component() {
  const [text, setText] = useState("shakeAndBake");
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <h2
        className="btn btn-center"
        onClick={() => {
          // setText(1);
          setNumber(23);
          // setList([1, 3]);
          setLinks([...links, { id: 4, url: "hello", text: "hello" }]);
        }}
      >
        click me
      </h2>
    </div>
  );
}
export default Component;
