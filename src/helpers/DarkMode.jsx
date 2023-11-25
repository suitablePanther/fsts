import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(null);
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
			return;
		}
		return;
	}, [htmlElemenet, systemeTheme, userTheme]);
	///
	// when the userThem Change reassign the class to html element
	useEffect(() => {
		htmlElemenet.classList = userTheme;
	}, [htmlElemenet, userTheme]);
	///
	// Handle Click
	const handleMode = () => {
		toggleMode();
		htmlElemenet.classList = userTheme;
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
				className=" font-bold text-xl text-main  "
				onClick={handleMode}
			>
				{isDarkMode ?  <FontAwesomeIcon icon={faSun}/>: <FontAwesomeIcon icon={faMoon} />}
			</button>
		</div>
	);
};

export default DarkMode;
