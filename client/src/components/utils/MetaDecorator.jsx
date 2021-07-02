import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import config from '../../config'

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Helmet>
      {/* Search Engine */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      {/* Facebook */}
      {imageUrl !== undefined && (
        <>
          <meta property="og:description" content={description} />
          <meta property="og:image" content={config.HOST + imageUrl} />
          <meta
            property="og:url"
            content={
              config.HOST + window.location.pathname + window.location.search
            }
          />
        </>
      )}

      {/* Twitter */}
      {imageAlt !== undefined && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content={imageAlt} />
          <meta name="twitter:site" content="@yichenzhu1337" />
        </>
      )}
    </Helmet>
  )
}

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
}

export default MetaDecorator
