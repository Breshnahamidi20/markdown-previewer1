import React, { useState } from 'react';


import { marked } from 'marked';


import 'tailwindcss/tailwind.css';

const defaultMarkdown = `# Welcome to my Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
[Link to Google](https://www.google.com)

Inline code: \<div></div>\

\\\`
// This is a code block:
function helloWorld() {
  console.log("Hello, world!");
}
\\\`

- List item 1
- List item 2
- List item 3

> This is a blockquote!

![Markdown Logo](https://markdown-here.com/img/icon256.png)

*Bold text*
`;

  function App( ) {
    const [text, setText] =   useState(defaultMarkdown);

     const handleTextChange =   (event) => {
    setText(event.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(text, { breaks: true, gfm: true }) }; // Enable GitHub flavored markdown and line breaks
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <textarea
        id="editor"
        value={text}
        onChange={handleTextChange}
        className="w-full md:w-1/2 p-3 rounded-md shadow-md border border-gray-300 resize-none h-64"
      />
      <div
        id="preview"
        className="w-full md:w-1/2 mt-6 p-3 rounded-md shadow-md bg-white border border-gray-300"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
}

    export default App;