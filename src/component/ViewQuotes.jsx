import React, { useEffect, useState } from 'react'
import NavQuotes from './NavQuotes'
import axios from 'axios'

const ViewQuotes = () => {
    const [data,changeData] =useState({"quotes":[]})
    const fetchData =() =>{
        console.log("hello")
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
       
    
  return (
    <div>
        <NavQuotes/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">quote</th>
                                    <th scope="col">author</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.quotes.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th>{value.id}</th>
                                    <td>{value.quote}</td>
                                    <td>{value.author}</td>
                                    
                                </tr>
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewQuotes