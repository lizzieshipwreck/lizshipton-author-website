import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import {content} from '../copy/reaves';

const HaileyReaves = () => {
  return (
    <div style={{'margin-top': '5rem'}}>
      <BlockLayoutPage content={content} flip={false} />
    </div>
  )
}

export default HaileyReaves 