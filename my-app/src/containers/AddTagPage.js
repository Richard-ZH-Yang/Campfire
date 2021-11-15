
import React from "react";
import {Link} from "react-router-dom";

function AddTagPage() {
    const styles = {
        header: {
          backgroundImage: "url(/campfire.jpeg)",
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }

    function handleAdd(){
        return
    }

    return (

<div style={styles.header}>
  <div style={styles.content}>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3" style={{width: 400, color:'white'}}>Add Your New Story Here</h1>
        <p class="col-lg-10 fs-4" style={{color:'white'}}> Share your secret story to other people</p>
    </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-white" style={{width: 500, opacity: 0.8}}>
        <div class="form-floating mb-3">
            <input class="form-control" id="tag" placeholder="text"/>
            <label for="tag">Tag</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" style={{height: 100}} id="newStory" placeholder="text"></textarea>
            <label for="newStory">Your story</label>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Back</button>
            </Link>
            <button onClick={handleAdd} type="button" class="btn btn-outline-secondary btn-lg px-4">Submit</button>
        </div>
          <hr class="my-4"/>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
    )
}

export default AddTagPage;