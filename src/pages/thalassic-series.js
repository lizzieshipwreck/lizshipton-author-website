import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/thalassic_na';

const ThalassicSeries = () => {
  return (
    <Layout pageTitle="Thalassic Series">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default ThalassicSeries 