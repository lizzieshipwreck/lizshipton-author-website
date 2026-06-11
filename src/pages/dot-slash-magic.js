import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/dotslash_magic';

const DotSlashMagic = () => {
  return (
    <Layout pageTitle="Dot Slash Magic">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default DotSlashMagic 