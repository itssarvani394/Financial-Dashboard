'use client';
import React from 'react';
import NavLink from './NavLink';
import { faHome, faUniversity, faFileInvoiceDollar, faCreditCard, faChartPie, faBullseye } from '@fortawesome/free-solid-svg-icons';
import {useUser} from '@auth0/nextjs-auth0/client';

function Header() {
    const {user} = useUser();
    return (
        <header className='z-40 flex h-16 w-full items-center justify-between'>
            <div className='navbar bg-base-100 p-0'>
                <div className='navbar-start h-16'>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn-ghost btn lg:hidden'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='h-5 w-5'
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
                            <li>
                                <NavLink name="Home" href="/" bottomBorder={false} icon={faHome} />
                            </li>
                            <li>
                                <NavLink name="Transactions" href="/transactions" bottomBorder={false} icon={faUniversity} />
                            </li>
                            <li>
                                <NavLink name="Bills-Subscriptions" href="/bills-subscriptions" bottomBorder={false} icon={faFileInvoiceDollar} />
                            </li>
                            <li>
                                <NavLink name="Bank Accounts" href="/bank-accounts" bottomBorder={false} icon={faCreditCard} />
                            </li>
                            <li>
                                <NavLink name="Categories" href="/categories" bottomBorder={false} icon={faChartPie} />
                            </li>
                            <li>
                                <NavLink name="Financial Goals" href="/financial-goals" bottomBorder={false} icon={faBullseye} />
                            </li>
                        </ul>
                    </div>
                    <span className="pl-5 text-xl font-semibold normal-case">Finance Dashboard</span>
                </div>
                <div className='navbar-center hidden h-16 lg:flex'>
                    <ul className='menu menu-horizontal p-0'>
                        <li>
                            <NavLink name="Home" href="/" icon={faHome} />
                        </li>
                        <li>
                            <NavLink name="Transactions" href="/transactions" icon={faUniversity} />
                        </li>
                        <li>
                            <NavLink name="Bills-Subscriptions" href="/bills-subscriptions" icon={faFileInvoiceDollar} />
                        </li>
                        <li>
                            <NavLink name="Bank Accounts" href="/bank-accounts" icon={faCreditCard} />
                        </li>
                        <li>
                            <NavLink name="Categories" href="/categories" icon={faChartPie} />
                        </li>
                        <li>
                            <NavLink name="Financial Goals" href="/financial-goals" icon={faBullseye} />
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
                           { <div className="w-10 rounded-full">
                                {user?.picture && (
                                    <div className=''>
                                        <picture>
                                            <img src={user.picture} alt="profile" className='mx-auto h-10 w-10 rounded-full' />
                                        </picture>
                                    </div>
                                )}                
                            </div>}
                        </label>
                        <ul
                            tabIndex={0}
                            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2'
                        >
                            <li>
                                {}
                                <a href="/api/auth/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;