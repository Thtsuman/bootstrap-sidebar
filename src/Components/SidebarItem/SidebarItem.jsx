import React, { Component } from "react"

class SidebarItem extends Component {
	render() {
		const { name, icon} = this.props
		return (
			<div className="d-flex align-items-center my-2">
				<i className={`text-white mr-2 ${icon}`}></i>
				<div className="">{name}</div>
			</div>
		)
	}
}

export default SidebarItem
