import React from "react";
import FontAwesome from "react-fontawesome";
import "./treeview.css"

const Leaf = ({name, parents, onFileSelected}) => (
	<button className="leaf" onClick={ e => onFileSelected(parents.concat(name)) }><FontAwesome name='file' /> {name}</button>
);

class Node extends React.Component {

	state = {
		expanded : false
	}

	toggleExpanded(e) {
		e.preventDefault();
		this.setState(state => ({expanded: !state.expanded}));
	}

	render() {
		let {name,children} = this.props;
		return (
			<div className={this.state.expanded? "node expanded": "node"}>
				<div>
					<button onClick={this.toggleExpanded.bind(this)}>
						{this.state.expanded? <FontAwesome name='folder-open' /> : <FontAwesome name='folder' />} {name}
					</button>
				</div>
				<div className="children">
				{children}
				</div>
			</div>	
		)
	}
}

function buildNodes(nodes, parents, isNode, getName, getKey, onFileSelected) {
	return nodes.map(n => isNode(n)? <Node name={getName(n)} key={getKey(n)}>{buildNodes(n.children, parents.concat(getName(n)), isNode, getName, getKey, onFileSelected)}</Node> 
								   : <Leaf name={getName(n)} key={getKey(n)} parents={parents} onFileSelected={onFileSelected} />)
}

const TreeView = ({nodes, isNode, getName, getKey, onFileSelected}) => (
	<div className="treeview">{buildNodes(nodes, [], isNode, getName, getKey, onFileSelected)}</div>
);

export default TreeView;