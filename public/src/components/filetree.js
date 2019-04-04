import React from "react"
import TreeView from "./treeview"
import data from "./testtreeviewdata.json"


class FileTree extends React.Component {
	
	state = {
		items: data
	};

	isNode = (n) => n.isNode;
	getName = n => n.text;
	getKey = n => n.key;

	fileSelected = (path) => {
		console.log(path)
	}

	render() {
		return (
			<TreeView nodes={this.state.items} isNode={this.isNode} getName={this.getName} getKey={this.getKey} onFileSelected={this.fileSelected}  />
		)
	}

}

export default FileTree;