import "./style.css";
import { render as homeRender } from "./home";
import { render as useStateRender } from "./useState";

type RenderFnType = {
  [key: string]: () => void;
};

const renderFn: RenderFnType = {
  home: homeRender,
  "use-state": useStateRender,
};

const links = [
  {
    id: "home",
    name: "Home",
    active: true,
    blogLink: "/",
  },
  {
    id: "use-state",
    name: "useState",
    active: true,
    blogLink:
      "https://medium.com/@j.1514/simulate-react-hooks-usestate-8bbe9c04c3d7",
  },
  {
    id: "use-effect",
    name: "useEffect",
    active: false,
  },
  {
    id: "use-reducer",
    name: "useReducer",
    active: false,
  },
  {
    id: "use-memo",
    name: "useMemo",
    active: false,
  },
  {
    id: "use-ref",
    name: "useRef",
    active: false,
  },
  {
    id: "use-context",
    name: "useContext",
    active: false,
  },
];

(() => {
  const ul = document.createElement("ul");
  links
    .filter((link) => link.active)
    .map((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${link.id}`;
      a.id = link.id;
      a.innerText = link.name;

      a.addEventListener("click", (e) => {
        e.preventDefault();
        renderFn[link.id]();
        window.location.replace(`#${link.id}`);
      });

      li.appendChild(a);
      ul.appendChild(li);
    });

  const footer = document.getElementById("footer");
  footer?.appendChild(ul);

  const currentLocation = window.location.hash.slice(1);
  const render = renderFn[currentLocation] || renderFn["home"];
  render();
  const link = document.getElementById("medium_link");
  link && (link.innerHTML = "");
})();
