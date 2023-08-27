import * as React from 'react'
import Layout from '../components/layout'
import { about_one, about_two, about_three, about_four } from "../copy/about";
import BlockLayoutPage from '../components/page-layouts/block-layout-page';


const content = [
  {
      heading: "Part-time author 🪶⚓ Full-time pirate",
      paragraphs: [about_one, about_two, about_three, about_four],
      image: {src: "lizzie_hammock_smile_round", link: "", alt: "Liz working from a hammock"},
  },
  {
    heading: "My floating home",
    paragraphs: ["asdfasdfasdfasdfasdfasdf"],
    image: {src: "loki", link: "https://instagram.com/sv_loki", alt: "Liz's boat Loki"}
  },
  {
    heading: "Meet the crew",
    paragraphs: ["asdfasdfasdfasdfasdf"],
    image: {src: "trev and aloy cool"} 
  }
]

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <BlockLayoutPage content={content} flip={false}/>
    </Layout>
  )
}

export default AboutPage 