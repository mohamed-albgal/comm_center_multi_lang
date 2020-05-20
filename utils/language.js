import { setCookie, parseCookies } from 'nookies';

export const fallbackLanguage = "en";

export const languages = ["en", "ar"];

export const validateLanguage = lang => {
	return languages.includes(lang) ?
	lang
	: fallbackLanguage;
};

export const getLanguage = lang => {
	let language = lang.match(/[a-zA-Z/-]{2,10}/g)[0];
	language = language.split("-")[0];

	return validateLanguage(language);
};

export const configureLanguage = ctx => {
	const {req, res, asPath } = ctx;

	const language = req ?
	req.headers["accept-language"]
	: window.navigator.language;

	let lang = getLanguage(language, ctx);

	if(asPath === "/") {
		redirectToLanguage(lang,res);
	}

	return lang;
}

export const redirectToLanguage = (language = fallbackLanguage, res) => {
	if (res) {
		res.writeHead(302, {
			Location: `/${language}/`,
		});

		return res.end();
	}

	Router.push(`/${language}/`);
}

export const setLanguageCookie = (ctx, language) => {
	setCookie(ctx, "language", language, {
		maxAge: 30 * 25 * 60 * 60,
		path: "/"
	});
};

export const getLanguageCookie = ctx => {
	return parseCookies(ctx).language;
}