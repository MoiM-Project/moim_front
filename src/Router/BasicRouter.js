import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/main/MainPage';
import SpaceList from '../pages/host/SpaceList';
import ReviewList from '../pages/review/ReviewList';
import Like from '../pages/like/Like';
import Detail from '../pages/roomsdetail/Detail';
import MainTheme from '../pages/main/Theme';
import Theme from '../pages/theme/Theme';

import BookingDetail from '../pages/booking/BookingDetail';
import BookingList from '../pages/booking/BookingList';
import BookingMain from '../pages/booking/BookingMain';
import SpaceAddForm from '../pages/host/SpaceAddForm';
import SpaceAddForm2 from '../pages/host/SpaceAddForm2';
import Login from '../pages/login/Login';
import SignUp from '../pages/login/SignUp';
import SignUpEmail from '../pages/login/SignUpEmail';
import Mypage from '../pages/mypage/Mypage';
import CategoryRoom from '../pages/categoryroom/CategoryRoom';
import SpaceAddForm3 from '../pages/host/SpaceAddForm3';
import HostTotalPlace from '../pages/roomsdetail/HostTotalPlace';
import Search from '../pages/search/Search';
import Notice from '../pages/notice/Notice';
import SellerLogin from '../pages/login/SellerLogin';
import SellerJoin from '../pages/login/SellerJoin';
import SpaceUpdateForm from '../pages/host/SpaceUpdateForm';
import SpaceUpdateForm2 from '../pages/host/SpaceUpdateForm2';
import SpaceUpdateForm3 from '../pages/host/SpaceUpdateForm3';
import SpaceBookingList from '../pages/host/SpaceBookingList';
import SpaceCalendar from '../pages/host/SpaceCalendar';
import SpaceBookingDetail from '../pages/host/SpaceBookingDetail';
import PasswordSearch from '../pages/login/PasswordSearch';
import PasswordSearch2 from '../pages/login/PasswordSearch2';
import SpaceAcount from '../pages/host/SpaceAcount';
import HostReviewQna from '../pages/host/HostReviewQna';
import SearchRoom from '../pages/search/SearchRoom';
import Recent from '../pages/mypage/recent/Recent';

function BasicRouter() {
	return (
		<>
			<Routes>
				<Route path='' element={<Mainpage />} />
				{/* ??????/Q&A ?????????(?????????) */}
				<Route path='review' element={<ReviewList />} />
				{/* ????????? */}
				<Route path='like' element={<Like />} />
				{/* ?????? ??????????????? */}
				<Route path='detail/:num' element={<Detail />} />
				{/* ?????? ????????? ?????? ????????? */}
				<Route path='hostPlace/:hostNum' element={<HostTotalPlace />} />
				{/* ??????????????? theme component */}
				<Route path='main_theme' element={<MainTheme />} />
				{/* ????????? ????????? */}
				<Route path='theme'>
					<Route path=':themeNum' element={<Theme />} />
				</Route>
				{/* ????????? */}
				<Route path='host'>
					{/* ??????????????? */}
					<Route path='slist' element={<SpaceList />} />
					<Route path='addform/' element={<SpaceAddForm />} />
					<Route path='addform2/:num' element={<SpaceAddForm2 />} />
					<Route path='addform3/:num' element={<SpaceAddForm3 />} />
					<Route
						path='updateform/:num'
						element={<SpaceUpdateForm />}
					/>
					<Route
						path='updateform2/:num'
						element={<SpaceUpdateForm2 />}
					/>
					<Route
						path='updateform3/:num'
						element={<SpaceUpdateForm3 />}
					/>
					{/* ??????????????? */}
					<Route path='bookinglist' element={<SpaceBookingList />} />
					<Route path='bookingcalendar' element={<SpaceCalendar />} />
					<Route
						path='bookingdetail/:bookingDetailNum'
						element={<SpaceBookingDetail />}
					/>
					{/* ?????? */}
					<Route path='acount' element={<SpaceAcount />} />
					<Route path='reviewqna' element={<HostReviewQna />} />
				</Route>
				{/* ????????? ??? */}

				{/* ?????????_????????? */}
				{/* <Route path='admin'>
					<Route path='' element={<AdminMain />} />
				</Route> */}

				{/* ??????????????? */}
				<Route path='booking'>
					<Route path='main' element={<BookingMain />} />
					<Route path='list/:userNum' element={<BookingList />} />
					<Route
						path='detail/:bookingDetailNum'
						element={<BookingDetail />}
					/>
				</Route>

				{/* ?????????, ???????????? */}
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='signupEmail' element={<SignUpEmail />} />
				<Route path='seller' element={<SellerLogin />} />
				<Route path='sellerJoin' element={<SellerJoin />} />
				{/* <Route path='mypage' element={<Mypage />} /> */}
				{/* ???????????? ?????? */}
				<Route path='passwordsearch' element={<PasswordSearch />} />
				<Route path='passwordsearch2' element={<PasswordSearch2 />} />

				{/* ?????? ??? ?????? */}
				<Route path='recent' element={<Recent />} />

				{/* ??????????????? ??? ????????? */}
				<Route path='categoryroomList'>
					<Route path=':categoryNum' element={<CategoryRoom />} />
				</Route>

				{/* ?????? ???????????? */}
				{/* <Route path='searchroom' element={<Search name={'React'} />}> */}
				<Route
					path='searchroom'
					element={<SearchRoom name={'React'} />}
				>
					{/* <Route path=':searchWord' element={<Search />} /> */}
				</Route>

				{/* ???????????? Notice */}
				<Route path='notice'>
					<Route path='' element={<Notice />} />
				</Route>

				<Route
					path='*'
					element={
						<div>
							<h1>????????? URL ???????????????</h1>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default BasicRouter;
