const React = require("react");

function Show(props) {
  const { log } = props;

  return (
    <div>
      <h1>{log.title}</h1>
      <p>Entry: {log.entry}</p>
      <p>Ship is Broken: {log.shipIsBroken ? "Yes" : "No"}</p>
      <p>Date Created: {log.createdAt}</p>{" "}
      {/* Display timestamp if available */}
      <a href="/logs">Back to Index</a>
    </div>
  );
}

module.exports = Show;
