const defaultConfig = {
	username: "Eden",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Main",
				color: "green",
				align: "left",
				links: [
					{
						name: "The-Dev-Hive",
						url: "https://www.thedev-hive.com/",
						icon: "mdi:web"
					},
					{
						name: "The-Dev-Blog",
						url: "https://the-dev-blog-one.vercel.app/",
						icon: "ph:files-fill"
					},
					{
						name: "AARTO-Solutions-SA",
						url: "http://46.101.25.84/wp-admin/",
						icon: "ic:baseline-wordpress"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "Vercel",
						url: "https://vercel.com/spectraisdeadaf",
						icon: "akar-icons:vercel-fill"
					},
					{
						name: "GoDaddy",
						url: "https://account.godaddy.com/",
						icon: "simple-icons:godaddy"
					},
					{
						name: "Canva",
						url: "https://www.canva.com/",
						icon: "simple-icons:canva"
					},
					{
						name: "Figma",
						url: "https://www.figma.com/",
						icon: "solar:figma-bold"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "Linkedin",
						url: "https://www.linkedin.com/feed/",
						icon: "mdi:linkedin"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					}
				]
			},
			{
				title: "Mail",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Yandex",
						url: "https://mail.yandex.com/",
						icon: "ant-design:mail-filled"
					},
					{
						name: "Gmail",
						url: "https://mail.google.com/",
						icon: "ant-design:mail-filled"
					},
					{
						name: "Dev-Hive-Admin",
						url: "https://eu1.myprofessionalmail.com/",
						icon: "ant-design:mail-filled"
					},
					{
						name: "80lv",
						url: "https://80.lv/",
						icon: "tabler:hand-rock"
					}
				]
			},
			{
				title: "Productivity",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Notion",
						url: "https://www.notion.so/",
						icon: "ri:notion-fill"
					},
					{
						name: "Trello",
						url: "https://trello.com/u/spectraisdead/boards",
						icon: "ri:trello-fill"
					},
					{
						name: "ChatGpt",
						url: "https://chat.openai.com/",
						icon: "tabler:file-text-ai"
					},
					{
						name: "Bard",
						url: "https://bard.google.com/",
						icon: "tabler:file-text-ai"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Dev",
						url: "https://app.daily.dev/",
						icon: "material-symbols:news"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Hacker News",
						url: "https://thehackernews.com/",
						icon: "material-symbols:news"
					}
				]
			}
		]
	}
}

export default defaultConfig
