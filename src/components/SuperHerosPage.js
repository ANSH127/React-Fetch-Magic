import React from 'react'
import axios from 'axios'
import {useEffect } from 'react'
export default function SuperHerosPage() {

  const [isloading, setisloading] = React.useState(true)
  const [data, setdata] = React.useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setdata(res.data)
      setisloading(false)
    }
    )



  }, [])
  if (isloading) {
    return (
      <div>loading...</div>
    )
  }


  return (
    <>
      <div>SuperHerosPage</div>
      {
        data.map((item) => {
          return <div>
            <h1>{item.name}</h1>
          </div>

        })
      }
    </>



  )
}
