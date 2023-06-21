import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { AuthComponent } from "./Auth";

const Navbar = () => {
	const navButtons = [
		{
			title: "Home",
			href: "/",
			icon: process.env.PUBLIC_URL + "/HomeIcon.svg",
			admin: 0,
		},
		{
			title: "Equipes",
			href: "/equipes",
			icon: process.env.PUBLIC_URL + "/TeamIcon.svg",
			admin: 0,
		},
		{
			title: "Admin",
			href: "/admin",
			icon: process.env.PUBLIC_URL + "/AdminIcon.svg",
			admin: 1,
		},
	];

	return (
		<>
			<nav
				className={`
        bg-primary-dark
        flex
        h-20
        items-center
		px-4
		
      `}
			>
				<img
					className="h-12 mx-2"
					src={process.env.PUBLIC_URL + "/RamoLogo.svg"}
					alt="Logo IEEE"
				/>
				<h1 className="text-white text-xl font-bold md:hidden ms-1">IEEE</h1>
				<h1 className="text-white text-xl font-bold hidden md:block ms-1">
					Ramo Estudantil IEEE
				</h1>
				<ul className="flex ml-14">
					{navButtons.map((b) => {
						if (!b.admin) {
							return (
								<NavButton
									key={b.title}
									title={b.title}
									icon={b.icon}
									href={b.href}
								/>
							);
						} else {
							return (
								<AuthComponent key={b.title} permissions={["admin"]}>
									<NavButton
										key={b.title}
										title={b.title}
										icon={b.icon}
										href={b.href}
									/>
								</AuthComponent>
							);
						}
					})}
				</ul>

				<ul className="flex items-center ml-auto text-white">
					{/* <li>
            <img className="h-10 m-2" src={SettingsIcon} alt="Configurações" />
          </li> */}

					<li className="cursor-pointer">
						<Link to="/profile" reloadDocument={true}>
							<div className="flex items-center justify-center m-2">
								<img
									src={process.env.PUBLIC_URL + "/UserCircle.svg"}
									alt="Círculo do Ícone de usuário"
									className="h-10"
								/>
								<img
									src={process.env.PUBLIC_URL + "/UserIcon.svg"}
									alt="Ícone de usuário"
									className="absolute h-6"
								/>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
