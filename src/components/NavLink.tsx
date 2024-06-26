"use client";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

interface NavLinkProps {
    name: string;
    href: string;
    icon: IconProp;
    bottomBorder?: boolean;
}

const NavLink = ({ name, href, icon, bottomBorder = true }: NavLinkProps) => {
    const pathname = usePathname();
    const borderClass = bottomBorder ? 'border-b-4' : 'border-l-4';
    return (
        <Link href={href} className={cx('!rounded-none', { [`${borderClass} border-primary`]: pathname === href })}>
            <span className="text-left">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className='mx-2 text-sm font-normal'>{name}</span>
        </Link>
    );
};

export default NavLink;
