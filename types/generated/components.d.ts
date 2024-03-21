import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButtons extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'buttons';
    icon: 'cursor';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface CommonHeaderAndText extends Schema.Component {
  collectionName: 'components_common_header_and_texts';
  info: {
    displayName: 'HeaderAndText';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface CommonImageAndText extends Schema.Component {
  collectionName: 'components_common_image_and_texts';
  info: {
    displayName: 'ImageAndText';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.RichText;
  };
}

export interface CommonImageBlock3 extends Schema.Component {
  collectionName: 'components_common_image_block3s';
  info: {
    displayName: 'ImageBlock3';
  };
  attributes: {
    image1: Attribute.Media;
    image2: Attribute.Media;
    image3: Attribute.Media;
  };
}

export interface CommonItem extends Schema.Component {
  collectionName: 'components_common_items';
  info: {
    displayName: 'Item';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.Media;
  };
}

export interface CommonListItem extends Schema.Component {
  collectionName: 'components_common_list_items';
  info: {
    displayName: 'ListItem';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface CommonQuotes extends Schema.Component {
  collectionName: 'components_common_quotes';
  info: {
    displayName: 'Quotes';
  };
  attributes: {
    text: Attribute.Text;
    image: Attribute.Media;
    name: Attribute.String;
  };
}

export interface CommonText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface MenuButton extends Schema.Component {
  collectionName: 'components_menu_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    title: Attribute.String;
    Links: Attribute.Component<'menu.menu-link', true>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface PackageFeature extends Schema.Component {
  collectionName: 'components_package_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ServicesAbout extends Schema.Component {
  collectionName: 'components_services_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    imageOne: Attribute.Media;
    imageTwo: Attribute.Media;
  };
}

export interface ServicesAbout2 extends Schema.Component {
  collectionName: 'components_services_about2s';
  info: {
    displayName: 'About2';
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
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
    title: Attribute.String;
    description: Attribute.Text;
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
    title: Attribute.String;
    description: Attribute.Text;
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
  };
  attributes: {
    lead: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
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
    title: Attribute.String;
    description: Attribute.Text;
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
