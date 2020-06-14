import React, { Component } from "react"
import SidebarItem from "../SidebarItem/SidebarItem"
import SidebarCollapseItem from "../SidebarCollapseItem/SidebarCollapseItem"

class Sidebar extends Component {
	state = {
		sidebar: [
			{
				type: "collapse",
				name: "Dashboard",
				icon: "bx bxs-dashboard",
				options: [{ name: "Dashboard 1" }, { name: "Dashboard 2" }],
			},
			{ type: "item", name: "Home", icon: "bx bxs-home-circle" },
			{ type: "item", name: "Profile", icon: "bx bx-user" },
			{
				type: "collapse",
				name: "Group",
				icon: "bx bxs-group",
				options: [{ name: "Front End" }, { name: "Back End" }, { name: "Mobile Dev" }],
			},
			{ type: "item", name: "Settings", icon: "bx bxs-message-square-check" },
		],
	}

	render() {
		return (
			<div
				className="d-none d-sm-block col-sm-2 bg-secondary text-white"
				data-simplebar
				style={{ height: "93vh" }}
			>
				<div className="d-flex flex-column justify-content-between">
					<div className="options mt-4">
						{this.state.sidebar &&
							this.state.sidebar.map((item, i) => {
								switch (item.type) {
									case "item":
										return <SidebarItem {...item} key={i} id={i} />
									case "collapse":
										return <SidebarCollapseItem {...item} key={i} id={i} />
									default:
										return <SidebarItem {...item} key={i} id={i} />
								}
							})}
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar
