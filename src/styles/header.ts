import styled from "styled-components";
import { breakpoints } from "./globalStyledComponents";

export const HeaderContainer = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
  gap: 20px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: transform 0.2s ease;
	background-color: white;
	z-index: 100;
  border-bottom: 1px solid lightgray;

	.hamburger {
		height: 1.5rem;
		width: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: white;
		cursor: pointer;
		border: none;
    flex-shrink: 0;
		span {
			display: block;
			height: 2px;
			width: 100%;
			border-radius: 1000px;
			background-color: black;
			transition: all 0.4s ease;
		}

		&.clicked {
			.first {
				transform: translateY(6.6px) rotate(27deg); //sue me
			}
			.last {
				transform: translateY(-6.6px) rotate(-27deg); //sue me
			}
			.mid {
				opacity: 0;
			}
		}
	}

	nav {
		display: none;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    a {
      color: black;
      text-decoration: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 1px;
        width: 100%;
        max-width: 0;
        background-color: black;
        transition: max-width .2s ease;
      }
      &:hover {
        &::after {
          max-width: 100%;
        }
      }
    }
	}
	@media (${breakpoints.tablet}) {
		padding: 1.5rem 2rem;
	}
	@media (${breakpoints.laptop}) {
		padding: 1.5rem 3rem;
    nav {
      display: flex;
    }
		.hamburger {
			display: none;
		}
	}
	@media (${breakpoints.desktop}) {
		padding: 1.5rem 4rem;
	}

	&.hide {
		transform: translateY(-100%);
	}

	.header-title {
		font-size: 1.5rem;
		line-height: 100%;
		a {
			color: black;
			text-decoration: none;
		}
	}
`;

export const MobileNavigation = styled.nav`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
  z-index: 99;
  transition: transform .2s ease;
  border-bottom: 1px solid lightgray;
	a {
		display: flex;
		padding: 1.5rem;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: white;
    color: black;
    text-decoration: none;
    font-size: 1.3rem;
	}
  &.show {
    transform: translateY(100%);
  }
  @media (${breakpoints.laptop}) {
		display: none;
	}
`;
