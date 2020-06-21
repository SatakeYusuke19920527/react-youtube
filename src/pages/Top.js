import React, {useEffect, useContext} from 'react'
import {fetchPopularData} from '../apis/index'
import Layout from '../components/layout/Layout'
import {Store} from '../store/index'

const Top = () => {
    const {globalState, setGlobalState} = useContext(Store)
    useEffect(() => {
        fetchPopularData().then(res => {
            console.log('res', res)
            setGlobalState({type: 'SET_POPULAR', payload:{popular:res.data.items}})
        })
    }, [])
  return (
    <Layout>
      Top
    </Layout>
  )
}

export default Top
