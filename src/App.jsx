import "./App.css";
import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerUser = async (e) => {
		e.preventDefault();
		setName(document.getElementById("name").value);
		setEmail(document.getElementById("email").value);
		setPassword(document.getElementById("password").value);
		const response = await fetch("http://localhost5000/hello", {
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ name, email, password }),
		});
		const data = response.json();
	};

	return (
		<>
			<h1>REGISTER</h1>
			<form onSubmit={registerUser}>
				<input
					type="text"
					name="email"
					id="name"
					placeholder="name"
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					type="password"
					id="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button type="submit" value="Register">
					REGISTER
				</button>
			</form>
		</>
	);
}

export default App;
