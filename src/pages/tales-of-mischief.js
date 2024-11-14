import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/mischief';

const Mischief = () => {
  return (
    <Layout pageTitle="Tales of Mischief and F*ckery">
      <BlockLayoutPage content={content} flip={true}/>
    </Layout>
  )
}

export default Mischief 