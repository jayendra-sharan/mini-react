const basePath =
  "https://raw.githubusercontent.com/jayendra-sharan/mini-react/refs/heads/main/src/__fileName__.ts";

export function getTitle(title: string, fileName: string = "") {
  const h1 = document.createElement("h1");
  h1.innerText = title;

  const author = document.createElement("a");
  author.id = "author-name";
  author.href = "https://jayendra.xyz";
  author.innerText = "Jayendra Sharan";
  author.target = "_blank";

  const div = document.createElement("div");
  div.appendChild(h1);
  div.appendChild(author);

  if (fileName) {
    const filePath = basePath.replace("__fileName__", fileName);

    const link = document.createElement("a");
    link.href = filePath;
    link.target = "_blank";
    link.innerText = "Click here to view code";

    div.style.paddingBottom = "20px";
    div.style.borderBottom = "1px solid #333";

    div.appendChild(link);
  }

  return div;
}
