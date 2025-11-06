'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I’m a passionate software developer focused on innovation and problem-solving. 
							My experience in software development has equipped me with strong technical skills
							 and a solid understanding of modern development practices.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Throughout my journey as a software developer, I’ve worked on various projects that
								have sharpened my skills and deepened my understanding of both practical development
								and theory. I’m committed to continuous learning and staying up-to-date with the
								latest technologies to ensure that I can deliver modern, efficient, and user-friendly
								solutions.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/images/Bonaventure_pro_pic.jpg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Bachelor’s Degree in Estate Management
									Enugu State University Of Science And Technology (ESUT) | 2023
									Focused on PropTech and land laws, 
									with a strong foundation in technical problem-solving and data analysis.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Gained valuable professional experience working with cutting-edge technologies
									and methodologies. With 7 years of programming experience, I’ve developed
									AI-powered systems integrated with GIS to address issues in the rental and 
									property market, connecting tenants with landlords and preventing scams.
									Additionally, I have volunteered on various projects that allowed me to 
									further refine my skills and contribute to impactful solutions.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									I have experience with programming languages such as JavaScript, Python, PHP, HTML,
									and CSS, and I’m proficient in frameworks like React.js and Next.js. I also work with 
									TypeScript to enhance my JavaScript development with static typing. Additionally, I’m 
									skilled in tools like GIS, AI integration, Git, Docker, and Webpack, with experience in 
									databases such as MySQL and MongoDB. My expertise extends to responsive software development, API 
									integration, SEO optimization, and ensuring cross-browser compatibility.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}