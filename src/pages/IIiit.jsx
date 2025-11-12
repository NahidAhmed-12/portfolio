import React from 'react';

/**
 * SocialIcon Component: Renders a social media link with an icon.
 * @param {object} props - Component props.
 * @param {string} props.href - The URL for the social link.
 * @param {React.ReactNode} props.children - The SVG icon.
 * @returns {JSX.Element}
 */
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

/**
 * LinkList Component: Renders a titled list of footer links.
 * @param {object} props - Component props.
 * @param {string} props.title - The title of the link list.
 * @param {string[]} props.list - An array of link names.
 * @returns {JSX.Element}
 */
const LinkList = ({ title, list }) => (
    <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
        <ul className="mt-4 space-y-2">
            {list.map((item, i) => (
                <li key={i}>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

/**
 * Main Footer Component: The primary component for the website footer.
 * It is responsive and designed to show a background image through transparency.
 */
function Footer() {
    // Data for the link lists
    const listA = ["Investors", "Features", "Book a demo", "Security"];
    const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
    const listC = ["Free rewards", "Documentation", "Affiliate program"];
    const listD = ["Changelog", "License", "Site Maps", "News"];

    return (
        // The main footer container.
        // `relative z-10`: Ensures the footer is layered correctly on the page.
        // `bg-black/30`: Creates a semi-transparent black background.
        // `backdrop-blur-lg`: Adds a blur effect to whatever is behind the footer.
        <footer className="relative z-10 bg-black/30 backdrop-blur-lg text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Top section of the footer with company info and links */}
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    
                    {/* Column 1: Company Info */}
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center gap-3">
                            <img className="h-8 w-auto" src="/Images/Exclude.svg" alt="Wern Finance Logo" />
                            <h5 className="font-bold text-xl text-white">Wern Finance</h5>
                        </div>
                        <p className="text-gray-400 text-base max-w-xs">
                            Discover the power of our secure and rewarding credit cards.
                        </p>
                    </div>

                    {/* Columns 2 & 3: Link Lists */}
                    <div className="mt-12 xl:mt-0 xl:col-span-2">
                        {/* 
                          Responsive Grid for Links:
                          - `grid-cols-2`: On small screens (phones), links are in 2 columns. This puts "Products" next to "About Us" and "Resources" next to "Useful Links" on the next row.
                          - `md:grid-cols-4`: On medium screens (tablets/desktops) and larger, links are in 4 columns.
                        */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <LinkList title="About Us" list={listA} />
                            <LinkList title="Products" list={listB} />
                            <LinkList title="Useful Links" list={listC} />
                            <LinkList title="Resources" list={listD} />
                        </div>
                    </div>
                </div>

                {/* Bottom section of the footer with copyright and social media icons */}
                <div className="mt-12 border-t border-gray-700/50 pt-8 flex flex-col sm:flex-row-reverse sm:justify-between items-center">
                    <div className="flex space-x-6">
                        {/* Facebook Icon */}
                        <SocialIcon href="#">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </SocialIcon>

                        {/* Twitter Icon */}
                        <SocialIcon href="#">
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </SocialIcon>

                        {/* GitHub Icon */}
                        <SocialIcon href="#">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.014c0 4.436 2.864 8.19 6.737 9.54.49.09.668-.213.668-.472 0-.233-.008-.85-.013-1.668-2.782.605-3.369-1.343-3.369-1.343-.446-1.13-1.09-1.43-1.09-1.43-.892-.61.067-.6.067-.6 1 .07 1.527 1.026 1.527 1.026.89 1.523 2.34 1.083 2.91.828.092-.643.35-1.083.636-1.332-2.22-.253-4.555-1.113-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.104-.253-.448-1.27.098-2.645 0 0 .84-.27 2.75 1.022A9.55 9.55 0 0112 6.838c.85.004 1.705.114 2.504.336 1.91-1.29 2.75-1.022 2.75-1.022.546 1.375.202 2.392.1 2.645.64.7 1.026 1.593 1.026 2.683 0 3.84-2.337 4.687-4.565 4.935.358.308.676.918.676 1.85 0 1.334-.012 2.41-.012 2.736 0 .26.176.564.672.47C19.138 20.202 22 16.45 22 12.014 22 6.477 17.523 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </SocialIcon>
                    </div>
                    <p className="mt-8 sm:mt-0 text-base text-gray-400">&copy; {new Date().getFullYear()} Wern Finance. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
