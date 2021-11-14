import React from 'react';
import LeftContent from "./LeftContent";
import RankingList from "./RankingList";

function MainPage(props) {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <RankingList></RankingList>
              <LeftContent></LeftContent>
            </div>
        </div>
    )
}

export default MainPage