import React from "react";

import data from "./dummy-data";

import List from "./components/List";

class App extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: data
    });
  }

  insertItem = (id, idToInsert, after) => {
    if (id !== idToInsert) {
      let removed = null;
      let removedId = null;

      let newArr = this.state.items.reduce((arr, i) => {
        if (i.id.toString() === idToInsert) {
          removed = i;
          return arr;
        }
        if (i.id.toString() === id) {
          if (after) {
            arr.push(i);
            arr.push(null);
            removedId = arr.length - 1;
          } else {
            arr.push(null);
            removedId = arr.length - 1;
            arr.push(i);
          }
        } else {
          arr.push(i);
        }
        return arr;
      }, []);

      newArr[removedId] = removed;

      this.setState({
        items: newArr
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Drag & Drop App </h1>
        <List insertItem={this.insertItem} items={this.state.items} />
      </div>
    );
  }
}

export default App;
