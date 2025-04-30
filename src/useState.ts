import { getTitle } from "./title";

let state: unknown[] = [];
let stateIndex = 0;

function useState<T>(initialValue: T): [T, (value: T) => void] {
  const currentIndex = stateIndex;

  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  function setState(newValue: T) {
    state[currentIndex] = newValue;
    render();
  }
  stateIndex++;
  return [state[currentIndex] as T, setState];
}

function Counter() {
  const [count, setCount] = useState(0);

  const container = document.getElementById("app");

  if (!container) return;
  container.innerHTML = "";

  container.appendChild(getTitle("useState Simulation", "useState"));

  const p = document.createElement("p");
  p.innerText = `Count: ${count}`;

  const btn = document.createElement("button");
  btn.innerText = "Increment";
  btn.onclick = () => setCount(count + 1);

  container.appendChild(p);
  container.appendChild(btn);

  const link = document.getElementById("medium_link");
  if (link) {
    link.innerHTML = "";
    link.setAttribute(
      "href",
      "https://medium.com/@j.1514/simulate-react-hooks-usestate-8bbe9c04c3d7"
    );
    link.setAttribute("target", "_blank");
    link.textContent = "Read explanation on Medium";
  }
}

export function render() {
  stateIndex = 0;
  Counter();
}
