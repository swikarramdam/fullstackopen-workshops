const rootElement = document.getElementById("root"); //getting the root element
const reactRoot = ReactDOM.createRoot(rootElement); //Making the DOM element
// React needs to attach itself to some part of the real DOM — and it does that through this root.

const SayHello = () => {
  return React.createElement("p", { class: "Swikar" }, `Hello ${props.name}`);
};

reactRoot.render(React.createElement(App)); //Tells React to render your App into that root.
