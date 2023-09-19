const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;

    return (
      <div>
        <h1>Edit Log Entry</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <input type="text" name="title" defaultValue={log.title} />
          <textarea name="entry" defaultValue={log.entry}></textarea>
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultChecked={log.shipIsBroken}
          />
          <input type="hidden" name="_method" value="PUT" />
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
