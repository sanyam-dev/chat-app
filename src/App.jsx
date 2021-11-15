import "./App.css";
import React, { useState } from "react";
import Forms from "./components/Form/Forms";

function App() {
	const [user, setUser] = useState({});

	return (<Forms setUser={setUser} userData={user} />)
}

export default App;
