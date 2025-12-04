import { BookOpen, Bot, CircleQuestionMark, Headset, SquareTerminal } from 'lucide-react'

export const navUser = {
	name: 'just-sain',
	role: 'Администратор',
	email: 'just-sain@apc.loc',
	avatar: 'https://avatars.githubusercontent.com/u/1486366',
}

export const navMain = [
	{
		title: 'Курсы',
		url: '/courses',
		icon: SquareTerminal,
		isActive: true,
	},
	{
		title: 'Секций',
		url: '/sections',
		icon: Bot,
	},
	{
		title: 'Преподаватели',
		url: '/teachers',
		icon: BookOpen,
		items: [
			{
				title: 'IT',
				url: '/teachers/it',
			},
			{
				title: 'Физкультура',
				url: '/teachers/fitness',
			},
			{
				title: 'Математика',
				url: '/teachers/math',
			},
			{
				title: 'Иностранные языки',
				url: '/teachers/languages',
			},
		],
	},
]

export const navCourses = [
	{
		name: 'Курс по программированию на языке Python',
		url: '#',
		image: 'https://avatars.githubusercontent.com/u/1486366',
	},
	{
		name: 'Go lang для чайников',
		url: '#',
		image: 'https://avatars.githubusercontent.com/u/1486366',
	},
]

export const navSections = [
	{
		name: 'Английский язык',
		url: '#',
		image: 'https://avatars.githubusercontent.com/u/1486366',
	},
	{
		name: 'Математика от Сауле Бактыбаевны',
		url: '#',
		image: 'https://avatars.githubusercontent.com/u/1486366',
	},
]

export const navFooter = [
	{
		title: 'FAQ',
		url: '/faq',
		icon: CircleQuestionMark,
	},
	{
		title: 'support',
		url: '/support',
		icon: Headset,
	},
]
