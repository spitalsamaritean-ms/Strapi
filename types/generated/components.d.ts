import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButtons extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'buttons';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['primary', 'secondary']> & Attribute.Required;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'faq';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface CommonHeaderAndText extends Schema.Component {
  collectionName: 'components_common_header_and_texts';
  info: {
    displayName: 'HeaderAndText';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface CommonImageAndText extends Schema.Component {
  collectionName: 'components_common_image_and_texts';
  info: {
    displayName: 'ImageAndText';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface CommonImageBlock3 extends Schema.Component {
  collectionName: 'components_common_image_block3s';
  info: {
    displayName: 'ImageBlock3';
    description: '';
  };
  attributes: {
    image1: Attribute.Media & Attribute.Required;
    image2: Attribute.Media & Attribute.Required;
    image3: Attribute.Media & Attribute.Required;
  };
}

export interface CommonItem extends Schema.Component {
  collectionName: 'components_common_items';
  info: {
    displayName: 'Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface CommonListItem extends Schema.Component {
  collectionName: 'components_common_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CommonQuotes extends Schema.Component {
  collectionName: 'components_common_quotes';
  info: {
    displayName: 'Quotes';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface CommonText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface MenuButton extends Schema.Component {
  collectionName: 'components_menu_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Links: Attribute.Component<'menu.menu-link', true> & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface PackageFeature extends Schema.Component {
  collectionName: 'components_package_features';
  info: {
    displayName: 'feature';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PricePriceList extends Schema.Component {
  collectionName: 'components_price_price_lists';
  info: {
    displayName: 'PriceList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    price: Attribute.Integer & Attribute.Required;
  };
}

export interface ServicesAbout extends Schema.Component {
  collectionName: 'components_services_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    lead: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    imageOne: Attribute.Media & Attribute.Required;
    imageTwo: Attribute.Media & Attribute.Required;
  };
}

export interface ServicesAbout2 extends Schema.Component {
  collectionName: 'components_services_about2s';
  info: {
    displayName: 'About2';
    description: '';
  };
  attributes: {
    lead: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    items: Attribute.Component<'common.list-item', true>;
  };
}

export interface ServicesFaq2 extends Schema.Component {
  collectionName: 'components_services_faq_2s';
  info: {
    displayName: 'FAQ2';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    faq: Attribute.Component<'common.faq', true>;
  };
}

export interface ServicesFaq extends Schema.Component {
  collectionName: 'components_services_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'common.list-item', true>;
    buttons: Attribute.Component<'common.buttons', true>;
    faq: Attribute.Component<'common.faq', true>;
  };
}

export interface ServicesHero extends Schema.Component {
  collectionName: 'components_services_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
    description: '';
  };
  attributes: {
    lead: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    buttons: Attribute.Component<'common.buttons', true>;
  };
}

export interface ServicesList extends Schema.Component {
  collectionName: 'components_services_lists';
  info: {
    displayName: 'List';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'common.item', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.buttons': CommonButtons;
      'common.faq': CommonFaq;
      'common.header-and-text': CommonHeaderAndText;
      'common.image-and-text': CommonImageAndText;
      'common.image-block3': CommonImageBlock3;
      'common.item': CommonItem;
      'common.list-item': CommonListItem;
      'common.quotes': CommonQuotes;
      'common.text': CommonText;
      'menu.button': MenuButton;
      'menu.dropdown': MenuDropdown;
      'menu.menu-link': MenuMenuLink;
      'package.feature': PackageFeature;
      'price.price-list': PricePriceList;
      'services.about': ServicesAbout;
      'services.about2': ServicesAbout2;
      'services.faq-2': ServicesFaq2;
      'services.faq': ServicesFaq;
      'services.hero': ServicesHero;
      'services.list': ServicesList;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
