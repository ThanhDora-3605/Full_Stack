const container = ReactDOM.createRoot(document.getElementById("root"));
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("Hello World");
//     },
//   },
//   "Hello World"
// );

const h2 = React.createElement("h2", null, "ThanhDora");

// const div = React.createElement("div", null, h1, h2);
// const wrapper = React.createElement(React.Fragment, null, h1, h2);

const title = <h2>ThanhDora</h2>;
const classA = "classA";
const check = false;
const isAuth = true;

const wrapper = (
  <React.Fragment>
    {isAuth && (
      <h1
        id="title"
        className="title"
        onClick={() => {
          console.log("Hello World");
        }}
      >
        Hello World
      </h1>
    )}
    <h2 className={check ? classA : "abc"}>ThanhDora</h2>
    {title}
    <button
      onClick={() => {
        console.log("Hello World");
      }}
    >
      Click me
    </button>
  </React.Fragment>
);

container.render(wrapper);

//Fragment
//JSX = JavaScript XML (TRình duyệt ko hiểu)
// JavaScript Component (Babel, SWC,...) --> Trình duyệt hiểu
//ReactJS: JSX --> React Element --> React DOM --> Browser
