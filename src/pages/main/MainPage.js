import {NavLink} from 'react-router-dom';
import Category from './Category';
import './MainPage.css';

import ReviewZone from './ReviewZone';
import SuggestRoom from './SuggestRoom';
import Theme from './Theme';

function Mainpage(props) {
	localStorage.url = 'http://localhost:9000';

	// localStorage.url = process.env.MOIM_APP_BACK_URL;

	return (
		<div>
			{/* <div className='directButton'>
				<ul
					className='main'
					style={{display: 'flex', justifyContent: 'center'}}
				>
					<li>
						<NavLink to={'/admin'}>๊ด๋ฆฌ์๐น</NavLink>
					</li>
					<li>
						<NavLink to={'/host/slist'}>ํธ์คํธ ํ์ด์ง</NavLink>
					</li>
					<li>
						<NavLink to={'/review'}>๋ฆฌ๋ทฐ ํ์ด์ง</NavLink>
					</li>
					<li>
						<NavLink to={'/like'}>์ฐํ ๊ณต๊ฐ</NavLink>
					</li>
					<li>
						<NavLink to={'/booking/list/47'}>
							์์ฝ๋ด์ญ๋ฆฌ์คํธ
						</NavLink>
					</li>
					<li>
						<NavLink to={'/host/bookinglist'}>์์ฝ๋ฆฌ์คํธ</NavLink>
					</li>
					<li>
						<NavLink to={'/chat/chat'}>์ฑํ (ํธ์คํธ)</NavLink>
					</li>
					<li>
						<NavLink to={'/chat/chat'}>์ฑํ (์ ์ )</NavLink>
						<NavLink to={'/passwordsearch'}>๋น๋ฐ๋ฒํธ๋ณ๊ฒฝ</NavLink>
						<NavLink to={'/host/acount'}>์ ์ฐํ์ด์ง</NavLink>
					</li>
					<li>
						<NavLink to={'/notice'}>๊ณต์ง์ฌํญ๐ฆ</NavLink>
					</li>
				</ul>
			</div>
			<hr /> */}

			{/* ์์ ์ง์  */}

			<br />

			{/* ์นดํ๊ณ ๋ฆฌ ์์ญ */}
			<Category />

			<br />
			<br />
			<br />
			<br />

			{/* ๊ธฐํ์  ์์ญ */}
			<Theme />

			<br />
			<br />
			<br />
			<br />

			{/* ์ค๋์ ์ถ์ฒ ๊ณต๊ฐ ์์ญ */}
			<SuggestRoom />
			<br />
			<br />
			<br />
			<br />

			<ReviewZone />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}

export default Mainpage;
