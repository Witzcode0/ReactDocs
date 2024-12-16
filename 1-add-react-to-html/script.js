// Filename: script.js

// // create direct Dom element
// // const p = document.createElement('p');
// // p.className = "para";

// // p.textContent = "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial."

// // p.innerText = "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial."

// // append the direct DOM element to the DOM
// // document.querySelector("#root").append(p);---------------------------------------------------------------------------------

// render the React element to the DOM
const root = ReactDOM.createRoot(document.querySelector("#root"));

// create React element's
const h2 = React.createElement("h2", null, "React Element");

// Create the repeating sections in a loop
const sections = Array.from({ length: 5 }, (_, index) =>
  React.createElement("section", { key: index, style: { margin: "10px" } }, [
    React.createElement("img", {
      src: "https://placehold.co/200x200/EEE/31343C",
      alt: `200x200 - ${index + 1}`,
    }),
    React.createElement(
      "h1",
      {
        className: "heading",
        style: {
          color: "orange",
        },
      },
      `Title ${index + 1}`
    ),
    React.createElement(
      "p",
      { style: { width: "200px" } },
      "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial."
    ),
    React.createElement(
      "button",
      {
        className: "btn-dark",
        style: {
          color: "white",
          backgroundColor: "orange",
          padding: "10px",
          fontSize: "24px",
          border: "none",
          borderRadius: "10px",
        },
      },
      "Buy now"
    ),
  ])
);

// create container element
const container = React.createElement(
  "div",
  {
    className: "container",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
    },
  },
  [
    sections,
    // sections
  ]
);

root.render(container);
