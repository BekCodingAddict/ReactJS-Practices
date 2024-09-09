import Counter from "./Counter";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount={"top"}
      /> */}

      <Counter>
        <Counter.Label>My Super Flexibl Counter</Counter.Label>
        <Counter.Increase icon="➕" />
        <Counter.Count />
        <Counter.Decrease icon="➖" />
      </Counter>
    </div>
  );
}
