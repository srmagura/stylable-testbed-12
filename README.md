## Docs

1. Docs seem a bit too focused on how to get started from a premade Stylable boilerplate. I felt like I had to jump around the docs too much to get everything set up with Next.js and TypeScript.

## VS Code Integration

1. `.st.css` files have the default icon in the explorer, which makes it look like an unrecognized file type.
2. Need automatic formatting like Prettier 🤑.

## Bugs

1. It seems to be broken with Next.js 13: https://github.com/wix/stylable/issues/2773

## Problems I hit that weren't bugs

1. My `.st.css` files generate namespaces with lots of numbers at the end, like `Home3386628209`. Is this expected? I thought one of the benefits of Stylable was that I was supposed to get easily-readable BEM-style class names by default.
