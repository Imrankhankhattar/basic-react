const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const parent = React.createElement("div", { id: 'parent' },
    [React.createElement("div", { id: 'child1' },
        [
            React.createElement("h1", { id: 'heading' }, "Hello World"),
            React.createElement("h2", { id: 'heading' }, "Hello World")
        ]
    ),
    React.createElement("div", { id: 'child2' },
        [
            React.createElement("h1", { id: 'heading' }, "Hello World"),
            React.createElement("h2", { id: 'heading' }, "Hello World")
        ]
    )]
)
// 1:8:00
root.render(parent);