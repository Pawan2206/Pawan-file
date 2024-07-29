export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Why Gusto',
        href: '#',
    },
    {
        label: 'Products',
        children: [
            {
                label: 'Payroll',
                subLabel: 'Automated deductions, direct deposit and tax filing',
                href: '#',
            },
            {
                label: 'Time and attendance',
                subLabel: 'Time tracking and time-off requests',
                href: '#',
            },
            {
                label: 'Workers’ comp',
                subLabel: 'Protect you and your team if an injury or illness happens',
                href: '#',
            },
            {
                label: 'Employee benefits',
                subLabel: 'Health benefits, automatic savings, 401(k)s, and more',
                href: '#',
            },
            {
                label: 'Hiring and onboarding',
                subLabel: 'Offer letters, checklists, software setup, and more',
                href: '#',
            },
            {
                label: 'Integrations',
                subLabel: 'Connect Gusto with your favorite tools and software',
                href: '#',
            },
            {
                label: 'HR',
                subLabel: 'Hiring, onboarding, talent management, and compliance',
                href: '#',
            },
            {
                label: 'Talent management',
                subLabel: 'Performance reviews and development',
                href: '#',
            },
            {
                label: 'Compare',
                subLabel: 'Learn how Gusto stacks up against other payroll providers',
                href: '#',
            },
        ],
    },
    {
        label: 'Solutions',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Accountants',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Resources',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ]
    },
    {
        label: 'Pricing',
        href: '#',
    },
]


interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

