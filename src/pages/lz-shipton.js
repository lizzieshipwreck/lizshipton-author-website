import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/lz-shipton';

const LZShipton = () => {
  return (
    <Layout pageTitle="L. Z. Shipton">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default LZShipton 