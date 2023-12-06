/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ courTd }) => {
	return (
		<>
			{courTd.map((CT) => {
				const { id, title, description, docs } = CT;
				return (
					<article key={id} className="py-9  ">
						<h2 className="text-blue px-3">{title};</h2>
						<p className="pt-2 first-letter:pl-2 pl-5 text-justify max-w-[550px]">
							{description}
						</p>
						<div className="grid grid-cols-auto gap-6 place-items-center px-5 p-9 ">
							{docs.map((module) => {
								const { id, moduleName, imgURL, doc } = module;
								return (
									<div
										key={id}
										className=" group min-w-[300px]  bg-stone-200/50 bg shadow-md shadow-[#eee3]
											sm:hover:-translate-y-1 duration-200 ease-linear"
									>
										<div className=" flex justify-center py-6 ">
											<img
												src={imgURL}
												className=" h-full w-20 object-contain"
											/>
										</div>
										<div className="relative bg-gray-200/90  bg-stone-600">
											<h4
												className="relative py-2 px-2  w-fit text-white text-base sm:text-xl z-10 tr
											 before:absolute before:h-full before:w-[130%] before:top-0 before:left-0 before:bg-stone-900 before:z-[-1]"
											>
												{moduleName}
												<span className="absolute top-0 h-full block w-10 -right-10 bg-stone-800 -skew-x-[30deg]  z-[-1]"></span>
											</h4>
											<a
												href={doc}
												download
												className="group-hover:animate-bounce absolute right-2 top-1/2 -translate-y-1/2 "
											>
												<FontAwesomeIcon icon={faDownload} />
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</article>
				);
			})}
		</>
	);
};

export default MainTemplate;
