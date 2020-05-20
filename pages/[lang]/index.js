import styled from "@emotion/styled"
import {useRouter } from "next/router";
import LanguageSelector from "../../components/LanguageSelector";
//tutorial source: https://levelup.gitconnected.com/a-simple-next-js-frontend-for-a-multilingual-website-ae31a17387e2
//this tutorial is pretty shity, try this next one:
//https://lazertechnologies.com/blog/how-to-add-localization-to-your-nextjs-app
export default () => {
	const router = useRouter();

	return (
		<Container>
		<LanguageSelector />
			<h1> Hello world! The language slug is: {router.query.lang}</h1>
		</Container>
	);
};

const Container = styled.div `
	width: 100%;
`