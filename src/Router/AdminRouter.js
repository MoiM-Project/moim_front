import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import BannerManagement from '../pages/admin/BannerManagement';
import HostManagement from '../pages/admin/HostManagement';
import MemberManagement from '../pages/admin/MemberManagement';
import NoticeManagement from '../pages/admin/notice/NoticeManagement';
import PopUpManagement from '../pages/admin/PopUpManagement';
import ReportManagement from '../pages/admin/ReportManagement';
import SettlementManagement from '../pages/admin/SettlementManagement';
import SpaceManagement from '../pages/admin/space/SpaceManagement';

import ThemeManagement from '../pages/admin/ThemeManagement';
import Theme from '../pages/admin/theme/Theme';
import AdminMain from '../pages/admin/adminmain/AdminMain';

function AdminRouter() {
	return (
		<>
			<Routes>
				{/* admin 레이아웃을 적용받을 js 페이지 */}
				<Route path='' element={<AdminMain />} />
				<Route path='member' element={<MemberManagement />} />
				<Route path='host' element={<HostManagement />} />
				<Route path='space' element={<SpaceManagement />} />
				<Route path='report' element={<ReportManagement />} />
				<Route path='notice' element={<NoticeManagement />} />
				<Route path='popup' element={<PopUpManagement />} />
				<Route path='banner' element={<BannerManagement />} />
				<Route path='theme' element={<Theme />} />
				<Route path='theme' element={<ThemeManagement />} />
				{/* 
				<Route path='popup' element={<PopUpManagement />} />
				<Route path='banner' element={<BannerManagement />} />
				 */}
				<Route path='settlement' element={<SettlementManagement />} />
			</Routes>
		</>
	);
}

export default AdminRouter;
