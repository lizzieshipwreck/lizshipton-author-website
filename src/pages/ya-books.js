import * as React from 'react'

import Layout from '../components/page-layouts/layout'
import BlockLayoutPage from '../components/page-layouts/block-page';

import { thalassic_ya_alt, thalassic_ya_shop_link, ya_one, ya_two, ya_three, ya_four } from '../copy/thalassic_ya';

const content = [
  {
      heading: "Young Adult (YA) Editions",
      paragraphs: [ya_one, ya_two, ya_three, ya_four],
      image: {src: "ya_complete_mock", link: thalassic_ya_shop_link, alt: thalassic_ya_alt},
      cta: {text: "Buy YA Editions", colorScheme: 'Scourge', link: thalassic_ya_shop_link}
  },
  {
    heading: "Bad Magic",
    paragraphs: [],
    image: {src: "bad magic", link: "https://reamstories.com/page/lekik90zu2", alt: "Bad Magic cover"}
  }
]

const YABooks = () => {

  return (
    <Layout pageTitle={"YA Books"}>
        <BlockLayoutPage content={content} flip={true}/>
    </Layout>
  )
}

export default YABooks