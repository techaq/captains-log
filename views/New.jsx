const React = require("react");

function New() {
  return (
    <div>
      <h1> Create a New Log Entry </h1>
      <form action="/logs" method="POST">
        <input type="text" id="title" name="title" />
        <textarea id="entry" name="entry" />
        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

module.exports = New;
