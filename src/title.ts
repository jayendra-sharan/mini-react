export function getTitle(title: string) {
  const h1 = document.createElement('h1');
  h1.innerText = title;

  const author = document.createElement('p');
  author.innerText = '@jayendra-sharan';

  const div = document.createElement('div');
  div.appendChild(h1);
  div.appendChild(author);

  return div;
}
