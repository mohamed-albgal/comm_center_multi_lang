import Link from "next/link";
import { useState } from "react";

export default () => {
	const [languages] = useState([
		{
			code: "en",
			name: "English",
		},
		{
			code:"ar",
			name: "Arabic",
		},
	]);

	return (
		<ul>
		{languages.map( language => {
			return (
				<li key={language.code}>
				<Link href={`/${language.code}/`} as={`/[lang]/`}>
					<a>{language.name}</a>
				</Link>
			);
		})}
		</ul>
	);
};