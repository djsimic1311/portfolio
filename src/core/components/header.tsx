import { Link } from "react-router-dom";
import { HeaderContainer, MobileNavigation } from "../../styles";
import { FunctionComponent, MouseEventHandler, useRef, useState } from "react";
import { useHeader } from "../../utils/hooks/useHeader";

export const Header: FunctionComponent = () => {
	const hamburgerRef = useRef<HTMLButtonElement>(null);
	const headerContainerRef = useRef<HTMLDivElement>(null);
	const mobileNavigationRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState<number>(0);

	const hamburgerClickHandler: MouseEventHandler = () => {
		hamburgerRef.current?.classList.toggle("clicked");
		mobileNavigationRef.current?.classList.toggle("show");
	};

  useHeader(setHeaderHeight, headerContainerRef);

	return (
		<header>
			<HeaderContainer ref={headerContainerRef}>
				<p className="header-title">
					<Link to="/">Djordje Simic | Web Developer</Link>
				</p>
				<button
					ref={hamburgerRef}
					className="hamburger"
					onClick={hamburgerClickHandler}
					aria-roledescription="toggle navigation menu"
				>
					<span className="first"></span>
					<span className="mid"></span>
					<span className="last"></span>
				</button>
				<nav>
					<Link to="/">About</Link>
					<Link to="/">Projects</Link>
				</nav>
			</HeaderContainer>
			<MobileNavigation ref={mobileNavigationRef}>
				<Link to="/">About</Link>
				<Link to="/">Projects</Link>
			</MobileNavigation>
			<div style={{ height: headerHeight }}></div>
		</header>
	);
};
