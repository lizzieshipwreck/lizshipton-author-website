import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/reaves';

const HaileyReaves = () => {
  return (
    <Layout pageTitle="Hailey Reaves">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default HaileyReaves 