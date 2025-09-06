type Basic = {
  type: "basic";
  name: string;
  // email?: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type Props = Basic | Advanced;

function Component(props: Props): JSX.Element {
  const { type, name } = props;

  const className = type === "basic" ? "alert-success" : "alert-danger";
  if (type === "basic") {
    return (
      <div className="alert">
        <div className={className}>
          <h2>User: {name}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="alert">
      <div className={className}>
        <h2>User: {name}</h2>
        <h2> Email: {props.email}</h2>
      </div>
    </div>
  );
}
export default Component;
