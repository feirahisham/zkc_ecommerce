import React from 'react';
import css from './Footer.module.css';
import logo from '../../assets/logo.png';
import {
	InboxIcon,
	PhoneIcon,
	MapPinIcon,
	UsersIcon,
	LinkIcon,
	ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
	return (
		<div className={css.cFooterWrapper}>
			<hr />
			<div className={css.cFooter}>
				<div className={css.logo}>
					<img
						src={logo}
						alt=''
					/>
					<span>amazon</span>
				</div>

				<div className={css.block}>
					<div className={css.detail}>
						<span>Contact Us</span>
						<span className={css.pngLine}>
							<MapPinIcon className={css.icon} />
							<span>09000, Kedah, Malaysia</span>
						</span>
						<span className={css.pngLine}>
							<PhoneIcon className={css.icon} />
							<span>+60 13 111 1111</span>
						</span>
						<span className={css.pngLine}>
							<InboxIcon className={css.icon} />
							<span>work@gmail.com</span>
						</span>
					</div>
				</div>

				<div className={css.block}>
					<div className={css.detail}>
						<span>Account</span>
						<span className={css.pngLine}>
							<ArrowLeftOnRectangleIcon className={css.icon} />
							<span>Sign In</span>
						</span>
					</div>
				</div>

				<div className={css.block}>
					<div className={css.detail}>
						<span>Company</span>
						<span className={css.pngLine}>
							<UsersIcon className={css.icon} />
							<span>About us</span>
						</span>
					</div>
				</div>

				<div className={css.block}>
					<div className={css.detail}>
						<span>Resources</span>
						<span className={css.pngLine}>
							<LinkIcon className={css.icon} />
							<span>Safety Privacy & Terms</span>
						</span>
					</div>
				</div>
			</div>

			<div className={css.copyRight}>
				<span>Copyright &copy;2022 by Lovac Nauka, Inc.</span>
				<span>All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
