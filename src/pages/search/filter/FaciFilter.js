import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import TuneIcon from '@mui/icons-material/Tune';
import Menu from '@mui/material/Menu';
import { marks } from '../../thememap/data/PriceMark';

function FaciFilter(props) {
    const { setPayment, setSprice, setEprice, setFacility } = props;
    const [data, setData] = useState([]);
    const [value, setValue] = useState([0, 100000000]);
    const [now, setNow] = useState(false);
    const [fix, setFix] = useState(false);
    const [checked, setChecked] = useState(true);
    const [facilityList, setFacilityList] = useState([]);
    const payRef = useRef('');
    const spriceRef = useRef('');
    const epriceRef = useRef('');

    // 필터메뉴 open 이벤트
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // 편의시설
    const onCheckedElement = (checked, item) => {
        if (checked) {
            setFacilityList([...facilityList, item]);
        } else if (!checked) {
            setFacilityList(facilityList.filter((el) => el !== item));
        }
    };
    const handleFacilityChecked = (event) => {
        setChecked(event.target.checked);
    };
    // 결제유형 체크박스 이벤트
    const handleChecked = (event) => {
        setChecked(event.target.checked);
        setNow(false);
        setFix(false);
    };
    // 가격 필터
    const handleChange = (event, newValue) => {
        setValue(newValue);
        spriceRef.current = value[0];
        epriceRef.current = value[1];
    };
    // 편의시설 select
    const selectFacility = () => {
        let url = localStorage.url + '/facility/select';
        axios.get(url).then((res) => setData(res.data));
    };
    // 초기화 버튼 이벤트
    const initRun = () => {
        // 결제유형
        setChecked(true);
        setNow(false);
        setFix(false);
        payRef.current = '';
        // 가격
        setValue([0, 500000]);
        spriceRef.current = 0;
        epriceRef.current = 500000;
        // 편의시설
    };
    // 필터 적용하기 버튼 이벤트
    const filterRun = () => {
        setPayment(payRef.current);
        setSprice(spriceRef.current);
        setEprice(epriceRef.current);
        setFacility(facilityList);
    };
    useEffect(() => {
        selectFacility();
    }, []);

    return (
        <>
            <FilterButton
                onClick={handleClick}
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <TuneIcon style={{ color: '#9b4de3', fontSize: '25px;' }} />
                <FilterText>필터</FilterText>
            </FilterButton>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Wrapper>
                    <InnerWrapper>
                        <PayTitleWrapper>
                            <Title>결제유형</Title>
                            <Typography>
                                <Checkbox
                                    id='checkInit'
                                    name='check'
                                    color='secondary'
                                    defaultChecked
                                    checked={checked}
                                    onChange={handleChecked}
                                />
                                모든결제
                            </Typography>
                        </PayTitleWrapper>
                        <PayButtonWrapper>
                            <div class='pay-btn'>
                                <input
                                    id='radio-1'
                                    type='radio'
                                    name='pay'
                                    value='now'
                                    checked={now}
                                />
                                <label
                                    for='radio-1'
                                    onClick={() => {
                                        payRef.current = '바로결제';
                                        setNow(true);
                                        setFix(false);
                                        setChecked(false);
                                    }}
                                >
                                    바로 결제
                                </label>
                            </div>
                            <div class='pay-btn'>
                                <input
                                    id='radio-2'
                                    type='radio'
                                    name='pay'
                                    value='fix'
                                    checked={fix}
                                />
                                <label
                                    for='radio-2'
                                    onClick={() => {
                                        payRef.current = '승인결제';
                                        setNow(false);
                                        setFix(true);
                                        setChecked(false);
                                    }}
                                >
                                    승인 결제
                                </label>
                            </div>
                        </PayButtonWrapper>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Title>가격</Title>
                        <Box
                            sx={{
                                width: '93%',
                                margin: '10px',
                                marginTop: '25px',
                            }}
                        >
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                marks={marks}
                                onChange={handleChange}
                                valueLabelDisplay='on'
                                style={{ color: '#9b4de3' }}
                                step={10000}
                                max={500000}
                            />
                        </Box>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Title>편의시설</Title>
                        <Option>
                            {data &&
                                data.map((item, i) => (
                                    <div class='facility-btn' key={i}>
                                        <input
                                            id={`facility-${item.num}`}
                                            type='checkbox'
                                            name='facility'
                                            value={item.num}
                                            onChange={(e) => {
                                                onCheckedElement(
                                                    e.target.checked,
                                                    e.target.value,
                                                );
                                                handleFacilityChecked(e);
                                            }}
                                        />
                                        <label for={`facility-${item.num}`}>
                                            {item.fname}
                                        </label>
                                    </div>
                                ))}
                        </Option>
                    </InnerWrapper>
                    <ButtonWrapper>
                        <CancelButton
                            variant='secondary'
                            onClick={() => initRun()}
                        >
                            초기화
                        </CancelButton>
                        <SubmitButton
                            variant='secondary'
                            onClick={() => {
                                setAnchorEl(null);
                                filterRun();
                            }}
                        >
                            필터 적용하기
                        </SubmitButton>
                    </ButtonWrapper>
                </Wrapper>
            </Menu>
        </>
    );
}

export default FaciFilter;

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 350px;
`;
const InnerWrapper = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const PayTitleWrapper = styled(Box)`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	align-items: center;
`;
const Title = styled(Typography)`
	font-size: 20px;
	margin-bottom: 10px;
`;
const PayButtonWrapper = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const Option = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
	max-height: 300px;
	justify-content: space-between;
`;
const ButtonWrapper = styled(Box)`
	position: relative;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const CancelButton = styled.button`
	background-color: #f0f0f0;
	width: 30%;
	border-radius: 0;
	height: 60px;
	font-size: 20px;
	border: 0;
`;
const SubmitButton = styled.button`
	background-color: #9b4de3;
	width: 70%;
	border-radius: 0;
	height: 60px;
	font-size: 20px;
	color: yellow;
	border: 0;
`;
const FilterText = styled.span`
	margin-left: 10px;
	font-size: 15px;
	color: #9b4de3;
	font-weight: 1000;
`;
const FilterButton = styled.button`
border: 2px solid #9b4de3;
width: 100px;
height: 50px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
font-weight: 1000;
background-color: #fff;
border-radius: 30px;
margin-left: auto;
`;
