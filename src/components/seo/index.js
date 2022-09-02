import * as React from 'react'
import { Helmet } from 'react-helmet'
import { metaInfo } from '../../utils/metaData'

function Seo({ description, lang, title, url, author, keyword, ogImage }) {
  const metaLang = lang ? lang : metaInfo.lang
  const metaURL = url ? url : metaInfo.site_URL
  const metaAuthor = author ? author : metaInfo.author
  const metaTitle = title ? title : `${metaInfo.title} | ${metaInfo.site_name}`
  const metaDescription = description ? description : `${metaInfo.description}`
  const metaKeyword = keyword ? keyword : `${metaInfo.keyword}`
  const metaOGImage = ogImage ? ogImage : metaInfo.og_image

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
    >
      <meta charSet={metaInfo.char_set} />
      <meta
        httpEquiv={metaInfo.http_equiv_content_type}
        content={metaInfo.http_equiv_content_type_content}
      />
      <meta
        name={metaInfo.viewport_content_type}
        content={metaInfo.viewport_content_type_content}
      />
      <meta
        httpEquiv={metaInfo.http_equiv_X_UA_Compatible}
        content={metaInfo.http_equiv_X_UA_Compatible_content}
      />
      <meta name={metaInfo.author_type} content={metaAuthor} />
      <meta name={metaInfo.description_type} content={metaDescription} />
      <meta name={metaInfo.keyword_type} content={metaKeyword} />
      <meta property={metaInfo.property_locale_type} content={metaLang} />
      <meta
        property={metaInfo.property_og_type}
        content={metaInfo.property_og_type_content}
      />
      <meta property={metaInfo.property_og_title} content={metaTitle} />
      <meta property={metaInfo.property_og_site_name} content={metaTitle} />
      <meta
        property={metaInfo.property_og_description}
        content={metaDescription}
      />
      <meta property={metaInfo.property_og_url} content={metaURL} />
      <meta
        name={metaInfo.property_twitter_card_type}
        content={metaInfo.property_twitter_card_type_content}
      />
      <meta
        name={metaInfo.property_twitter_card_description_type}
        content={metaDescription}
      />
      <meta
        name={metaInfo.property_twitter_card_title_type}
        content={metaTitle}
      />
      <meta
        name={metaInfo.property_twitter_card_site_type}
        content={`@${metaAuthor}`}
      />
      <meta
        name={metaInfo.property_twitter_card_creator_type}
        content={`@${metaAuthor}`}
      />
      <meta
        name={metaInfo.property_twitter_card_img_type}
        content={metaOGImage}
      />
      <meta
        property={metaInfo.property_og_img_type}
        name={metaInfo.property_og_img_type_name}
        content={metaOGImage}
      />
      <link
        rel={metaInfo.icon_name}
        href={metaInfo.icon_path}
        type={metaInfo.icon_type}
      />
    </Helmet>
  )
}

export default Seo
