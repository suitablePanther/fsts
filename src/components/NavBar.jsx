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
		navBar.classList +=
			" flex sm:flex-row flex-col bg-slate-100 dark:text-black w-[40vw]";
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
			"hidden sm:flex pr-0 sm:pr-10 gap-3 items-center sm:bg-transparent sm:w-fit";
		return;
	};
	///
	return (
		<header
			className="flex justify-between w-full absolute z-10
		 md:text-xl m-auto font-semibold"
		>
			<div className="w-16 flex">
				<span className=" pl-1 text-main text-4xl uppercase ">fst</span>
				<div className="self-end flex flex-col">
				<span className=" font-mono">student </span>
				{/* <span className="lowercase leading-3">settat</span> */}
				</div>
			</div>
			<span
				ref={pointsRef}
				className="sm:hidden block text-2xl dark:text-white pr-5 font-bold  cursor-pointer"
				onClick={handleOpen}
			>
				<FontAwesomeIcon icon={faBars} />
			</span>
			<nav
				ref={navRef}
				className="hidden sm:flex sm:pr-10 sm:bg-transparent gap-3 items-center sm:w-fit"
			>
				<span
					ref={xRef}
					className="sm:hidden text-2xl cursor-pointer pr-5 self-end"
					onClick={handleClose}
				>
					<FontAwesomeIcon icon={faXmark} />
				</span>
				{[
					["Home", "/"],
					["Docs", "/docs"],
					["learning", "/learning"],
					["About", "/about"],
				].map(([title, path], index) => {
					return (
						<NavLink
							className=" hover:pl-5 sm:hover:pl-4 w-full pl-4 relative p-2 duration-200"
							key={index}
							to={path}
						>
							{title}
						</NavLink>
					);
				})}
				<DarkMode />
			</nav>
		</header>
	);
};

export default NavBar;
