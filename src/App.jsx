import React, { Component } from "react"
import "./styles/main.scss"
import "simplebar"
import "simplebar/dist/simplebar.css"
import "boxicons"
import "boxicons/css/boxicons.min.css"

import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<div className="row">
					<Sidebar />
					<div className="col-sm-10" data-simplebar style={{ height: "93vh" }}>
						<div className="container-fluid my-3">
							<div className="h3 font-weight-bold">Sidebar</div>
							<button className="btn btn-primary shadow">Toggle</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
