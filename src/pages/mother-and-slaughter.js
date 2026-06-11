import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/mother-slaughter';

const MotherSlaughter = () => {
  return (
    <Layout pageTitle="Mother & Slaughter">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default MotherSlaughter 