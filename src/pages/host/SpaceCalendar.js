import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import './SpaceCalendar.css';

function SpaceCalendar(props) {
	localStorage.url = 'http://localhost:9000';
	const hostNum = sessionStorage.num; // 여기에 호스트넘버 받아야합니다
	console.log(hostNum);
	// const {hostNum} = useParams();

	const [data, setData] = useState([
		{
			title: 'aaa',
			date: '2022-11-24',
		},
		{
			title: 'aaa2',
			date: '2022-11-25',
		},
	]);
	const [sort, setSort] = useState('');
	const [bookingList, setBookingList] = useState([]);
	const [bookingStatus, setBookingStatus] = useState('3');
	console.log(bookingList);

	const getBookingList = () => {
		let bookingListUrl =
			localStorage.url +
			`/host/bookinglist?hostNum=${hostNum}&bookingStatus=${bookingStatus}&sort=${sort}`;
		axios.get(bookingListUrl).then((res) => {
			setBookingList(res.data);
		});
		console.log(bookingListUrl);
	};

	console.log(bookingList);
	useEffect(() => {
		getBookingList();
	}, []);

	useEffect(() => {
		let a = new Array();

		bookingList.map((b, i) =>
			a.push({
				title: b.roomName,
				date: b.bookingDate,
				// startTime: b.bookingTime[0],
				// endTime: b.bookingTime[b.bookingTime.length - 1],
			}),
		);
		setData(a);
	}, [bookingList]);
	console.log(data);

	return (
		<div style={{height: '100vh'}}>
			{/* <h1>예약리스트에서 캘린더보기 누르면 오는 페이지</h1> */}
			<div>
				<FullCalendar
					id={'calendar'}
					locale={'ko'}
					defaultView='dayGridMonth'
					plugins={[dayGridPlugin]}
					// events={[
					// 	{title: 'event 1', date: '2022-11-24'},
					// 	{title: 'event 2', date: '2022-11-28'},
					// ]}
					events={data}
					// eventTextColor='black'
				/>
			</div>
		</div>
	);
}

export default SpaceCalendar;
