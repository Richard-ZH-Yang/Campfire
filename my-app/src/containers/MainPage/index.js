import React from 'react';
import LeftContent from "./LeftContent";
import RankingList from "./RankingList";
import '../../CSS/Main.css'
function MainPage(props) {
    return (

        <div className="d-flex justify-content-center align-items-center h-auto mainBack ">
        <div className="px-4 py-5 col-xl-10 col-xxl-8 ">
            <div className="row flex-lg-row-reverse align-items-stretch g-5 py-5">
                <RankingList></RankingList>
                <LeftContent></LeftContent>
            </div>
        </div>
        </div>
    )
}

export default MainPage