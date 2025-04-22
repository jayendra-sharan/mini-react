import { getTitle } from "./title";

export function render() {
  const container = document.getElementById('app');
  if (!container) return;
  container.innerHTML = '';

  container.appendChild(getTitle('Mini React'));
}
