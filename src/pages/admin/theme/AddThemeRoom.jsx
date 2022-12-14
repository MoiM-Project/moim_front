import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import AddThemeRoomList from './AddThemeRoomList';
import Button from '@mui/material/Button';

export default function AddThemeRoom(props) {
	const [open, setOpen] = React.useState(false);
	const [roomNumList, setRoomNumList] = useState();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const insertTheme = (e) => {
		let url = localStorage.url + '/theme/insert/room';
		const data = {roomNumList: roomNumList, themeNum: props.themeNum};
		axios({
			method: 'post',
			url: url,
			data: data,
		}).then((res) => {
			alert('등록이 완료되었습니다.');
			setOpen(false);
		});
	};

	return (
		<>
			<Button
				variant='outlined'
				color='inherit'
				onClick={handleClickOpen}
			>
				공간 추가하기
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'기획전 공간 추가'}
				</DialogTitle>
				<DialogContent style={{paddingBottom: '0'}}>
					<AddThemeRoomList
						themeNum={props.themeNum}
						themeTitle={props.themeTitle}
						setRoomNumList={setRoomNumList}
					/>
				</DialogContent>
				<DialogActions style={{padding: '0'}}>
					<ButtonWrapper>
						<CancelBtn onClick={handleClose}>취소</CancelBtn>
						<InsertBtn onClick={insertTheme} autoFocus>
							등록
						</InsertBtn>
					</ButtonWrapper>
				</DialogActions>
			</Dialog>
		</>
	);
}

const CancelBtn = styled.div`
	background-color: #b0b0b0;
`;
const InsertBtn = styled.div`
	background-color: #704de4;
`;
const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	> div {
		width: 50%;
		color: white;
		text-align: center;
		height: 50px;
		line-height: 50px;
		cursor: pointer;
	}
`;
