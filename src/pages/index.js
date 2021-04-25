import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section height="100vh" padding="0px 0 0px 0" background="linear-gradient(180deg,transparent 0%,rgba(0,0,0,0) 11%,rgba(0,0,0,0) 21%,rgba(0,0,0,0) 57.1%,--color-secondary 100%) 0 0 no-repeat" md-height="auto">
			<Override
				slot="SectionContent"
				max-width="none"
				width="95%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/fom.png?v=2021-04-23T14:43:29.495Z) 100% 0% /cover no-repeat scroll padding-box"
				justify-content="space-between"
				margin="2.5% 2.5% 2.5% 2.5%"
			/>
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						font="normal 600 36px/1.5 --fontFamily-googleRaleway"
						margin="16px 0px 0px 16px"
						display="inline-block"
						text-transform="uppercase"
						text-shadow="1px 1px 2px #000"
					>
						Renaissance Company ltd
					</Text>
					<Image
						src="https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/4.png?v=2021-04-23T13:59:39.233Z"
						max-height="170px"
						border-radius="100%"
						lg-max-height="130px"
						margin="0px 0px 0px 16px"
					/>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-end" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/6082c6d9123639001f37cce2/images/logo.png?v=2021-04-23T14:45:45.877Z"
						max-height="170px"
						lg-max-height="130px"
						background="rgba(255, 255, 255, 0.79)"
						border-radius="0px 0px 0px 30px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				gap="0px"
				align-items="center"
				justify-content="center"
				position="relative"
				top="-160px"
			>
				{"    "}
				<StackItem width="80%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 600 17px/1.5 --fontFamily-googleRaleway"
						display="inline-block"
						text-align="left"
						background="rgba(255, 255, 255, 0.79)"
						padding="20px 20px 20px 20px"
						margin="50PX 0px 0px 0px"
						border-radius="8px"
					>
						Sehr geehrte Damen und Herren!
						<br />
						Herzlich Willkommen an meine Ländingpage!
						<br />
						Unser Unternehmen Renaissance Company LTD gewinnt das Gold
						<br />
						{" "}in Ghana Westafrika!{"\n"}
						<br />
						Für Erweiterung Gewinnungsfläche brauchen wir zusätzlich{" "}
						<br />
						Schwerexcavatoren und unterschiedliche Hilfseinrichtungen.{"\n"}
						<br />
						Wenn Sie eine Interesse haben dann melden Sie sich in meinem{" "}
						<br />
						Telegram oder WhatsApp!{"\n"}
						<br />
						Mit besten Grüßen{"\n"}
						<br />
						Eugen Kisler
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="40%" display="flex">
					<Override slot="StackItemContent" align-items="flex-end" justify-content="flex-start" />
					<Box
						padding="5px 5px 5px 5px"
						border-width="4px"
						border-style="solid"
						border-radius="100%"
						border-color="transparent"
						margin="0px 0px 0px 0px"
					>
						<Link
							href="https://t.me/EugenKislerGermany"
							color="#ffffff"
							font="normal 500 17px/1.5 --fontFamily-googleRaleway"
							text-decoration-line="initial"
							background="#292828"
							padding="40px 40px 40px 40px"
							border-radius="100%"
							height="75px"
							width="75px"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="background-color 0.3s ease 0s"
							box-shadow="0 10px 10px 0 rgb(0 0 2 / 15%)"
							hover-opacity=".8"
							text-shadow="1px 1px 2px #ffffff"
							lg-width="55px"
							lg-height="55px"
							lg-font="normal 500 14px/1.5 --fontFamily-googleRaleway"
							target="_blank"
							margin="0px 0px 0px 8px"
						>
							NACHRICHTEN!
						</Link>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="60%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						md-flex-direction="column"
						md-align-items="flex-end"
					/>
					{"        "}
					<Box display="flex">
						<Box
							border-width="4px"
							border-style="solid"
							border-radius="100%"
							border-color="transparent"
							margin="0px 0px 0px 0px"
							padding="5px 0px 5px 0px"
						>
							<Link
								href="https://wa.me/77022014472"
								color="#ffffff"
								font="normal 500 17px/1.5 --fontFamily-googleRaleway"
								text-decoration-line="initial"
								background="#10AF0A"
								padding="40px 40px 40px 40px"
								border-radius="100%"
								height="75px"
								width="75px"
								display="flex"
								align-items="center"
								justify-content="center"
								hover-background="#19b007"
								transition="background-color 0.3s ease 0s"
								box-shadow="0 10px 10px 0 rgb(0 0 2 / 15%)"
								hover-opacity=".8"
								text-shadow="1px 1px 2px #000"
								lg-width="55px"
								lg-height="55px"
								lg-font="normal 500 14px/1.5 --fontFamily-googleRaleway"
								target="_blank"
							>
								WHATSAPP
							</Link>
						</Box>
						<Box
							padding="5px 0px 5px 0px"
							border-width="4px"
							border-style="solid"
							border-radius="100%"
							border-color="transparent"
							bottom="auto"
							left="auto"
							right="176px"
							top="0px"
							margin="0px 0px 0px 0px"
						>
							<Link
								href="https://t.me/EugenKislerGermany"
								color="#ffffff"
								font="normal 500 17px/1.5 --fontFamily-googleRaleway"
								text-decoration-line="initial"
								background="#23A0DB"
								padding="40px 40px 40px 40px"
								border-radius="100%"
								height="75px"
								width="75px"
								display="flex"
								align-items="center"
								justify-content="center"
								transition="background-color 0.3s ease 0s"
								box-shadow="0 10px 10px 0 rgb(0 0 2 / 15%)"
								hover-opacity=".8"
								text-shadow="1px 1px 2px #000"
								lg-width="55px"
								lg-height="55px"
								lg-font="normal 500 14px/1.5 --fontFamily-googleRaleway"
								target="_blank"
							>
								TELEGRAM
							</Link>
						</Box>
					</Box>
					<Box display="flex">
						<Box
							border-width="4px"
							border-style="solid"
							border-radius="100%"
							border-color="transparent"
							margin="0px 0px 0px 0px"
							padding="5px 0px 5px 0px"
						>
							<Link
								href="https://youtu.be/0QRNQIM7kF8"
								color="#ffffff"
								font="normal 500 17px/1.5 --fontFamily-googleRaleway"
								text-decoration-line="initial"
								background="#ff2424"
								padding="40px 40px 40px 40px"
								border-radius="100%"
								height="75px"
								width="75px"
								display="flex"
								align-items="center"
								justify-content="center"
								hover-background="#ff2424"
								transition="background-color 0.3s ease 0s"
								box-shadow="0 10px 10px 0 rgb(0 0 2 / 15%)"
								hover-opacity=".8"
								text-shadow="1px 1px 2px #000"
								lg-width="55px"
								lg-height="55px"
								lg-font="normal 500 14px/1.5 --fontFamily-googleRaleway"
								target="_blank"
							>
								YOUTUBE
							</Link>
						</Box>
						<Box
							border-width="4px"
							border-style="solid"
							border-radius="100%"
							border-color="transparent"
							margin="0px 0px 0px 0px"
							padding="5px 0px 5px 0px"
						>
							<Link
								href="https://cgold-official.com/register?referral_id=R179572"
								color="#ffffff"
								font="normal 500 17px/1.5 --fontFamily-googleRaleway"
								text-decoration-line="initial"
								background="#7524ff"
								padding="40px 40px 40px 40px"
								border-radius="100%"
								height="75px"
								width="75px"
								display="flex"
								align-items="center"
								justify-content="center"
								hover-background="#ff2424"
								transition="background-color 0.3s ease 0s"
								box-shadow="0 10px 10px 0 rgb(0 0 2 / 15%)"
								hover-opacity=".8"
								text-shadow="1px 1px 2px #000"
								lg-width="55px"
								lg-height="55px"
								lg-font="normal 500 14px/1.5 --fontFamily-googleRaleway"
								target="_blank"
							>
								REGISTRATION
							</Link>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
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