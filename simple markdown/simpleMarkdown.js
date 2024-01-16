const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const placeholerValue = `# Welcome to my simple markdown previewer!

## This is a sub-heading

### And here is some other cool stuff:

Here is some code, \`<div></div>\`, between two backticks

\`\`\`
//this is multi-line code:

function another Example(firstLine, lastLine) {

if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {

return multiLineCode;

}

}
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and

> Block Quotes!

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
-  That look like this.

  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

$(window).on("load", function () {
  editor.innerHTML = placeholerValue;
  editor.value = placeholerValue;
  preview.innerHTML = marked.parse(placeholerValue);
});
function markDown() {
  let editorValue = editor.value;
  editor.innerText = editorValue;
  preview.innerHTML = marked.parse(editorValue);
}

function maximize(index) {
  let icon = $(".fa-solid")[index];
  if (icon.classList.contains("fa-maximize")) {
    icon.classList.remove("fa-maximize");
  } else {
    icon.classList.add("fa-maximize");
  }
  icon.classList.toggle("fa-down-left-and-up-right-to-center");
  if (index === 0) {
    $("section")[1].classList.toggle("hide");
    editor.classList.toggle("editor");
  } else {
    $("section")[0].classList.toggle("hide");
  }
}
