## MAIN FEEDBACK

1. I think Stylable needs better feature parity with Sass.
   - Something that Sass has that is pretty useful is [color functions](https://sass-lang.com/documentation/modules/color) like `lighten` and `darken`. It seems that Stylable does not have this feature. Here's a use case I don't know how to implement without color functions: a button mixin which darkens the button slightly when the user hovers over it.
   - Maps/lists and the ability to loop over them. E.g. you have 7 theme colors and want to generate a button variant for each of them.
2. Once feature parity with Sass is improved, I think Stylable will be a value-add over Sass Modules. But I think it is a small value add for most developers. I also expect Stylable to be more difficult to learn than Sass Modules.
   - For Stylable to gain widespread adoption, the value add over Sass must be larger and more obvious.
3. Using Stylable in the context of React, it seems like each component now has 2 API surfaces: the React API surface (props) and the Stylable API surface (you can import the component's stylesheet and customize the appearance that way). This seems confusing to me. Should something like the variant of a button be set through a React prop or through a `.st.css` file?

## Things I liked

1. More structured module system and better compile-time checks than Sass.
2. Great VS Code integration.
3. Generally well documented.

## Docs

1. Docs seem a bit too focused on how to get started from a premade Stylable boilerplate. I felt like I had to jump around the docs too much to get everything set up with Next.js and TypeScript.
2. The [Project Commons doc](https://stylable.io/docs/guides/project-commons) was confusing to me. It could be improved by explaining the code sample that is shown.
3. The documentation on variables seems to be "hidden" in the API section of the site [here](https://stylable.io/docs/references/st-variables). I think this should be introduced much earlier on in the docs because variables are so fundamental.

## VS Code Integration

1. `.st.css` files have the default icon in the explorer, which makes it look like an unrecognized file type.
2. I renamed a class via the F2 shortcut and it did not update usages of that class in another file (which imported the class).
3. Another time, I tried renaming a class via the F2 shortcut and it allowed me to type in the new name, but nothing changed when I pressed Enter.

## Bugs

1. It seems to be broken with the `app` directory in Next.js 13: https://github.com/wix/stylable/issues/2773
2. The VS Code extension produced this error when I typed `@st-import [colorBody] from ''`:

   ```text
   Message: Request textDocument/documentColor failed with message: Can't resolve '' in '/home/srmagura/Documents/stylable-testbed-2/src/components'
   Code: -32603
   ```

3. Another VS Code extension error:

   ```text
   Message: Request textDocument/signatureHelp failed with message: Cannot read properties of undefined (reading 'type')
   Code: -32603
   ```

   For the code

   ```css
   .root {
     -st-states: active,
                 variant()

     border-radius: 0.25rem;
     padding: 0.25rem 0.5rem;
   }
   ```

## Problems I hit that probably weren't bugs

1. My `.st.css` files generate namespaces with lots of numbers at the end, like `Home3386628209`. Is this expected? I thought one of the benefits of Stylable was that I was supposed to get easily-readable BEM-style class names by default.
2. I added a new variable `containerPaddingX` to `project.st.css`, used it in `Navbar.st.css`, and then saved both files at once. The Webpack plugin printed the error `[error: 05015]: cannot resolve imported symbol "containerPaddingX" from stylesheet "../styles/project.st.css"`. When I restarted the Next dev server, there were no errors. It seems like this could be a problem where the file watcher didn't wait for both files to be saved before performing its compilation.
3. I got the warning `[warning: 00002]: unscoped class "container" will affect all elements of the same type in the document` from the following code, and I do not understand why. If I change `.container` to `.container1`, the warning goes away.

   ```css
   @st-import [container] from '../project.st.css';

   .container {
     -st-extends: container;
   }
   ```

4. My button has a weird generated class name: `Button774907051---variant-9-secondary`. I'm not sure why there are three hyphens in a row or where the number 9 comes from.

## Feature Requests

1. Would like `//` comments in `.st.css`. Sass allows this.
2. It would feel a bit more natural me to read variables using `$` like other languages. E.g. if the variable is `foobar`, I could do `color: $foobar;` instead of `color: value(foobar);`. On the other hand, the `value()` syntax is very similar to CSS variables.

## DX Concerns

1. I often like to define multiple small, related React components in the same file. But it seems like Stylable works best if you have exactly one React component per `.tsx` file. Is one component per file the recommended pattern? Or would you suggest importing multiple `.st.css` files into a single `.tsx` file?
2. The approach described in the [Component Variants](https://stylable.io/docs/guides/component-variants) doc seems inconvenient to me. I think people will want to write `<Button variant="primary">...</Button>`, but the document seems to suggest that I need to import the `.buttonPrimary` class from `Button.st.css` and then use `-st-extends` to attach it to a local class name. That seems like a lot of ceremony for something like button variants, which will be used very frequently throughout an application.
3. It was surprising to me that I had to use `value()` here to pass a color to a mixin: `-st-mixin: buttonMixin(color value(primary500));`
4. Overall, I found the way mixins worked to be pretty confusing, especially how parameters need to be passed to mixins. The way mixins work in Sass makes a lot more sense to me.
