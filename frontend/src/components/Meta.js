import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Tamina Korean Store',
  description: 'We sell the best Korean products here in the Philippines',
  keywords: 'KPOP,Korean Products,Specialty Grocery Store',
}

export default Meta
