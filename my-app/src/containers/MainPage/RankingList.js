import React from 'react';

function RankingList(props) {
    return (

        <div className="col-10 col-sm-8 col-lg-5 border">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                   
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                   
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                  
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RankingList;