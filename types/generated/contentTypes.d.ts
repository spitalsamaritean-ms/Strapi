import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEmailDesignerEmailTemplate
  extends Schema.CollectionType {
  collectionName: 'email_templates';
  info: {
    singularName: 'email-template';
    pluralName: 'email-templates';
    displayName: 'Email-template';
    name: 'email-template';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
    increments: true;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    templateReferenceId: Attribute.Integer & Attribute.Unique;
    design: Attribute.JSON;
    name: Attribute.String;
    subject: Attribute.String;
    bodyHtml: Attribute.Text;
    bodyText: Attribute.Text;
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    tags: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccomodationAccomodation extends Schema.SingleType {
  collectionName: 'accomodations';
  info: {
    singularName: 'accomodation';
    pluralName: 'accomodations';
    displayName: 'Accomodation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    facilities: Attribute.Component<'common.facility', true>;
    mainImages: Attribute.Media & Attribute.Required;
    otherImages: Attribute.Media;
    subtitle2: Attribute.String;
    title2: Attribute.String;
    description2: Attribute.RichText;
    facilities2: Attribute.Component<'common.facility', true>;
    mainImages2: Attribute.Media;
    facilities_title: Attribute.String;
    facilities_title2: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::accomodation.accomodation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::accomodation.accomodation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAppointmentAppointment extends Schema.CollectionType {
  collectionName: 'appointments';
  info: {
    singularName: 'appointment';
    pluralName: 'appointments';
    displayName: 'Appointment';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    age: Attribute.Integer;
    email: Attribute.Email;
    phone_number: Attribute.String;
    service: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'api::service.service'
    >;
    address: Attribute.Text;
    appointment_date: Attribute.Date;
    checked: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlackFridayNewsletterBlackFridayNewsletter
  extends Schema.CollectionType {
  collectionName: 'black_friday_newsletters';
  info: {
    singularName: 'black-friday-newsletter';
    pluralName: 'black-friday-newsletters';
    displayName: 'BlackFridayNewsletter';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email & Attribute.Unique;
    Name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::black-friday-newsletter.black-friday-newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::black-friday-newsletter.black-friday-newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    content: Attribute.DynamicZone<
      [
        'common.header-and-text',
        'common.image-and-text',
        'common.image-block3',
        'common.text',
        'common.quotes'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    image: Attribute.Media & Attribute.Required;
    topPosition: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    priority: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
    message: Attribute.Text;
    lastname: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPackageContactPackage extends Schema.CollectionType {
  collectionName: 'contact_packages';
  info: {
    singularName: 'contact-package';
    pluralName: 'contact-packages';
    displayName: 'Contact Package';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    firstName: Attribute.String;
    lastname: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
    message: Attribute.Text;
    package: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-package.contact-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-package.contact-package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomPageCustomPage extends Schema.CollectionType {
  collectionName: 'custom_pages';
  info: {
    singularName: 'custom-page';
    pluralName: 'custom-pages';
    displayName: 'CustomPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.DynamicZone<
      [
        'common.header-and-text',
        'common.image-and-text',
        'common.image-block3',
        'common.text',
        'common.quotes'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    slug: Attribute.UID<'api::custom-page.custom-page', 'title'> &
      Attribute.Required;
    file: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::custom-page.custom-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::custom-page.custom-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDropdownMenuLinkDropdownMenuLink
  extends Schema.CollectionType {
  collectionName: 'dropdown_menu_links';
  info: {
    singularName: 'dropdown-menu-link';
    pluralName: 'dropdown-menu-links';
    displayName: 'DropdownMenuLink';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    menu_links: Attribute.Relation<
      'api::dropdown-menu-link.dropdown-menu-link',
      'oneToMany',
      'api::menu-link.menu-link'
    >;
    priority: Attribute.Integer & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dropdown-menu-link.dropdown-menu-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dropdown-menu-link.dropdown-menu-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeebackFeeback extends Schema.CollectionType {
  collectionName: 'feebacks';
  info: {
    singularName: 'feeback';
    pluralName: 'feebacks';
    displayName: 'Feedback';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feeback.feeback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feeback.feeback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGalleryCategoryGalleryCategory
  extends Schema.CollectionType {
  collectionName: 'gallery_categories';
  info: {
    singularName: 'gallery-category';
    pluralName: 'gallery-categories';
    displayName: 'GalleryCategory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    displayImage1: Attribute.Media;
    displayImage2: Attribute.Media;
    displayImage3: Attribute.Media;
    displayImage4: Attribute.Media;
    moreImages: Attribute.Media;
    priority: Attribute.Integer & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gallery-category.gallery-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gallery-category.gallery-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGalleryVideoGalleryVideo extends Schema.CollectionType {
  collectionName: 'gallery_videos';
  info: {
    singularName: 'gallery-video';
    pluralName: 'gallery-videos';
    displayName: 'GalleryVideo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gallery-video.gallery-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gallery-video.gallery-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInfoPatientInfoPatient extends Schema.CollectionType {
  collectionName: 'info_patients';
  info: {
    singularName: 'info-patient';
    pluralName: 'info-patients';
    displayName: 'Info Patient';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::info-patient.info-patient', 'title'> &
      Attribute.Required;
    description: Attribute.String & Attribute.Required;
    content: Attribute.DynamicZone<
      [
        'common.header-and-text',
        'common.image-and-text',
        'common.image-block3',
        'common.text',
        'common.quotes'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    image: Attribute.Media & Attribute.Required;
    topPosition: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    priority: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::info-patient.info-patient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::info-patient.info-patient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInformationInformation extends Schema.CollectionType {
  collectionName: 'informations';
  info: {
    singularName: 'information';
    pluralName: 'informations';
    displayName: 'Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::information.information', 'title'> &
      Attribute.Required;
    content: Attribute.DynamicZone<
      [
        'common.header-and-text',
        'common.image-and-text',
        'common.image-block3',
        'common.text'
      ]
    >;
    priority: Attribute.Integer;
    seo: Attribute.Component<'shared.seo'>;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::information.information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::information.information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediaAppearanceMediaAppearance
  extends Schema.CollectionType {
  collectionName: 'media_appearances';
  info: {
    singularName: 'media-appearance';
    pluralName: 'media-appearances';
    displayName: 'MediaAppearance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.String;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::media-appearance.media-appearance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::media-appearance.media-appearance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediaLogoMediaLogo extends Schema.SingleType {
  collectionName: 'media_logos';
  info: {
    singularName: 'media-logo';
    pluralName: 'media-logos';
    displayName: 'MediaLogo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logos: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::media-logo.media-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::media-logo.media-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMenuMenu extends Schema.SingleType {
  collectionName: 'menus';
  info: {
    singularName: 'menu';
    pluralName: 'menus';
    displayName: 'Menu';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    menu: Attribute.DynamicZone<
      ['menu.button', 'menu.dropdown', 'menu.menu-link', 'menu.nested-dropdown']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiMenuLinkMenuLink extends Schema.CollectionType {
  collectionName: 'menu_links';
  info: {
    singularName: 'menu-link';
    pluralName: 'menu-links';
    displayName: 'MenuLink';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    priority: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::menu-link.menu-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::menu-link.menu-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsletterNewsletter extends Schema.CollectionType {
  collectionName: 'newsletters';
  info: {
    singularName: 'newsletter';
    pluralName: 'newsletters';
    displayName: 'Newsletter';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    email: Attribute.Email & Attribute.Unique;
    Name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNutritionNutrition extends Schema.CollectionType {
  collectionName: 'nutritions';
  info: {
    singularName: 'nutrition';
    pluralName: 'nutritions';
    displayName: 'Nutrition';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Nume: Attribute.String;
    Oras: Attribute.String;
    Judet: Attribute.String;
    Adresa: Attribute.String;
    Telefon: Attribute.String;
    Email: Attribute.String;
    Varsta: Attribute.Integer;
    Sexul: Attribute.Enumeration<['Alege', 'B\u0103rbat', 'Femeie']>;
    Mediul_de_provenienta: Attribute.Enumeration<['Alege', 'Urban', 'Rural']>;
    Studii_medii: Attribute.Enumeration<
      ['Alege', 'Gimnaziu', 'Liceu', 'Postliceal', '\u0218coala Tehnic\u0103']
    >;
    Studii_superioare: Attribute.Enumeration<
      ['Alege', 'Facultatea', 'Masterat', 'Doctorat']
    >;
    Status_social: Attribute.Enumeration<
      [
        'Alege',
        'Angajat (stat)',
        'Angajat (privat)',
        'Permanent',
        'Ocazional',
        '\u0218omer',
        'Elev',
        'Student',
        'Masterand'
      ]
    >;
    Status_marital: Attribute.Enumeration<
      [
        'Alege',
        'C\u0103s\u0103torit/\u0103',
        'Nec\u0103s\u0103torit/\u0103',
        'Divor\u021Bat/\u0103',
        'V\u0103duv/\u0103',
        'Consensual'
      ]
    >;
    Profesia: Attribute.String;
    Locul_de_munca: Attribute.String;
    Inaltimea: Attribute.Integer;
    Greutatea: Attribute.Integer;
    Religie: Attribute.String;
    Status_odihna_zi: Attribute.Integer;
    Status_odihna_noapte: Attribute.Integer;
    Apartenenta_alim: Attribute.Enumeration<
      [
        'Alege',
        'Vegetarian',
        'Lacto-vegetarian',
        'Lacto-ovo-vegetarian',
        'Vegan'
      ]
    >;
    Alergii_alimentare: Attribute.String;
    Intolerante_alimentare: Attribute.String;
    Interventii_chirurgicale: Attribute.String;
    Status_menstrual: Attribute.Enumeration<
      ['Alege', 'Premenstrual', 'Activ', 'Postmenstrual']
    >;
    Status_nasteri: Attribute.String;
    Diagnostic_boli_cronice: Attribute.String;
    Diagnostic_boli_acute: Attribute.String;
    Plangeri_dureri: Attribute.String;
    Status_scaunelor: Attribute.String;
    Varice: Attribute.Enumeration<['Alege', 'Nu', 'Da']>;
    Tensiunea_arteriala: Attribute.String;
    Glicemie: Attribute.String;
    Medicatie: Attribute.String;
    Suplimente: Attribute.String;
    Hobby_: Attribute.String;
    Istoricul_greutatii_minime: Attribute.String;
    Istoricul_greutatii_maxime: Attribute.String;
    Nivel_fitness: Attribute.String;
    Istoricul_stresului: Attribute.String;
    Istoricul_dietelor: Attribute.String;
    Perceptia_greutatii_normale: Attribute.String;
    Perceptia_greutatii_supraponderale: Attribute.String;
    Perceptia_greutatii_subponderale: Attribute.String;
    Experienta_dietelor: Attribute.String;
    Cheltuieli_alimentare: Attribute.String;
    Cine_pregateste_mancarea: Attribute.String;
    Regim_alimentar: Attribute.String;
    Masa_cu_familia: Attribute.Enumeration<['Alege', 'Da', 'Nu']>;
    Micul_dejun: Attribute.Enumeration<['Alege', 'Zilnic', 'Ocazional', 'Rar']>;
    Pranz: Attribute.Enumeration<['Alege', 'Zilnic', 'Ocazional', 'Rar']>;
    Cina: Attribute.Enumeration<['Alege', 'Zilnic', 'Ocazional', 'Rar']>;
    Consumul_de_dulciuri: Attribute.Enumeration<
      ['Alege', 'Zilnic', 'Ocazional', 'Rar']
    >;
    Consumul_de_bauturi_racoritoare: Attribute.Enumeration<
      ['Alege', 'Zilnic', 'Ocazional', 'Rar']
    >;
    Consumul_de_alcool: Attribute.Enumeration<
      ['Alege', 'Zilnic', 'Ocazional', 'Rar']
    >;
    Consumul_de_apa: Attribute.String;
    Fumatul: Attribute.Enumeration<['Alege', 'Zilnic', 'Ocazional', 'Rar']>;
    Consumul_de_fructe: Attribute.Enumeration<
      ['Alege', 'Zilnic', 'Ocazional', 'Rar']
    >;
    Alimente_preferate: Attribute.String;
    Alimente_de_care_nu_va_puteti_desparti: Attribute.String;
    Ultimele_investigatii_medicale: Attribute.String;
    Recomandari_nutritionale: Attribute.String;
    Program_nutritie_personalizat: Attribute.String;
    Motivele_vizitei_nutritionist: Attribute.String;
    Obiectivele_propuse: Attribute.String;
    Simptome: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Alege',
          'lipsa de concentrare',
          'le\u0219in',
          'iritabilitate',
          'co\u0219maruri',
          'insomnie',
          'dureri de cap',
          'migrene',
          'pofte',
          'uitare',
          'abatere',
          'epuizare',
          'transpira\u021Bie rece',
          'oboseal\u0103',
          'ame\u021Beli',
          'transpira\u021Bie',
          'lips\u0103 de coordonare',
          'anxietate',
          'dezechilibru',
          'confuzie',
          'alergii',
          'palpita\u021Bii',
          'atacuri de panic\u0103',
          'altele'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nutrition.nutrition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nutrition.nutrition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'Order';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    product_list: Attribute.Component<'shop.product-list', true>;
    full_order_price: Attribute.Decimal;
    order_status: Attribute.Enumeration<
      [
        '\u00CEn desf\u0103\u0219urare',
        'Livrat',
        'Anulat',
        'Completat',
        'Discontinuat',
        'Eroare',
        'Programat'
      ]
    >;
    transaction_id: Attribute.String;
    type: Attribute.String;
    message: Attribute.Text;
    billing: Attribute.Component<'shop.billing-date'>;
    delivery: Attribute.Component<'shop.delivery-date'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackagePackage extends Schema.CollectionType {
  collectionName: 'packages';
  info: {
    singularName: 'package';
    pluralName: 'packages';
    displayName: 'Package';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    priority: Attribute.Integer;
    features: Attribute.Component<'package.feature', true>;
    button: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['normal', 'active']> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerPartner extends Schema.SingleType {
  collectionName: 'partners';
  info: {
    singularName: 'partner';
    pluralName: 'partners';
    displayName: 'Partner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricePrice extends Schema.CollectionType {
  collectionName: 'prices';
  info: {
    singularName: 'price';
    pluralName: 'prices';
    displayName: 'Price';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    categoryName: Attribute.String & Attribute.Required;
    priceList: Attribute.Component<'price.price-list', true>;
    colRightName: Attribute.String & Attribute.Required;
    colLeftName: Attribute.String & Attribute.Required;
    priority: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    short_desc: Attribute.Text;
    desc: Attribute.RichText;
    new_price: Attribute.Decimal & Attribute.Required;
    old_price: Attribute.Decimal;
    num_of_items: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    product_imgs: Attribute.Media;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    prod_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-category.product-category'
    >;
    cover_image: Attribute.Media & Attribute.Required;
    slug: Attribute.UID<'api::product.product', 'title'> & Attribute.Required;
    highlighted_product: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    sku: Attribute.String;
    TVA: Attribute.Enumeration<['TVA: 5%', 'TVA: 9%', 'TVA: 19%']> &
      Attribute.Required &
      Attribute.DefaultTo<'TVA: 5%'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductCategoryProductCategory
  extends Schema.CollectionType {
  collectionName: 'product_categories';
  info: {
    singularName: 'product-category';
    pluralName: 'product-categories';
    displayName: 'ProductCategory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    products: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product.product'
    >;
    slug: Attribute.UID<'api::product-category.product-category', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::service.service', 'title'> & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 350;
      }>;
    icon: Attribute.Media & Attribute.Required;
    serviceDetails: Attribute.DynamicZone<
      [
        'services.about',
        'services.about2',
        'services.faq-2',
        'services.faq',
        'services.hero',
        'services.list',
        'common.text',
        'common.image-block3',
        'common.image-and-text',
        'common.header-and-text',
        'common.quotes',
        'services.call-to-action'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    otherPage: Attribute.Boolean & Attribute.DefaultTo<false>;
    priority: Attribute.Integer;
    showInFooter: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShopValueShopValue extends Schema.CollectionType {
  collectionName: 'shop_values';
  info: {
    singularName: 'shop-value';
    pluralName: 'shop-values';
    displayName: 'ShopValue';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    short_desc: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shop-value.shop-value',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shop-value.shop-value',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecialitySpeciality extends Schema.CollectionType {
  collectionName: 'specialities';
  info: {
    singularName: 'speciality';
    pluralName: 'specialities';
    displayName: 'Speciality';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    priority: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::speciality.speciality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::speciality.speciality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamTeam extends Schema.CollectionType {
  collectionName: 'teams';
  info: {
    singularName: 'team';
    pluralName: 'teams';
    displayName: 'Team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    priority: Attribute.Integer;
    description: Attribute.RichText;
    slug: Attribute.UID<'api::team.team', 'name'> & Attribute.Required;
    team_member_categories: Attribute.Relation<
      'api::team.team',
      'manyToMany',
      'api::team-member-category.team-member-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::team.team', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTeamMemberCategoryTeamMemberCategory
  extends Schema.CollectionType {
  collectionName: 'team_member_categories';
  info: {
    singularName: 'team-member-category';
    pluralName: 'team-member-categories';
    displayName: 'TeamMemberCategory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    priority: Attribute.Integer;
    teams: Attribute.Relation<
      'api::team-member-category.team-member-category',
      'manyToMany',
      'api::team.team'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-member-category.team-member-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-member-category.team-member-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate;
      'api::accomodation.accomodation': ApiAccomodationAccomodation;
      'api::appointment.appointment': ApiAppointmentAppointment;
      'api::black-friday-newsletter.black-friday-newsletter': ApiBlackFridayNewsletterBlackFridayNewsletter;
      'api::blog.blog': ApiBlogBlog;
      'api::contact.contact': ApiContactContact;
      'api::contact-package.contact-package': ApiContactPackageContactPackage;
      'api::custom-page.custom-page': ApiCustomPageCustomPage;
      'api::dropdown-menu-link.dropdown-menu-link': ApiDropdownMenuLinkDropdownMenuLink;
      'api::feeback.feeback': ApiFeebackFeeback;
      'api::gallery-category.gallery-category': ApiGalleryCategoryGalleryCategory;
      'api::gallery-video.gallery-video': ApiGalleryVideoGalleryVideo;
      'api::info-patient.info-patient': ApiInfoPatientInfoPatient;
      'api::information.information': ApiInformationInformation;
      'api::media-appearance.media-appearance': ApiMediaAppearanceMediaAppearance;
      'api::media-logo.media-logo': ApiMediaLogoMediaLogo;
      'api::menu.menu': ApiMenuMenu;
      'api::menu-link.menu-link': ApiMenuLinkMenuLink;
      'api::newsletter.newsletter': ApiNewsletterNewsletter;
      'api::nutrition.nutrition': ApiNutritionNutrition;
      'api::order.order': ApiOrderOrder;
      'api::package.package': ApiPackagePackage;
      'api::partner.partner': ApiPartnerPartner;
      'api::price.price': ApiPricePrice;
      'api::product.product': ApiProductProduct;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::service.service': ApiServiceService;
      'api::shop-value.shop-value': ApiShopValueShopValue;
      'api::speciality.speciality': ApiSpecialitySpeciality;
      'api::team.team': ApiTeamTeam;
      'api::team-member-category.team-member-category': ApiTeamMemberCategoryTeamMemberCategory;
    }
  }
}
