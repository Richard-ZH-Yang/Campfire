import React from "react";

function AddTagPage() {
    function handleSubmitStory(){
        return
    }

    return (
        <>
            <div>Add New Story</div>
            <div>
                <label for="tag">Current Tag:</label> 
                <input type="text" id="tag"></input> 
            </div>
            <div>
                <label for="content">Your Story:</label> 
                <input type="text" id="content"></input> 
            </div>
            <button onClick={handleSubmitStory}> Submit</button>
            <button>Back</button>
        </>
    )
}

export default AddTagPage;