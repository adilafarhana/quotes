import React from 'react'
import NavQuotes from './NavQuotes'

const SearchQuotes = () => {
  return (
    <div>
        <NavQuotes/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">quotes</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning">search</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchQuotes