const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <div>
        <h1>Log Entries</h1>
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              <form
                action={`/logs/${log._id}?_method=DELETE`}
                method="POST"
                style={{ display: "inline" }}
              >
                <input type="hidden" name="_method" value="DELETE" />
                <button type="submit">Delete</button>
              </form>
            </li>
          ))}
        </ul>
        <a href="/logs/new">Create New Log</a>
      </div>
    );
  }
}

module.exports = Index;
