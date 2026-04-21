const classname = [
  { id: 1, name: "jide" },
  { id: 2, name: "pluto" },
  { id: 3, name: "jide" },
  { id: 4, name: "jide" },
  { id: 5, name: "jide" },
  { id: 6, name: "jide" },
];

// const classname = ["jide", "pluto", "white", "mario", "praise", "basit"];

export default function Mapping() {
  return (
    <div>
      {classname.map((name) => (
        <p key={name.id}>{name.name}</p>
      ))}
    </div>
  );
}
