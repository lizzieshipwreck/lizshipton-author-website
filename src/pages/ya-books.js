import * as React from 'react'

import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/thalassic_ya';

const YABooks = () => {


  return (
    <Layout pageTitle={"YA Books"}>
        <BlockLayoutPage content={content} flip={true}/>
    </Layout>
  )
}

export default YABooks