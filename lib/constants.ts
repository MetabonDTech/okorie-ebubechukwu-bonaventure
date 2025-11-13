export const siteConfig = {
	name: 'Software Development Portfolio',
	description:
		'A professional portfolio website template for software development.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/MetabonDTech',
		linkedin: 'https://www.linkedin.com/in/okorie-bonaventure-941331229',
		twitter: 'https://x.com/ebubeikeofenugu',
		facebook: 'https://www.facebook.com/ebubechukwu.okorie.5',
		instagram: 'https://www.instagram.com/okorie.website.developer',
		whatsapp: 'https://wa.me/message/F3S2H6UP5EL2K1',
		email: 'mailto:okoriebonaventure1@gmail.com',
		phone: 'tel:+234 905 929 2679',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Junior Web Developer',
		company: 'Sparkite Tech',
		location: 'Enugu, Nigeria',
		startDate: 'Jan 2019',
		endDate: 'Dec 2021',
		description: [
			'• Collaborated with senior developers in building responsive websites and client portals.',
            '• Handled frontend and backend development using PHP, MySQL, and JavaScript.',
            '• Conducted testing, debugging, and updates to ensure optimal site performance.',
			'• Supported deployment processes and client feedback integration for multiple projects.',
		],
		technologies: ['HTML', 'CSS3', 'JAvascript', 'Wordpress'],
	},
	{
		title: 'Web Developer',
		company: 'Innovexa Web Solutions',
		location: 'Enugu, Nigeria',
		startDate: 'Jan 2021',
		endDate: 'Dec 2023',
		description: [
			'• Designed and developed custom web platforms for SMEs and startups, focusing on clean UI and reliable functionality.',
			'• Implemented server-side logic, database structures, and API integrations.',
			'• Led performance optimization initiatives that boosted client site traffic and engagement by 40%+.',
			'• Delivered full-cycle solutions — from requirement gathering to deployment and post launch support.',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
	{
		title: 'Full Stack Software Developer',
		company: 'Metabon Web Solution',
		location: 'Enugu, Nigeria',
		startDate: 'Jan 2023',
		endDate: 'Present',
		description: [
			'• Leading end-to-end development of scalable systems using PHP/Laravel, JavaScript and MySQL.',
			'• Developed an AI-powered PropTech system integrating Enugu GIS for property mapping and flatmate matching.',
			'• Built advanced payment gateway, authentication, and admin dashboard modules for fintech and property applications.',
			'• Mentored junior developers and streamlined workflow automation for faster, more efficient project delivery.',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'PropTech System',
		description:
			'AI-powered platform resolving agent-tenant challenges with GIS and smart property matching.',
		image: '/public/images/myapati.jpg',
		tags: ['php', 'Ajax', 'AI', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Lottery Website (Iplanet):',
		description:
			'Designed and developed a dynamic lottery management system with secure payment integration and live draws.',
		image: '/public/images/iplanet.jpg',
		tags: ['Typescript', 'React.Js', 'APIs', 'Node.Js],
		link: '#',
		repo: '#',
	},
	{
		title: 'NFT Minting Platform',
		description:
			'Created a blockchain-integrated web app for digital asset creation and marketplace listing.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Bank Application',
		description:
			'Developed a full-stack banking system with account creation, fund transfer, and admin control modules.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'E-commerce Platform',
		description:
			'Developed a modern online store with user authentication, order tracking, and seamless payment flow',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Multi-School Management System',
		description:
			'Created a blockchain-integrated web app for digital asset creation and marketplace listing.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['CSS3', 'HTML5', 'PHP', 'Ajax'],
		link: 'https://www.myschoolportal.net',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Estate Management',
		institution: 'Enugu State University Of Science And Technology',
		location: 'Enugu, Nigeria',
		startDate: 'Sep 2023',
		endDate: 'Present',
		gpa: '3.37/5.0',
		achievements: [
			'Dean\'s List (4 Semesters)',
			'Academic Excellence Scholarship',
		],
	},
	// {
	// 	degree: 'High School Diploma',
	// 	field: 'Science and Mathematics',
	// 	institution: 'High School Name',
	// 	location: 'City, Country',
	// 	startDate: 'Sep 2016',
	// 	endDate: 'Jun 2020',
	// 	gpa: '4.0/4.0',
	// 	achievements: [
	// 		'Valedictorian',
	// 		'National Mathematics Competition Finalist',
	// 		'Science Fair Gold Medal',
	// 	],
	// },
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	// {
	// 	title: 'Estate',
	// 	issuer: 'Professional Engineering Association',
	// 	date: 'Nov 2023',
	// 	id: 'CERT-12345',
	// 	url: '#',
	// 	pdf: '/certificates/sample.pdf',
	// },
	// {
	// 	title: 'CAD Design Specialist',
	// 	issuer: 'Autodesk',
	// 	date: 'Jun 2023',
	// 	id: 'CERT-67890',
	// 	url: '#',
	// 	pdf: '/certificates/sample.pdf',
	// },
	// {
	// 	title: 'Project Management Fundamentals',
	// 	issuer: 'Project Management Institute',
	// 	date: 'Mar 2023',
	// 	id: 'CERT-24680',
	// 	url: '#',
	// 	pdf: '/certificates/sample.pdf',
	// },
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Frontend web development', level: 9, category: 'technical' },
	{ name: 'backend web development', level: 8, category: 'technical' },
	{ name: 'Mobile App development', level: 7, category: 'technical' },
	{ name: 'Web3 development', level: 5, category: 'technical' },
	{ name: 'AI & Data Integration', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'HTML5', level: 9, category: 'software' },
	{ name: 'CSS3', level: 8, category: 'software' },
	{ name: 'Javascript', level: 9, category: 'software' },
	{ name: 'PHP', level: 7, category: 'software' },
	{ name: 'Flutter', level: 6, category: 'software' },
	{ name: 'GIS', level: 7, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Communication skill', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 2, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];