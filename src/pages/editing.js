import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/editing';

const EditingPage = () => {
  return (
    <Layout pageTitle="Editing Services">
      <BlockLayoutPage content={content} flip={true}/>
    </Layout>
  )
}

export default EditingPage 