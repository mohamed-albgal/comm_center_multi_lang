import styled from "@emotion/styled"
import {useRouter } from "next/router";
//tutorial source: https://levelup.gitconnected.com/a-simple-next-js-frontend-for-a-multilingual-website-ae31a17387e2
export default () => {
	const router = useRouter();

	return (
		<Container>
			<h1> Hello world! The language slug is: {router.query.lang}</h1>
		</Container>
	);
};

const Container = styled.div `
	width: 100%;
`