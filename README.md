# 우리만의 공간, MoiM

<br>

#### MEMBERS

[김병찬👩‍💻](https://github.com/Chan0226)</br>
[윤명국👨‍💻](https://github.com/kkookkss)</br>
[원종환👩‍💻](https://github.com/Jonghwan-Won)</br>
[김민성👨‍💻](https://github.com/nakimminsung)</br>
[현선혜👩‍💻](https://github.com/shvyeon)</br>
[권성민👨‍💻](https://github.com/KSM980)</br>
</br></br>

# Project

### 🗂 프로젝트 설명

<pre>“생활공간대여 플랫폼 MoiM!”

호스트는 자신만의 소중한 공간을 남들과 공유할 수 있고, 
게스트는 원하는 공간에서 필요한 시간만큼 공간을 예약할 수 있는 생활 공간 플랫폼입니다.
</pre>

### 📆 Project Timeline

-   기간 : 2022.11.05 ~ 2022.12.09
-   개발 언어 : Javascript, Java
-   개발 라이브러리 : React
-   개발 프레임워크 : Spring Boot
-   배포 환경 : Amazon S3
-   협업 툴 : Git / Notion

## ✨ 페이지 별 기능

-   **`메인`**
    <br/>
    사람들이 공유한 장소들을 둘러볼 수 있습니다.
    카테고리별, 기획전, 오늘의 추천공간, 리뷰 등으로 구성되어 있습니다.:)
-   **`카테고리별`**
    <br/>
    카테고리별로 구분된 장소들을 둘러보세요!
    원하는 조건에 따라 필터링해서 검색할 수 있고, 지도버튼을 눌러서 지도상에서 위치를 찾아볼 수 있습니다.

-   **`상세페이지`**<br/>
    공간에 대한 정보를 유저들이 보다 편리하게 볼 수 있도록 구성하였고 간편하게 예약기능,찜하기,신고 기능 등 여러가지 기능들을 사용하실 수 있습니다.

    -   공간소개<br/>
        상단 고정 메뉴바를 사용하여 공간소개, 지도, 길찾기, Q&A작성, 리뷰(사진만 보기) 등을 확인하실 수 있습니다.
    -   사이드 메뉴<br/>
        사이드 메뉴바를 사용하여 찜, 신고, 예약 기능을 할 수 있으며 예약의 경우 예약 가능한 시간대만 클릭이
        되며 클릭 시 예약 금액을 계산하여 총 예약 금액을 확인할 수 있는 기능을 제공하고 있습니다.
    -   추가정보<br/>
        하단에 해당 공간을 올린 게스트의 다른 공간들과 상세페이지와 유사한 카테고리를 가진 추천공간을 확인하실 수 있습니다.

-   **`관리자페이지`**
    <br/>
    서비스 이용자, 공간, 공지사항, 기획전, 신고 관리 등의 기능이 있는 관리자를 위한 공간입니다.
-   **`호스트페이지`**
    <br/>
    호스트가 공간에 대한 정보를 등록하고, 관련 정보를 수정·삭제할 수 있는 공간입니다.
-   **`예약페이지`**
    <br/>
    마음에 드는 공간을 예약하고, 예약한 정보들을 다시 확인할 수 있습니다.
    -   승인결제
        승인 결제 상품의 경우 예약 신청이 가능합니다. 이후 호스트가 예약 승인을 해주면, 결제가 가능한 상태가 됩니다.
    -   바로결제
        바로 결제 상품의 경우 예약 페이지에서 결제가 가능합니다.
        일반결제(KG이니시스), 카카오페이, 페이코, 토스페이 결제를 할 수 있습니다.
-   **`예약 내역 리스트`**
    <br/>
    지금까지 예약했던 모든 상품을 확인해 볼 수 있습니다.
    승인대기/결제대기/예약확정/이용완료/취소환불로 구분됩니다.
-   **`예약 상세 페이지`**
    <br/>
    예약했던 내용을 다시 확인할 수 있는 페이지 입니다.
    예약 상태별로 다른 기능을 구현했습니다.
    -   승인결제 / 예약확정
        예약 취소를 할 수 있습니다. 유저는 취소사유를 선택하거나, 직접 입력할 수도 있습니다.
    -   결제대기
        결제 진행을 할 수 있습니다. (승인대기 상품)
    -   이용완료
        방에 대한 리뷰 작성을 할 수 있습니다. 별점 선택, 리뷰 내용, 사진 첨부가 가능합니다.
-   **`찜한 공간`**
    <br/>
    나만의 찜한 공간을 만들 수 있습니다.
    마음에 드는 공간들을 찜하여 인기순&가격순 다시 볼 수 있고 찜한 공간을 삭제할 수 있습니다.
-   **`검색`**
    <br/>
    원하는 공간 키워드를 검색하여, 해당 공간들을 찾아볼 수 있습니다.
    최신순&인기순&가격순으로 나눠서 볼 수 있어요!
-   **`이용후기`**
    <br/>
    호스트의 경우 해당 공간을 사용한 유저들의 생생하고 솔직한 후기를 관리하실 수 있습니다.
    유저의 경우 해당 공간을 사용한 후 생생하고 솔직한 후기를 작성하고 공유/수정/삭제할 수 있습니다.
-   **`Q&A`**
    <br/>
    호스트의 경우 해당 공간에 대한 유저들의 질문을 관리할 수 있으며 답변을 작성할 수 있습니다.
    유저의 경우 해당 공간에 대한 궁금한 점을 작성하고 공유/수정/삭제할 수 있습니다.
-   **`마이페이지`**
    <br/>
    프로필&비밀번호 변경, 회원탈퇴 등 회원정보 수정 및 삭제 기능이 가능하며,
    사이드메뉴에는 나의리뷰, 찜 목록, 나의예약, 최근 본 장소 등 회원만의 맞춤메뉴를 확인할 수 있습니다.
-   **`최근 본 공간`**
    <br/>
    회원이 최근에 본 공간들을 볼 수 있는 페이지입니다.
    유저가 상세페이지에 접속시 해당 공간의 id를 브라우저의 세션 스토리지에 저장하는 방식입니다.

<br/>

## 🛠 Tech Stack & Platform

### **Tech**

<p>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
</br>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> 
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"> 
<img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white">

<br>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<br>
</p>

</br>

## 아키텍처✨

<img src="https://user-images.githubusercontent.com/89297158/171176309-a0918a08-0596-43da-810e-e1b9737e98d0.png"/>

## ERD

![erd1](https://user-images.githubusercontent.com/84282676/207521184-b64177f3-064a-4b72-9e3f-f54916acb2db.PNG)
</br></br>

## 사이트 데모🎥

<details>
<summary>메인</summary>

|                                                                        메인페이지                                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/mainpage/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true" width="100%"/> |

</details>

<br />
<details>
<summary>회원가입 & 로그인</summary>

|                                                          일반 회원가입                                                          |                                                          소셜 회원가입                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/84282676/208115955-693b9163-2cc3-434a-b08b-d0c38d65382a.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/84282676/208117038-50738402-1d7a-4e07-a4dc-c499021b1af8.gif" width="100%"/> |

|                                                           일반 로그인                                                           |                                                           소셜 로그인                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/84282676/208117941-382e7fd1-f0b9-4dd8-8728-8c3e5d6bd1a8.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/84282676/208117799-429cf0bb-41ff-40ed-b947-dc5707ea84dd.gif" width="100%"/> |

</details>

<br />
<details>
<summary>마이페이지</summary>

|                                                           마이페이지                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/84282676/208371583-055ca39b-f4c3-4432-972f-ec60407903df.gif" width="100%"/> |

</details>

<br />
<details>
<summary>통합검색</summary>

|                                                            통합검색                                                             |
| :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/84282676/208123031-5073d646-070a-431c-999e-2eb83f9a4ae3.gif" width="100%"/> |

</details>

<br />
<details>
<summary>카테고리</summary>

|                                                       카테고리 메인페이지                                                       |                                                          카테고리 지도                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/84282676/208364692-366d9302-e829-4e18-a092-289bbb19961a.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/84282676/208369025-af99b493-221f-4866-b129-ac7bb6c05c4c.gif" width="100%"/> |

</details>

<br />

<details>
<summary>관리자 페이지</summary>

|                                                                                        관리자 메인                                                                                         |                                                                                    게스트 관리                                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                   <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%EB%A9%94%EC%9D%B8.gif?raw=true" width="100%"/>                   | <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%EA%B2%8C%EC%8A%A4%ED%8A%B8%EA%B4%80%EB%A6%AC1.gif?raw=true" width="100%"/> |
|                                                                                        호스트 관리                                                                                         |                                                                                     공간 관리                                                                                      |
|     <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%ED%98%B8%EC%8A%A4%ED%8A%B8%EA%B4%80%EB%A6%AC.gif?raw=true" width="100%"/>      |      <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%EA%B3%B5%EA%B0%84%EA%B4%80%EB%A6%AC.gif?raw=true" width="100%"/>      |
|                                                                                       공지사항 관리                                                                                        |                                                                                    기획전 관리                                                                                     |
| <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD%EA%B4%80%EB%A6%AC.gif?raw=true" width="100%"/> |                                                                             <img src="" width="100%"/>                                                                             |
|                                                                                         신고 관리                                                                                          |                                                                                                                                                                                    |
|          <img src="https://github.com/MoiM-Project/data/blob/main/readmeImage/admin/%EA%B4%80%EB%A6%AC%EC%9E%90_%EC%8B%A0%EA%B3%A0%EA%B4%80%EB%A6%AC.gif?raw=true" width="100%"/>          |                                                                                                                                                                                    |

</details>
<br/>
<details>
<summary>상세페이지</summary>

|                                                 &nbsp;&nbsp;공간사진&nbsp;&nbsp;                                                 |                                                             공간소개                                                             |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/111044928/208633673-67effaaa-3382-4623-bbad-b91ade418a90.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/208633695-6cc7b3e9-a4a2-4138-ac0b-4a87fe1deb15.gif" width="100%"/> |
|                                                             **지도**                                                             |                                                             **Q&A**                                                              |
| <img src="https://user-images.githubusercontent.com/111044928/208645110-52f984ac-dbe0-4ffe-bb55-ee6cec8681a0.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/208835111-309ca819-0292-4a21-afa6-bd905b32db58.gif" width="100%"/> |
|                                                             **리뷰**                                                             |                                                     **호스트공간&추천공간**                                                      |
| <img src="https://user-images.githubusercontent.com/111044928/208640546-1eb9888c-ac97-4b73-a94b-1b4f2d4b1c7a.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/208313348-08a5767f-4e44-4cde-93f0-be903200ab71.gif" width="100%"/> |
|                                                           **찜누르기**                                                           |                                                           **예약하기**                                                           |
| <img src="https://user-images.githubusercontent.com/111044928/208633727-6146ee51-b0f0-4bc3-a80e-ce713f130f3f.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/208639102-e9d0bdef-b0d5-4b9a-90eb-0c67b472d099.gif" width="100%"/> |

</details>

<br />
<details>
<summary>찜한 공간</summary>

|                                                        &nbsp;정렬 &nbsp;                                                         |                                                              찜삭제                                                              |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/111044928/209022843-998e7619-4d62-460e-9cae-b2e5671a915a.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/209022840-7d5eb3ec-67b2-4a59-9853-212c8b4f511d.gif" width="100%"/> |

</details>

<br />
<details>
<summary>이용후기</summary>

|                                                    &nbsp;정렬(호스트) &nbsp;                                                     |                                                           관리(호스트)                                                           |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/111044928/209028207-4576acdf-e4f9-42b7-903c-3647857884b7.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/209027940-e662468a-3da9-4200-915a-f9db39bfffa2.gif" width="100%"/> |
|                                                          **정렬(유저)**                                                          |                                                       **수정/삭제(유저)**                                                        |
| <img src="https://user-images.githubusercontent.com/111044928/209023846-cb6e1273-15c0-40a7-8d40-75800d1ebb16.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/209023850-10ed4e2b-a62e-471d-890c-b5f6eb574a6b.gif" width="100%"/> |

</details>

<br />
<details>
<summary>Q&A</summary>

|                                                    &nbsp;정렬(호스트) &nbsp;                                                     |                                                         답변하기(호스트)                                                         |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/111044928/209027331-1bbafffa-3291-4756-afda-5a492ea1181c.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/209027158-3ce66f9c-90fc-4a6b-9dff-90ba8674ee1a.gif" width="100%"/> |
|                                                          **정렬(유저)**                                                          |                                                       **수정/삭제(유저)**                                                        |
| <img src="https://user-images.githubusercontent.com/111044928/209026246-d726a7d8-6e32-43f3-89ff-2978f686723a.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/111044928/209026649-304315b2-ec50-4d69-ac0b-c68937bf5451.gif" width="100%"/> |

</details>
<br />

<details>
<summary>예약 페이지</summary>

|                                                  **바로결제(예시 카카오페이)**                                                   |                                                           **승인결제**                                                           |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/105392679/208910953-05ca6326-eb6d-4889-a99c-df1d74c4fbf6.gif" width="100%"/> | <img src="https://user-images.githubusercontent.com/105392679/208913815-b31fc038-694c-4d47-bd72-9583ce19daee.gif" width="100%"/> |

</details>
<br/>

<details>
<summary>예약 내역 리스트</summary>

|                                                         예약 내역 리스트                                                         |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/105392679/208925256-f2045b24-818f-4d5d-bd0a-e7fd3687c79d.gif" width="100%"/> |

</details>
<br/>

<details>
<summary>예약 상세 페이지</summary>

|                                                    승인대기/예약확정(예약취소)                                                    |                                                      결제대기(예시 토스페이)                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/105392679/208939043-61c35ac7-f2ff-4aae-9db0-bca97d268a47.gif" width="400px"/> | <img src="https://user-images.githubusercontent.com/105392679/208931369-485ec170-d95c-4cb3-9c8a-53d35f0860cb.gif" width="400px"/> |
|                                                      **이용완료(리뷰작성)**                                                       |                                                         **취소&리뷰모달**                                                         |
| <img src="https://user-images.githubusercontent.com/105392679/208932857-7936f0db-7898-4014-a400-39e5ee3c771f.gif" width="400px"/> | <img src="https://user-images.githubusercontent.com/105392679/208933540-34b025fd-5d61-4af0-b6e6-a09cc9487230.png" width="400px"/> |
|                                                                                                                                   |

</details>
<br/>

## 시연 영상🎥

링크(https://www.youtube.com/watch?v=kmMcIUePNTU)

## [🏷 프로젝트 노션 🏷](https://shadow-blanket-65e.notion.site/MoiM-a37bb15bcad1427f9d47d23048b76edd)
