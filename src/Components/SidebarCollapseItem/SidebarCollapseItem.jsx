import React, { Component } from "react"
import { Accordion } from "react-bootstrap"

class SidebarCollapseItem extends Component {
	render() {
		const { name, icon, options, id } = this.props
		return (
			<Accordion>
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center">
						<i className={`text-white bx mr-2 ${icon}`}></i>
						<div className="">{name}</div>
					</div>
					<Accordion.Toggle as="div" eventKey={id} className="d-flex align-items-center">
						<i className="bx bxs-down-arrow text-white bx mr-2" style={{ fontSize: ".7rem" }}></i>
					</Accordion.Toggle>
				</div>
				<Accordion.Collapse eventKey={id}>
					<div className="d-flex flex-column ml-4 mt-2">
						{options &&
							options.map((option, ind) => (
								<div key={ind} className="cursor-pointer text-muted">
									{option.name}
								</div>
							))}
					</div>
				</Accordion.Collapse>
			</Accordion>
		)
	}
}

export default SidebarCollapseItem
