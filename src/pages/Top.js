import React, {useEffect, useContext} from 'react'
import {fetchPopularData} from '../apis/index'
import Layout from '../components/layout/Layout'
import {Store} from '../store/index'
import VideoGrid from '../components/videoGrid/VideoGrid'
import VideoGridItem from '../components/videoGridItem/VideoGridItem'

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
          <VideoGrid>
              {
                globalState.popular && globalState.popular.map(popular => {
                    return (
                        <VideoGridItem
                            id={popular.id}
                            key={popular.id}
                            src={popular.snippet.thumbnails.standard.url}
                            title={popular.snippet.title}
                        />
                    )
                })
                
              }
          </VideoGrid>
    </Layout>
  )
}

export default Top
