import React from 'react';
import { Main, Title, SubTitle, TextBody, TextLink } from '../../ui/index';


const Home = () => {
	return (
		<Main>
			<Title>My first component</Title>
			<SubTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea
				incidunt quia sequi ex deleniti voluptatem exercitationem quibusdam
				maiores quod. Sapiente doloremque optio distinctio delectus,
				voluptatibus fugit aliquid earum natus.
			</SubTitle>
			<TextBody>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, eos
				labore. Magni facere obcaecati impedit. Odio deleniti excepturi sed
				adipisci, aliquam quisquam, praesentium, dignissimos placeat modi
				perspiciatis repellendus quaerat vel iure. Facilis aspernatur illo, ab
				eveniet in dolorem sed qui neque eum fugiat unde aperiam expedita
				obcaecati labore veniam eaque quis culpa nobis ipsam maiores officia
				error debitis laudantium corporis?
			</TextBody>
			<TextBody blueText>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, eos
				labore. Magni facere obcaecati impedit. Odio deleniti excepturi sed
				adipisci, aliquam quisquam, praesentium, dignissimos placeat modi
				perspiciatis repellendus quaerat vel iure. Facilis aspernatur illo, ab
				eveniet in dolorem sed qui neque eum fugiat unde aperiam expedita
				obcaecati labore veniam eaque quis culpa nobis ipsam maiores officia
				error debitis laudantium corporis?
			</TextBody>
			<TextBody pinkText>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, eos
				labore. Magni facere obcaecati impedit. Odio deleniti excepturi sed
				adipisci, aliquam quisquam, praesentium, dignissimos placeat modi
				perspiciatis repellendus quaerat vel iure. Facilis aspernatur illo, ab
				eveniet in dolorem sed qui neque eum fugiat unde aperiam expedita
				obcaecati labore veniam eaque quis culpa nobis ipsam maiores officia
				error debitis laudantium corporis?
			</TextBody>
      <TextLink to='class'>Next page</TextLink>
		</Main>
	);
};

export default Home;
