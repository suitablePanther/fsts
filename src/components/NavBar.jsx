import { NavLink } from "react-router-dom";
import DarkMode from "../helpers/DarkMode";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
	// refs
	const navRef = useRef(null);
	const pointsRef = useRef(null);
	const xRef = useRef(null);
	///
	// handleOpen
	const handleOpen = (e) => {
		e.currentTarget.classList.remove("block");
		e.currentTarget.classList.add("hidden");
		const navBar = navRef.current;
		navBar.classList.remove("hidden");
		navBar.classList += " flex sm:flex-row flex-col dark:text-black w-[40vw]";
		xRef.current.classList.remove("hidden");
		return;
	};
	///
	// handleClose
	const handleClose = (e) => {
		const points = pointsRef.current;
		points.classList.remove("hidden");
		points.classList.add("block");
		e.currentTarget.parentElement.classList.add("hidden");

		const navBar = navRef.current;
		navBar.classList =
			"hidden sm:flex gap-3 bg-main/20 sm:bg-transparent items-center sm:w-fit";
		return;
	};
	///
	return (
		<header
			className="flex justify-between w-full sm:shadow-xl sm:bg-main/20 sm:shadow-main/10  fixed right-1/2 translate-x-1/2 z-10
		 md:text-xl m-auto font-semibold "
		>
			<div className="container flex justify-between">
				<div className="flex">
					<span className="w-fit pl-1 text-main text-4xl uppercase">
						fst
						<span className="font-mono text-base lowercase text-white">
							Talib
						</span>
					</span>
					<div className="self-end absolute left-full flex flex-col">
						{/* <span className="lowercase leading-3">settat</span> */}
					</div>
				</div>
				<span
					ref={pointsRef}
					className="sm:hidden block text-2xl text-white pr-5 font-bold cursor-pointer"
					onClick={handleOpen}
				>
					<FontAwesomeIcon icon={faBars} />
				</span>
				<nav
					ref={navRef}
					className="hidden sm:flex gap-3 bg-main/20 sm:bg-transparent items-center sm:w-fit"
				>
					<span
						ref={xRef}
						className="sm:hidden text-2xl text-white cursor-pointer pr-5 self-end"
						onClick={handleClose}
					>
						<FontAwesomeIcon icon={faXmark} />
					</span>
					{[
						["Home", "/"],
						["Docs", "/docs"],
						["cours", "/cours"],
						["About", "/about"],
					].map(([title, path], index) => {
						return (
							<NavLink
								className=" hover:pl-5 text-white sm:hover:pl-4 w-full pl-4 relative p-2 duration-200"
								key={index}
								to={path}
							>
								{title}
							</NavLink>
						);
					})}
					<DarkMode />
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
