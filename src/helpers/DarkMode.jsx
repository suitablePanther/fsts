import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(null);
	const [currMode, setCurrMode] = useState("");
	// get the systeme theme & user theme
	const systemeTheme = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const userTheme = localStorage.getItem("theme");
	const htmlElemenet = document.documentElement;
	///

	useEffect(() => {
		if (userTheme === "dark" || (!("theme" in localStorage) && systemeTheme)) {
			setIsDarkMode(true);
			localStorage.setItem("theme", "dark");
			htmlElemenet.classList = userTheme;
			setCurrMode(userTheme);
			return;
		}
		return;
	}, []);
	///
	// when the userThem Change reassign the class to html element
	useEffect(() => {
		htmlElemenet.classList = userTheme;
		setCurrMode(userTheme);
	}, [userTheme]);
	///
	// Handle Click
	const handleMode = () => {
		toggleMode();
		htmlElemenet.classList = userTheme;
		setCurrMode(userTheme);
	};
	///
	// Toggle Function
	const toggleMode = () => {
		if (!isDarkMode) {
			setIsDarkMode(true);
			localStorage.setItem("theme", "dark");
			return;
		}
		setIsDarkMode(false);
		localStorage.setItem("theme", "light");
		return;
	};
	return (
		<div className=" right-4">
			<button
				type="button"
				className=" font-bold text-xl text-[#ffd900] dark:text-gray-300 "
				onClick={handleMode}
			>
				{isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun}/>}
			</button>
		</div>
	);
};

export default DarkMode;
