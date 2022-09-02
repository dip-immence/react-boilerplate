import React from 'react'
import Seo from '../../components/seo'
import Layout from '../../layout'
import './home.scss'
import { homePageMetaInfo } from '../../utils/metaData'

const Home = () => {
  return (
    <>
      <Layout>
        <Seo
          title={homePageMetaInfo.title}
          description={homePageMetaInfo.description}
          keyword={homePageMetaInfo.keyword}
        />
        <div>Home</div>
      </Layout>
    </>
  )
}

export default Home
