import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsArticleCard extends Schema.Component {
  collectionName: 'components_cards_article_cards';
  info: {
    displayName: 'ArticleCard';
    description: '';
  };
  attributes: {
    ArticleImage: Attribute.Media;
    ArticleAuthor: Attribute.String;
    ArticleTitle: Attribute.String;
    blog_post: Attribute.Relation<
      'cards.article-card',
      'oneToOne',
      'api::blog-post.blog-post'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.article-card': CardsArticleCard;
    }
  }
}
