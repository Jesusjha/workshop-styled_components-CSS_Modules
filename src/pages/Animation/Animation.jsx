import React from 'react';
import { Main } from '../../ui/MainContainer.style';
import { Title } from '../../ui/Texts.style';
import { Img, LogoAnimate } from '../../ui/Images.style';
import ViteLogo from '../../assets/vite.svg';
import ReactLogo from '../../assets/react.svg';
import { FlexLogo, FlexLinks } from '../../ui/Flex.style';
import { Button, SubmitButton } from '../../ui/Buttons.style';
import { useNavigate, Link } from 'react-router-dom';

const Animation = () => {
	const navigate = useNavigate();

	return (
		<Main>
			<Title>Images & Animations</Title>
			<FlexLogo>
				<Img src={ViteLogo} />
				<LogoAnimate src={ReactLogo} />
			</FlexLogo>
			<FlexLinks>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <SubmitButton as={Link} to='/grid'>Next page</SubmitButton>
      </FlexLinks>
		</Main>
	);
};

export default Animation;
