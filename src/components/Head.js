import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Head = ({ title, description, lang, meta }) => (
  <>
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@samaritanappeu",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "robots",
          content: "index,follow",
        },
        {
          name: "googlebot",
          content: "index,follow",
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500,600,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
)

Head.defaultProps = {
  title: "Samaritan - Help a refugee/Ukrainian",
  lang: `en`,
  meta: [],
  description: `Let humanitarian organizations know that you have some space available. How? By using the Samaritan app to connect with them!`,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Head
