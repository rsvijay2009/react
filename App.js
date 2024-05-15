const heading = React.createElement("h1", {id: "heading"}, "Hello world from react!");
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
*
<div id="parent">
    <div id="child">
        <h1> Nested react element h1</h1>
        <h2> Nested react element h2</h2>
    </div>
</div>

*
*/

const nestedHtml = React.createElement('div', {id: "parent"}, 
React.createElement('div', {id: "child"},
[
    React.createElement('h1', {}, 'Nested react element h1'),
    React.createElement('h2', {}, 'Nested react element h2')
]
));

root.render(nestedHtml);