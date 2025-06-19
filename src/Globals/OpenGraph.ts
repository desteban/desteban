export interface OpenGraph {
  property: OpenGraphProperties;
  content: string;
}

export enum OpenGraphProperties {
  TITLE = "og:title",
  DESCRIPTION = "og:description",
  IMAGE = "og:image",
  URL = "og:url",
  TYPE = "og:type",
  SITE_NAME = "og:site_name",
  LOCALE = "og:locale",
  AUDIO = "og:audio",
  VIDEO = "og:video",
  DETERMINER = "og:determiner",
}
