import React, { useState } from 'react'
import NavQuotes from './NavQuotes'

const AddQuotes = () => {
    const [data,changeData]=useState(
        {
        "id":"",
        "quote":"",
        "author":""

}
)
const inputHandler =(event) =>{
    changeData({...data,[event.target.name]:event.target.value})
}
const readvalue =() => (
    console.log(data)
)

  return (
    <div>
        <NavQuotes/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">quote</label>
                            <input type="text" className="form-control" name='quote' value={data.quote} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">author</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning"onClick={readvalue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQuotes