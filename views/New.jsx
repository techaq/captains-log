const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a New Log Entry</h1>
        <form action="/logs" method="POST">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title"
              required
            />
          </div>
          <div>
            <label htmlFor="entry">Log Entry:</label>
            <textarea
              id="entry"
              name="entry"
              placeholder="Write your log entry here"
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="shipIsBroken"
                name="shipIsBroken"
                value="true"
              />{" "}
              Is the ship broken?
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = New;
