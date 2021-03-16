import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Text, Box, Hr, Button, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaTelegram } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			height="70px"
			align-items="center"
			quarkly-title="header"
			sm-height="30px"
			sm-border-width="1px"
			sm-border-color="rgba(231, 231, 231, 0.69)"
			sm-border-style="solid"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 10% 0px 10%"
				max-width="none"
				sm-margin="0px 10% 0px 5%"
			/>
			<Stack margin="0 0px 0px 0px" quarkly-title="Stack_header" sm-align-items="center">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					quarkly-title="StackItem_logo"
					align-items="center"
					justify-content="center"
					sm-padding="16px 16px 16px 0px"
				>
					<Override slot="StackItemContent" align-items="center" sm-justify-content="center" />
					<Image
						width="50px"
						height="50px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"
						display="inline-block"
						padding="0px 10px 0px 0px"
						quarkly-title="logo"
						sm-width="70px"
						sm-height="50px"
						sm-align-self="center"
					/>
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="--headline3"
						display="inline-block"
						quarkly-title="logoname"
						sm-align-self="center"
						sm-margin="0px 0 0 0"
						sm-font="normal 600 24px/1.2 Montserrat, sans-serif"
					>
						Privat
						<Span color="--primary" sm-font="600 24px/38.4px Montserrat, sans-serif">
							Tender
						</Span>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			sm-padding="50px 0 100px 0"
			sm-min-height="auto"
			display="flex"
			flex-direction="row"
			quarkly-title="page_1"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Texting.png?v=2021-02-27T09:04:17.767Z) 115% 35% /57% no-repeat local border-box"
			padding="8% 0 8% 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(238, 238, 238, 0.1) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Texting.png?v=2021-02-27T09:04:17.767Z) 115% 100%/80% no-repeat local border-box"
		>
			<Override
				slot="SectionContent"
				max-width="none"
				font="--headline3"
				margin="0px 10% 0px 10%"
				sm-margin="0px 5% 0px 5%"
			/>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" display="flex" flex-direction="row" />
					{"        "}
					<Box display="inline-block">
						<Text
							font="--base"
							text-transform="uppercase"
							letter-spacing="1px"
							max-width="850px"
							color="--grey"
							margin="0px"
							sm-font="normal 300 14px/1.5 Inter, sans-serif"
						>
							на всех платфомах
						</Text>
						<Text
							as="h1"
							margin="0 0px 32px 0px"
							font="--headline1"
							md-font="--headline2"
							color="--dark"
							max-width="850px"
							padding="8px 0px 0px 0px"
							width="100%"
							sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
							sm-margin="0 0px 15px 0px"
						>
							Приложение{" "}
							<br />
							<Span
								color="--primary"
								data-q-widget-type="PRIMITIVE"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								где ищут тебя
							</Span>
							,
							<br />
							{" "}а не ты{" "}
						</Text>
						<Text
							margin="0px"
							font="--base"
							width="50%"
							sm-font="normal 300 14px/1.5 Inter, sans-serif"
							sm-width="100%"
						>
							Создавай тендеры и жди ответа от потенциальных Исполнителей. Без поиска номеров, лишних звонков и объяснения задачи каждому.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack
				width="50%"
				margin="0px 0px 0px 0px"
				justify-content="flex-start"
				max-width="500px"
				sm-width="100%"
				sm-margin="0px 0px 50px 0px"
				sm-padding="20px 0px 0px 0px"
			>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					padding="0px 0px 0px 0px"
					justify-content="start"
					align-items="flex-start"
					max-width="220px"
				>
					<Override slot="StackItemContent" max-width="220px" />
					{"        "}
					<Image src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/googleplay.png?v=2021-03-16T20:55:55.553Z" box-shadow="0 0px 25px 0px rgba(30, 37, 43, 0.1)" sm-box-shadow="none" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" padding="0px 0px 0px 0px" max-width="220px">
					{"        "}
					<Image src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg?v=2021-03-16T20:27:06.320Z" box-shadow="0 0px 25px 0px rgba(30, 37, 43, 0.1)" sm-box-shadow="none" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0 120px 0"
			sm-padding="40px 0 100px 0"
			quarkly-title="page_2"
			justify-content="center"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/New%20photo%20posted.png?v=2021-03-15T02:16:49.199Z) 12%  57%/38%  no-repeat local border-box"
			margin="0px 0 0 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(238, 238, 238, 0.3) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/New%20photo%20posted.png?v=2021-03-15T02:16:49.199Z) 300%  95%/90% no-repeat local border-box"
			sm-margin="0px 0 15px 0"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 10% 0px 10%"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				sm-margin="15px 5% 0px 5%"
			/>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				sm-font="normal 300 14px/1.5 Inter, sans-serif"
			>
				формат тендера
			</Text>
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="8px 0 0 0"
				padding="0px 0px 20px 0px"
				sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
				sm-padding="0px 0px 0px 0px"
				sm-margin="1px 0 5px 0"
			>
				Удобство
			</Text>
			<Stack sm-margin="10px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-height="1px"
					sm-min-height="1px"
					sm-padding="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" sm-width="0px" />
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%" sm-padding="0px 0px 0px 0px">
					<Text
						as="p"
						font="normal 300 14px/1.5 --fontFamily-googleInter"
						margin="50px 0 0 0"
						sm-margin="0px 0 0 0"
						sm-font="normal normal 300 14px/1.3 --fontFamily-googleInter"
					>
						<Span
							font="normal 600 22px/2 --fontFamily-googleMontserrat"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Объявление тендера
							<br />
						</Span>
						Заказчик выбирает категорию, ставит задачу, указывает дату, добавляет фотографии и объявляет тендер.{" "}
						<br />
						<br />
						<br />
						<Span
							font="normal 600 22px/2 --fontFamily-googleMontserrat"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Исполнители предлагают цену
						</Span>
						<br />
						Исполнители в свою очередь находят тендер и указывают свою цену. Любой участник может предлагать новую цену основываясь на предложениях других Исполнителей.
						<br />
						<br />
						<br />
						<Span
							font="normal 600 22px/2 --fontFamily-googleMontserrat"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Заказчик выбирает лучшего
							<br />
						</Span>
						Из всех предложений Заказчик выбирает наиболее подходящего на основе цены и рейтинга Исполнителя. Связывается с ним в приложении для подтверждения сделки.
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			sm-padding="40px 0"
			color="--dark"
			margin="0 5% 0 5%"
			width="90%"
			justify-content="safe center"
			background="url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/hexcolor-co--29323c-485563.png?v=2021-03-16T17:29:09.687Z) 0% 0%/cover"
			border-radius="30px"
			position="relative"
			sm-margin="50px 2% 0 2%"
			sm-width="96%"
		>
			<Override
				slot="SectionContent"
				margin="0px 0px 0px 0px"
				justify-content="center"
				align-items="center"
				color="--light"
			/>
			<Stack width="100%">
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					hover-transition="all 0.3s ease 0s"
					margin="0px 25 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_engineer_578857.png?v=2021-03-16T16:35:42.081Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Люди
					</Text>
				</StackItem>
				<StackItem sm-width="33.33%" width="25%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Excavator_578860.png?v=2021-03-16T16:35:42.108Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Работы
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_cyberspace_3458707.png?v=2021-03-16T16:35:42.077Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Мир человека
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_cleaning_3140416.png?v=2021-03-16T16:35:42.088Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Услуги
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Express%201.png?v=2021-03-16T16:35:42.082Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Товары
					</Text>
				</StackItem>
				<StackItem
					sm-width="33.33%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
					sm-padding="16px 16px 16px 11px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Wheelbarrow_578867.png?v=2021-03-16T16:35:42.090Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-width="120%"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Сырье и{" "}
						<br />
						материалы
					</Text>
				</StackItem>
				<StackItem
					sm-width="50%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Bus_3475031.png?v=2021-03-16T16:35:42.101Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Аренда и{" "}
						<br />
						шеринг
					</Text>
				</StackItem>
				<StackItem
					sm-width="50%"
					width="25%"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					<Image
						width="100px"
						src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/noun_Swiss%20Army%20Knife_3379962.png?v=2021-03-16T16:59:45.709Z"
						hover-transform="scale(1.1)"
						hover-transition="all 0.2s ease 0s"
						transition="all 0.2s ease 0s"
						sm-width="70px"
					/>
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0 0px 0"
						width="130%"
						md-font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						md-width="140%"
						sm-width="108%"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						Инструменты и оборудование
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			sm-padding="40px 0 10px 0"
			color="--dark"
			margin="-25px 5% 50px 5%"
			width="90%"
			justify-content="safe center"
			background="url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/hexcolor-co--FD6E6A-FFC600.png?v=2021-03-16T17:32:39.508Z) 0% 0%/cover"
			border-radius="0px 0px 30px 30px"
			padding="40px 0 15px 0"
			sm-margin="-25px 2% 50px 2%"
			sm-width="96%"
		>
			<Override
				slot="SectionContent"
				margin="0px 0px 0px 0px"
				justify-content="center"
				align-items="center"
				color="--light"
			/>
			<Stack width="100%" margin="0px 0px 0px 0px" padding="0px 0px 0px 0px">
				<StackItem
					sm-width="50%"
					width="33%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						color="--dark"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font="600 60px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 45px/36px Montserrat, sans-serif"
						>
							8
						</Span>
						{" "}
						<br />
						разделов
					</Text>
				</StackItem>
				<StackItem
					sm-width="50%"
					width="33%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 0px 0px 0px"
					border-width="0 1.7px 0 1.7px"
					border-color="rgba(255, 255, 255, 0.4)"
					border-style="solid"
					sm-border-width="0 0 0 1.7px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						color="--dark"
						sm-font="normal 600 16px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font="600 60px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 45px/36px Montserrat, sans-serif"
						>
							110+
						</Span>
						{" "}
						<br />
						подразделов
					</Text>
				</StackItem>
				<StackItem
					sm-width="100%"
					width="33%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" sm-align-items="center" />
					<Text
						as="h3"
						font="normal 600 24px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						color="--dark"
						sm-font="normal 600 18px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font-size="80px"
							font="600 60px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 50px/36px Montserrat, sans-serif"
						>
							985+
						</Span>
						<br />
						категорий
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0 120px 0"
			sm-padding="40px 0"
			quarkly-title="page_3"
			justify-content="center"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Outbound%20marketing.png?v=2021-03-15T03:23:23.271Z) 95% 57%/40%  no-repeat local border-box"
			margin="0px 0 0 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(238, 238, 238, 0.3) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Outbound%20marketing.png?v=2021-03-15T03:23:23.271Z) 95% 96%/80% no-repeat local border-box"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 10% 0px 10%"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				sm-margin="0px 5% 0px 5%"
			/>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				sm-font="normal 300 14px/1.5 Inter, sans-serif"
			>
				Использование приложения
			</Text>
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="8px 0 0 0"
				padding="0px 0px 20px 0px"
				sm-font="normal 600 40px/1.2 Montserrat, sans-serif"
				sm-margin="1px 0 0 0"
				sm-padding="0px 0px 5px 0px"
			>
				Преимущества
			</Text>
			<Stack margin="0px 0px 0px 0px" sm-margin="10px 0px 0px 0px">
				{"        "}
				<StackItem
					width="55%"
					display="flex"
					text-align="left"
					sm-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" text-align="left" />
					<Text
						as="p"
						font="--base"
						margin="50px 0 0 0"
						sm-margin="0 0 0 0"
						sm-font="normal 300 14px/1.5 Inter, sans-serif"
					>
						<Span
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Скорость
							<br />
						</Span>
						Не нужно обзванивать исполнителя по каждому объявлению, объяснять задачу и подбирать время.{" "}
						<br />
						<br />
						<br />
						<Span
							font-size="24px"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Экономия денег
						</Span>
						<br />
						Вы получите Исполнителей с лучшей ценой по вашему запросу! Для Заказчиков приложение бесплатно и мы не просим никаких комиссий!
						<br />
						<br />
						<br />
						<Span
							font-size="24px"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal 600 24px/2 --fontFamily-googleMontserrat"
							sm-font="normal 600 20px/2 --fontFamily-googleMontserrat"
						>
							Рейтинг
							<br />
						</Span>
						Настоящий рейтинг у Исполнителей только от Заказчиков после выполнения тендеров.
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Override slot="SectionContent" sm-margin="20px 5% 0px 5%" />
			<Text as="h1" font="--headline1" margin="0 0 5px 0" sm-font="normal 600 40px/1.2 Montserrat, sans-serif">
				Стать Исполнителем
			</Text>
			<Text
				as="p"
				font="normal 500 16px/1.5 --fontFamily-googleInter"
				margin="5px 0 90px 0"
				color="--greyD2"
				sm-font="normal 500 12px/1.5 --fontFamily-googleInter"
			>
				Для участия в тендерах необходимо зарегистрироваться в приложении и стать Исполнителем. Выбрать интересующие категории в которых вы хотите участвовать и оплатить подписку.
			</Text>
			<Stack
				border-width="2px"
				border-radius="15px 10px 20px 5px"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				sm-width="90%"
			>
				<StackItem
					width="33.33%"
					md-width="100%"
					box-shadow="-10px 25px 50px -12px rgba(0, 0, 0, 0.25)"
					border-radius="30px 0px 0px 30px"
					background="#f4f4f4"
					max-height="430px"
					sm-position="relative"
					sm-border-radius="30px"
					sm-margin="0px 0px 50px 0px"
					sm-box-shadow="0 0px 30px -1px rgba(0, 0, 0, 0.25)"
					sm-max-height="450px"
					sm-height="450px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-width="90%"
						sm-justify-content="center"
						sm-align-items="center"
					/>
					<Text
						as="h3"
						font="normal 600 30px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						padding="20px 0px 0px 0px"
						sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat"
					>
						Базовый
					</Text>
					<Text
						as="h3"
						font="normal 600 30px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						padding="20px 0px 0px 0px"
						sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font="600 50px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 32px/36px Montserrat, sans-serif"
						>
							1000
						</Span>
						{" "}₽/мес
					</Text>
					<Hr
						width="100%"
						background="rgba(238, 238, 238, 0.5)"
						border-color="rgba(215, 215, 215, 0.29)"
						border-width="0.04px"
						height="0px"
						padding="0px 0px 0px 0px"
					/>
					<Text
						as="p"
						font="normal 500 16px/1.5 --fontFamily-googleInter"
						margin="12px 0"
						color="--greyD2"
						sm-font="normal 500 12px/1.5 --fontFamily-googleInter"
					>
						Стоимость за одну категорию. Можно выбрать любую категорию или несколько штук, оплата происходит за каждую выбранную категорию.
					</Text>
					<Button
						border-radius="30px"
						hover-background="--color-dark"
						transition="all 0.2s ease 0s"
						hover-transform="scale(1.02)"
						width="50%"
						min-height="60px"
						padding="15px 24px 15px 24px"
						font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						margin="20px 0px 20px 0px"
						sm-width="60%"
						sm-height="50px"
						sm-min-height="50px"
						sm-align-self="flex-start"
						sm-padding="0px 0px 0px 0px"
						sm-margin="20px 0px 20px 0px"
						sm-text-align="center"
					>
						Выбрать
					</Button>
				</StackItem>
				<StackItem
					width="33.33%"
					md-width="100%"
					border-radius="30px 30px 30px 30px"
					box-shadow="0 0px 30px 10px rgba(0, 0, 0, 0.25)"
					margin="-25px 0px 0px 0px"
					position="relative"
					max-height="600px"
					padding="16px 0px 160px 0px"
					sm-box-shadow="0 0px 30px -1px rgba(0, 0, 0, 0.25)"
					sm-padding="16px 16px 16px 16px"
					sm-margin="0px 0px 50px 0px"
					sm-max-height="-"
					sm-height="500px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						position="relative"
						sm-justify-content="center"
						sm-align-items="center"
					/>
					<Text
						text-align="center"
						font="normal 600 14px/1.2 --fontFamily-googleMontserrat"
						width="150px"
						align-self="flex-end"
						border-radius="40px"
						background="--color-primary"
						height="30px"
						display="inherit"
						justify-content="center"
						align-items="center"
						color="--light"
						box-shadow="--m"
						margin="0px 0px 10px 0px"
					>
						ПОПУЛЯРНЫЙ
					</Text>
					<Text as="h3" font="normal 600 30px/1.2 --fontFamily-googleMontserrat" margin="12px 0" sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat">
						Премиум
					</Text>
					<Text
						as="h3"
						font="normal 600 30px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						padding="20px 0px 0px 0px"
						sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font="600 50px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 32px/36px Montserrat, sans-serif"
						>
							5000
						</Span>
						{" "}₽/мес
					</Text>
					<Hr
						width="100%"
						background="rgba(238, 238, 238, 0.5)"
						border-color="rgba(215, 215, 215, 0.29)"
						border-width="0.04px"
						height="0px"
						padding="0px 0px 0px 0px"
					/>
					<Text as="p" font="normal 500 16px/1.5 --fontFamily-googleInter" margin="12px 0" color="--greyD2">
						Стоимость за один подраздел. Можно выбрать любой подраздел или несколько штук, оплата происходит за каждый выбранный подраздел.
					</Text>
					<Button
						border-radius="30px"
						hover-background="--color-dark"
						transition="all 0.2s ease 0s"
						hover-transform="scale(1.02)"
						width="50%"
						min-height="60px"
						padding="15px 24px 15px 24px"
						font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						margin="20px 0px 20px 0px"
						sm-width="60%"
						sm-height="50px"
						sm-min-height="50px"
						sm-align-self="flex-start"
					>
						Выбрать
					</Button>
					<Box height="30px" max-height="30px" />
				</StackItem>
				<StackItem
					width="33.33%"
					md-width="100%"
					border-radius="0px 30px 30px 0px"
					box-shadow="10px 25px 50px -12px rgba(0, 0, 0, 0.25)"
					background="#f4f4f4"
					max-height="430px"
					sm-position="relative"
					sm-box-shadow="0 0px 30px -1px rgba(0, 0, 0, 0.25)"
					sm-margin="0px 0px 50px 0px"
					sm-padding="16px 16px 16px 16px"
					sm-height="450px"
					sm-border-radius="30px"
					sm-width="100%"
					sm-max-height="600px"
				>
					<Override slot="StackItemContent" flex-direction="column" sm-align-items="center" />
					<Text
						as="h3"
						font="normal 600 30px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0 12px 0"
						padding="20px 0px 0px 0px"
						sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat"
					>
						Бизнес
					</Text>
					<Text
						as="h3"
						font="normal 600 30px/1.2 --fontFamily-googleMontserrat"
						margin="12px 0"
						padding="20px 0px 0px 0px"
						sm-font="normal 600 26px/1.2 --fontFamily-googleMontserrat"
					>
						<Span
							font="600 50px/36px Montserrat, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="600 32px/36px Montserrat, sans-serif"
						>
							10000
						</Span>
						{" "}₽/мес
					</Text>
					<Hr
						width="100%"
						background="rgba(238, 238, 238, 0.5)"
						border-color="rgba(215, 215, 215, 0.29)"
						border-width="0.04px"
						height="0px"
						padding="0px 0px 0px 0px"
					/>
					<Text
						as="p"
						font="normal 500 16px/1.5 --fontFamily-googleInter"
						margin="12px 0"
						color="--greyD2"
						sm-font="normal 500 16px/1.5 --fontFamily-googleInter"
					>
						Стоимость за один раздел. Можно выбрать любой раздел или несколько штук, оплата происходит за каждый выбранный раздел.
					</Text>
					<Button
						border-radius="30px"
						hover-background="--color-dark"
						transition="all 0.2s ease 0s"
						hover-transform="scale(1.02)"
						width="50%"
						min-height="60px"
						padding="15px 24px 15px 24px"
						font="normal 600 20px/1.2 --fontFamily-googleMontserrat"
						margin="20px 0px 20px 0px"
						sm-width="60%"
						sm-height="50px"
						sm-min-height="50px"
						sm-align-self="flex-start"
					>
						Выбрать
					</Button>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0 40px 0"
			sm-padding="40px 0"
			display="flex"
			flex-direction="column"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Chilling%20on%20couch.svg?v=2021-03-16T22:14:41.532Z) 57% 40% /30% no-repeat scroll padding-box"
			margin="60px 0 0 0"
			sm-background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(238, 238, 238, 0.3) 0%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Chilling%20on%20couch.svg?v=2021-03-16T22:14:41.532Z) 57% 80% /80% no-repeat scroll padding-box"
		>
			<Stack
				color="--dark"
				font="--base"
				flex-wrap="wrap"
				align-items="center"
				border-color="--color-dark"
			>
				<StackItem width="60%" md-width="100%" max-height="430px">
					<Override slot="StackItemContent" flex-direction="column" width="60%" />
					<StackItem
						width="50%"
						display="flex"
						quarkly-title="StackItem_logo"
						align-items="center"
						justify-content="center"
					>
						<Override slot="StackItemContent" align-items="center" />
						<Image
							width="150px"
							height="100px"
							src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/logo.png?v=2021-02-18T09:06:23.754Z"
							display="inline-block"
							padding="0px 10px 0px 0px"
							quarkly-title="logo"
						/>
						<Text
							margin="0"
							md-margin="0px 0 20px 0"
							text-align="left"
							font="normal 600 42px/1.2 --fontFamily-googleMontserrat"
							display="inline-block"
							quarkly-title="logoname"
						>
							Privat
							<Span color="--primary">
								Tender
							</Span>
						</Text>
						{"            "}
					</StackItem>
					<Hr
						width="100%"
						background="rgba(238, 238, 238, 0.5)"
						border-color="rgba(215, 215, 215, 0.29)"
						border-width="0.04px"
						height="0px"
						padding="0px 0px 0px 0px"
					/>
					<Text as="p" font="normal 500 18px/1.5 --fontFamily-googleInter" margin="12px 0" color="--dark">
						Присоединяйся к тысячам людей{" "}
						<br />
						кто управляет своими деньгами и временем!
					</Text>
				</StackItem>
				<Stack
					width="40%"
					margin="0px 0px 0px 0px"
					justify-content="flex-end"
					max-width="800px"
					sm-width="60%"
				>
					{"    "}
					<StackItem md-width="100%" position="relative" max-width="300px">
						<Override slot="StackItemContent" />
						<Image src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/googleplay.png?v=2021-03-16T20:55:55.553Z" box-shadow="0 0px 25px 0px rgba(30, 37, 43, 0.1)" />
					</StackItem>
					<StackItem md-width="100%" position="relative" max-width="300px">
						<Image src="https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg?v=2021-03-16T20:27:06.320Z" box-shadow="0 0px 25px 0px rgba(30, 37, 43, 0.1)" max-width="300px" width="300px" />
					</StackItem>
					{"    "}
				</Stack>
			</Stack>
		</Section>
		<Section padding="20px 0 30px 0" sm-padding="40px 0">
			<Override
				slot="SectionContent"
				display="inline"
				sm-align-self="center"
				sm-display="flex"
				sm-justify-content="center"
			/>
			<Hr
				width="100%"
				background="rgba(238, 238, 238, 0.5)"
				border-color="rgba(215, 215, 215, 0.29)"
				border-width="0.04px"
				height="0px"
				padding="0px 0px 0px 0px"
			/>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="70%" sm-padding="0px 16px 16px 16px">
					{"        "}
					<Text
						as="p"
						font="normal 500 18px/1.5 --fontFamily-googleInter"
						margin="12px 0"
						color="--greyD2"
						width="50%"
						sm-width="100%"
					>
						©PrivatTender,  2021.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="30%" sm-padding="10px 16px 16px 16px">
					<Override slot="StackItemContent" justify-content="flex-end" />
					<Icon
						category="ai"
						icon={AiFillInstagram}
						width="30px"
						height="30px"
						size="40px"
						color="--greyD2"
					/>
					<Icon
						category="fa"
						icon={FaTwitter}
						width="30px"
						height="30px"
						size="40px"
						color="--greyD2"
					/>
					<Icon
						category="fa"
						icon={FaTelegram}
						width="30px"
						height="30px"
						size="30px"
						color="--greyD2"
					/>
					{"            "}
				</StackItem>
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
	</Theme>;
});