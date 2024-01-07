import React from 'react'
import {RingLoader} from 'react-spinners'
export default function Spinner() {
    return (
       
        <div class="container">
        <div class="d-flex justify-content-center">
          <div class="p-2 bg-transparent text-white"><RingLoader  color="#f10202" /></div>
        </div>
      </div>
    )
}
