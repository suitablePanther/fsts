import { NavLink } from "react-router-dom";
import { parents } from "./data";
import _ from 'lodash'
const Learning = () => {
	const handleClick = (id) => {
		const parent = _.find(parents, { id })
		console.log(parent)
		return (parent.isShow = !parent.isShow);
	};

	return (
		<section>
			<div className="contain flex ">
				<aside className="sticky top-1 grow max-w-[150px] bg-green-400 h-screen flex flex-col justify-center items-start">
					{parents.map((parent) => {
						let { id, name, isShow, children } = parent;
						return (
							<div key={id}>
								<NavLink className="block" onClick={() => handleClick(id)}>
									{name}
								</NavLink>
								{isShow && (
									<div className="children duration-1000 ease-linear">
										{children.map((child) => {
											const { id, name } = child;
											return (
												<span key={id} className="block">
													{name}
												</span>
											);
										})}
									</div>
								)}
							</div>
						);
					})}
				</aside>
				<main className="bg-red-500">HELLO MAIN</main>
			</div>
		</section>
	);
};

export default Learning;
