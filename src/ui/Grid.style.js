import styled from 'styled-components';

export const Menu = styled.article`
	grid-area: topmenu;
	width: 100%;
	border: 1px solid lightblue;
	text-align: center;
	font-size: 2.5rem;
	font-weight: 600;
`;

export const Sidebar = styled.aside`
	width: 100%;
	grid-area: sidebar;
	border: 1px solid yellow;
	text-align: center;
	font-size: 2.5rem;
	font-weight: 600;
`;

export const Content = styled.article`
	width: 100%;
	grid-area: body;
	border: 1px solid red;
	text-align: center;
	font-size: 2.5rem;
	font-weight: 600;
`;

export const Footer = styled.footer`
	width: 100%;
	grid-area: footer;
	border: 1px solid pink;
	text-align: center;
	font-size: 2.5rem;
	font-weight: 600;
`;

export const Grid = styled.section`
	height: 85vh;
	display: grid;
	grid:
		'topmenu topmenu' 4.2rem
		'sidebar body' auto
		'footer footer' 5rem/
		15rem auto;

    //! Responsive for Mobile //
    @media (max-width: 960px) {
      grid:
      'topmenu' 15%
      'sidebar' 10%
      'body' auto
      'footer' 15%/
      auto;
    }
`;
