import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Renaissance Company
			</title>
			<meta name={"description"} content={"Sehr geehrte Damen und Herren!\nHerzlich Willkommen an meine Ländingpage!\nUnser Unternehmen Renaissance Company LTD gewinnt das Gold\n in Ghana Westafrika!\nFür Erweiterung Gewinnungsfläche brauchen wir zusätzlich\nSchwerexcavatoren und unterschiedliche Hilfseinrichtungen.\nWenn Sie eine Interesse haben dann melden Sie sich in meinem\nTelegram oder WhatsApp!"} />
			<meta property={"og:title"} content={"Renaissance Company"} />
			<meta property={"og:description"} content={"Sehr geehrte Damen und Herren!\nHerzlich Willkommen an meine Ländingpage!\nUnser Unternehmen Renaissance Company LTD gewinnt das Gold\n in Ghana Westafrika!\nFür Erweiterung Gewinnungsfläche brauchen wir zusätzlich\nSchwerexcavatoren und unterschiedliche Hilfseinrichtungen.\nWenn Sie eine Interesse haben dann melden Sie sich in meinem\nTelegram oder WhatsApp!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/fom.png?v=2021-04-23T14:43:29.495Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/5.png?v=2021-04-23T14:31:58.585Z"} />
			<meta name={"msapplication-TileColor"} content={"#ffb500"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<meta
				charset={""}
				name={"viewport"}
				content={"width=1024"}
				place={"endOfHead"}
				rawKey={"6082da7e40bfb8fd76130939"}
			/>
		</RawHtml>
	</Theme>;
});