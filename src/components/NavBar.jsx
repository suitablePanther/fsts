import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const NavBar = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(null);
	const [isNavBarShownInSmallScreen, setIsNavBarShownInSmallScreen] =
		useState(false);
	useEffect(() => {
		// defining handleCheck
		function handleCheck() {
			if (window.innerWidth < 640) {
				setIsSmallScreen(true);
			} else {
				setIsSmallScreen(false);
			}
		}
		//
		handleCheck(); // apply
		window.addEventListener("resize", handleCheck); // listen for resize event
		return () => window.removeEventListener("resize", handleCheck);
	}, []);
	///
	return (
		<header
			className="flex z-50 justify-between w-full sm:shadow-xl sm:bg-main/20 sm:shadow-main/10  fixed right-1/2 translate-x-1/2 
		 md:text-xl m-auto font-semibold "
		>
			<div className="relative container flex justify-between">
				<div className="flex">
					<span className="w-fit pl-1 text-main text-4xl uppercase">
						fst
						<span className="font-mono text-base lowercase text-white">
							Talib
						</span>
					</span>
					<div className="self-end absolute left-full flex flex-col"></div>
				</div>
				<span className="sm:hidden flex gap-3 text-xl pt-2 text-white pr-7 font-bold cursor-pointer">
					<FontAwesomeIcon
						icon={faEllipsisVertical}
						onClick={() => {
							setIsNavBarShownInSmallScreen(!isNavBarShownInSmallScreen);
							return;
						}}
					/>
					{/* <FontAwesomeIcon icon={faGithub} /> */}
				</span>
				{isNavBarShownInSmallScreen && isSmallScreen && (
					<nav className="absolute top-[120%] right-4 bg-main/60 flex flex-col py-2 w-32 items-center rounded-lg">
						<span
							className="absolute h-0 w-0 border-[12px] border-l-transparent 
						border-t-transparent border-r-transparent -top-[23px] right-1 border-main/60"
						></span>
						<Navigating />
					</nav>
				)}
				{isSmallScreen || (
					<nav className="hidden sm:flex gap-3 items-center sm:w-fit">
						<Navigating />
					</nav>
				)}
			</div>
		</header>
	);
};

const Navigating = () => {
	return [
		["Home", "/"],
		["Docs", "/docs"],
		["cours", "/coursmap"],
		["About", "/about"],
	].map(([title, path], index) => {
		return (
			<NavLink
				className="capitalize hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 p-2 duration-200"
				key={index}
				to={path}
			>
				{title}
			</NavLink>
		);
	});
};

export default NavBar;
