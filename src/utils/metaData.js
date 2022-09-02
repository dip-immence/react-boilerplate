import favicon from '../assets/images/favicon.ico'

const metaInfo = {
  lang: `en`,
  site_URL: `https://mysite.com`,
  site_name: `mysite`,
  author: `author name`,
  title: `title`,
  description: `description`,
  keyword: `keyword`,
  og_image: favicon,
  //   property
  char_set: `utf-8`,
  http_equiv_content_type: `Content-Type`,
  http_equiv_content_type_content: `text/html; charset=UTF-8`,
  viewport_content_type: `viewport`,
  viewport_content_type_content: `width=device-width; initial-scale=1; maximum-scale=1`,
  http_equiv_X_UA_Compatible: `Content-Type`,
  http_equiv_X_UA_Compatible_content: `IE=edge`,
  author_type: `author`,
  description_type: `description`,
  keyword_type: `keyword`,
  property_locale_type: `og:locale`,
  property_og_type: `og:type`,
  property_og_type_content: `website`,
  property_og_title: `og:title`,
  property_og_site_name: `og:site_name`,
  property_og_description: `og:description`,
  property_og_url: `og:url`,
  property_twitter_card_type: `twitter:card`,
  property_twitter_card_type_content: `summary`,
  property_twitter_card_description_type: `twitter:description`,
  property_twitter_card_title_type: `twitter:title`,
  property_twitter_card_site_type: `twitter:site`,
  property_twitter_card_creator_type: `twitter:creator`,
  property_twitter_card_img_type: `twitter:image`,
  property_og_img_type: `og:image`,
  property_og_img_type_name: `image`,
  // favicon
  icon_name: `favicon`,
  icon_type: `image/ico`,
  icon_path: favicon,
}

const homePageMetaInfo = {
  title: `Home | ${metaInfo.site_name}`,
  description: `Home description`,
  keyword: `Home,keyword`,
}

export { metaInfo, homePageMetaInfo }
