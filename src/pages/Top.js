import React, {useEffect} from 'react'
import {fetchPopularData} from '../apis/index'
import Layout from '../components/layout/Layout'

const Top = () => {
    useEffect(() => {
        fetchPopularData().then(res => {
            console.log('res', res)
        })
    }, [])
  return (
    <Layout>
      Top
    </Layout>
  )
}

export default Top
