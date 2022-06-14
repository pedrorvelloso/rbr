export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any
  Hex: any
  /** Raw JSON value */
  Json: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  RGBAHue: any
  RGBATransparency: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride: InputMaybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height: InputMaybe<Scalars['Float']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<AssetCreateLocalizationsInput>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height: InputMaybe<Scalars['Float']>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document: InputMaybe<DocumentTransformationInput>
  image: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  fileName: InputMaybe<Scalars['String']>
  handle: InputMaybe<Scalars['String']>
  height: InputMaybe<Scalars['Float']>
  /** Manage document localizations */
  localizations: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>
  handle: InputMaybe<Scalars['String']>
  height: InputMaybe<Scalars['Float']>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName: InputMaybe<Scalars['String']>
  height: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>
  height: InputMaybe<Scalars['Float']>
  mimeType: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Float']>
  width: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  fileName: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  fileName_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  fileName_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with: InputMaybe<Scalars['String']>
  handle: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  handle_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  handle_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with: InputMaybe<Scalars['String']>
  height: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in: InputMaybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in: InputMaybe<Array<Scalars['Float']>>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  mimeType: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  mimeType_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with: InputMaybe<Scalars['String']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  size: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in: InputMaybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in: InputMaybe<Array<Scalars['Float']>>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
  width: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in: InputMaybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in: InputMaybe<Array<Scalars['Float']>>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: InputMaybe<Scalars['Hex']>
  rgba: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start: InputMaybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: Maybe<Asset>
  /** Create one scheduledRelease */
  createScheduledRelease: Maybe<ScheduledRelease>
  /** Create one subWiki */
  createSubWiki: Maybe<SubWiki>
  /** Create one wiki */
  createWiki: Maybe<Wiki>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<Asset>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many SubWiki documents
   * @deprecated Please use the new paginated many mutation (deleteManySubWikisConnection)
   */
  deleteManySubWikis: BatchPayload
  /** Delete many SubWiki documents, return deleted documents */
  deleteManySubWikisConnection: SubWikiConnection
  /**
   * Delete many Wiki documents
   * @deprecated Please use the new paginated many mutation (deleteManyWikisConnection)
   */
  deleteManyWikis: BatchPayload
  /** Delete many Wiki documents, return deleted documents */
  deleteManyWikisConnection: WikiConnection
  /** Delete and return scheduled operation */
  deleteScheduledOperation: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease: Maybe<ScheduledRelease>
  /** Delete one subWiki from _all_ existing stages. Returns deleted document. */
  deleteSubWiki: Maybe<SubWiki>
  /** Delete one wiki from _all_ existing stages. Returns deleted document. */
  deleteWiki: Maybe<Wiki>
  /** Publish one asset */
  publishAsset: Maybe<Asset>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many SubWiki documents
   * @deprecated Please use the new paginated many mutation (publishManySubWikisConnection)
   */
  publishManySubWikis: BatchPayload
  /** Publish many SubWiki documents */
  publishManySubWikisConnection: SubWikiConnection
  /**
   * Publish many Wiki documents
   * @deprecated Please use the new paginated many mutation (publishManyWikisConnection)
   */
  publishManyWikis: BatchPayload
  /** Publish many Wiki documents */
  publishManyWikisConnection: WikiConnection
  /** Publish one subWiki */
  publishSubWiki: Maybe<SubWiki>
  /** Publish one wiki */
  publishWiki: Maybe<Wiki>
  /** Schedule to publish one asset */
  schedulePublishAsset: Maybe<Asset>
  /** Schedule to publish one subWiki */
  schedulePublishSubWiki: Maybe<SubWiki>
  /** Schedule to publish one wiki */
  schedulePublishWiki: Maybe<Wiki>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset: Maybe<Asset>
  /** Unpublish one subWiki from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubWiki: Maybe<SubWiki>
  /** Unpublish one wiki from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWiki: Maybe<Wiki>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<Asset>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many SubWiki documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubWikisConnection)
   */
  unpublishManySubWikis: BatchPayload
  /** Find many SubWiki documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubWikisConnection: SubWikiConnection
  /**
   * Unpublish many Wiki documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWikisConnection)
   */
  unpublishManyWikis: BatchPayload
  /** Find many Wiki documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWikisConnection: WikiConnection
  /** Unpublish one subWiki from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubWiki: Maybe<SubWiki>
  /** Unpublish one wiki from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWiki: Maybe<Wiki>
  /** Update one asset */
  updateAsset: Maybe<Asset>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many subWikis
   * @deprecated Please use the new paginated many mutation (updateManySubWikisConnection)
   */
  updateManySubWikis: BatchPayload
  /** Update many SubWiki documents */
  updateManySubWikisConnection: SubWikiConnection
  /**
   * Update many wikis
   * @deprecated Please use the new paginated many mutation (updateManyWikisConnection)
   */
  updateManyWikis: BatchPayload
  /** Update many Wiki documents */
  updateManyWikisConnection: WikiConnection
  /** Update one scheduledRelease */
  updateScheduledRelease: Maybe<ScheduledRelease>
  /** Update one subWiki */
  updateSubWiki: Maybe<SubWiki>
  /** Update one wiki */
  updateWiki: Maybe<Wiki>
  /** Upsert one asset */
  upsertAsset: Maybe<Asset>
  /** Upsert one subWiki */
  upsertSubWiki: Maybe<SubWiki>
  /** Upsert one wiki */
  upsertWiki: Maybe<Wiki>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateSubWikiArgs = {
  data: SubWikiCreateInput
}

export type MutationCreateWikiArgs = {
  data: WikiCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManySubWikisArgs = {
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationDeleteManySubWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationDeleteManyWikisArgs = {
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationDeleteManyWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSubWikiArgs = {
  where: SubWikiWhereUniqueInput
}

export type MutationDeleteWikiArgs = {
  where: WikiWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsArgs = {
  locales: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManySubWikisArgs = {
  to?: Array<Stage>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationPublishManySubWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationPublishManyWikisArgs = {
  to?: Array<Stage>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationPublishManyWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationPublishSubWikiArgs = {
  to?: Array<Stage>
  where: SubWikiWhereUniqueInput
}

export type MutationPublishWikiArgs = {
  to?: Array<Stage>
  where: WikiWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishSubWikiArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: SubWikiWhereUniqueInput
}

export type MutationSchedulePublishWikiArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: WikiWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales: InputMaybe<Array<Locale>>
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishSubWikiArgs = {
  from?: Array<Stage>
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  where: SubWikiWhereUniqueInput
}

export type MutationScheduleUnpublishWikiArgs = {
  from?: Array<Stage>
  releaseAt: InputMaybe<Scalars['DateTime']>
  releaseId: InputMaybe<Scalars['String']>
  where: WikiWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  skip: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManySubWikisArgs = {
  from?: Array<Stage>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationUnpublishManySubWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationUnpublishManyWikisArgs = {
  from?: Array<Stage>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationUnpublishManyWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  first: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationUnpublishSubWikiArgs = {
  from?: Array<Stage>
  where: SubWikiWhereUniqueInput
}

export type MutationUnpublishWikiArgs = {
  from?: Array<Stage>
  where: WikiWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManySubWikisArgs = {
  data: SubWikiUpdateManyInput
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationUpdateManySubWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  data: SubWikiUpdateManyInput
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<SubWikiManyWhereInput>
}

export type MutationUpdateManyWikisArgs = {
  data: WikiUpdateManyInput
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationUpdateManyWikisConnectionArgs = {
  after: InputMaybe<Scalars['ID']>
  before: InputMaybe<Scalars['ID']>
  data: WikiUpdateManyInput
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<WikiManyWhereInput>
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSubWikiArgs = {
  data: SubWikiUpdateInput
  where: SubWikiWhereUniqueInput
}

export type MutationUpdateWikiArgs = {
  data: WikiUpdateInput
  where: WikiWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertSubWikiArgs = {
  upsert: SubWikiUpsertInput
  where: SubWikiWhereUniqueInput
}

export type MutationUpsertWikiArgs = {
  upsert: WikiUpsertInput
  where: WikiWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset: Maybe<Asset>
  /** Retrieve document version */
  assetVersion: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Fetches an object given its ID */
  node: Maybe<
    Asset | ScheduledOperation | ScheduledRelease | SubWiki | User | Wiki
  >
  /** Retrieve a single scheduledOperation */
  scheduledOperation: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single subWiki */
  subWiki: Maybe<SubWiki>
  /** Retrieve document version */
  subWikiVersion: Maybe<DocumentVersion>
  /** Retrieve multiple subWikis */
  subWikis: Array<SubWiki>
  /** Retrieve multiple subWikis using the Relay connection interface */
  subWikisConnection: SubWikiConnection
  /** Retrieve a single user */
  user: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single wiki */
  wiki: Maybe<Wiki>
  /** Retrieve document version */
  wikiVersion: Maybe<DocumentVersion>
  /** Retrieve multiple wikis */
  wikis: Array<Wiki>
  /** Retrieve multiple wikis using the Relay connection interface */
  wikisConnection: WikiConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<AssetOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<AssetOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<AssetWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<ScheduledOperationOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<ScheduledOperationOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySubWikiArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: SubWikiWhereUniqueInput
}

export type QuerySubWikiVersionArgs = {
  where: VersionWhereInput
}

export type QuerySubWikisArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<SubWikiOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<SubWikiWhereInput>
}

export type QuerySubWikisConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<SubWikiOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<SubWikiWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<UserOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<UserOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<UserWhereInput>
}

export type QueryWikiArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: WikiWhereUniqueInput
}

export type QueryWikiVersionArgs = {
  where: VersionWhereInput
}

export type QueryWikisArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<WikiOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<WikiWhereInput>
}

export type QueryWikisConnectionArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy: InputMaybe<WikiOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  stage?: Stage
  where: InputMaybe<WikiWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy: Maybe<User>
  /** Operation description */
  description: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  skip: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument = Asset | SubWiki | Wiki

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  description: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  release: InputMaybe<ScheduledReleaseWhereInput>
  status: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<ScheduledOperationStatus>>
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<ScheduledOperationStatus>>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  description: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  release: InputMaybe<ScheduledReleaseWhereInput>
  status: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<ScheduledOperationStatus>>
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<ScheduledOperationStatus>>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy: Maybe<User>
  /** Release description */
  description: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy: Maybe<User>
  /** Release date and time */
  releaseAt: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  orderBy: InputMaybe<ScheduledOperationOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>
  description: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  isActive: InputMaybe<Scalars['Boolean']>
  releaseAt: InputMaybe<Scalars['DateTime']>
  title: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  description: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  isActive: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>
  isImplicit: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>
  operations_every: InputMaybe<ScheduledOperationWhereInput>
  operations_none: InputMaybe<ScheduledOperationWhereInput>
  operations_some: InputMaybe<ScheduledOperationWhereInput>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  releaseAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  status: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<ScheduledReleaseStatus>>
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<ScheduledReleaseStatus>>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  isActive: InputMaybe<Scalars['Boolean']>
  releaseAt: InputMaybe<Scalars['DateTime']>
  title: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  isActive: InputMaybe<Scalars['Boolean']>
  releaseAt: InputMaybe<Scalars['DateTime']>
  title: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  description: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  description_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>
  errorMessage: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  errorMessage_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  isActive: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>
  isImplicit: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>
  operations_every: InputMaybe<ScheduledOperationWhereInput>
  operations_none: InputMaybe<ScheduledOperationWhereInput>
  operations_some: InputMaybe<ScheduledOperationWhereInput>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  releaseAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  status: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<ScheduledReleaseStatus>>
  /** All values that are not equal to given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<ScheduledReleaseStatus>>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

/** Sub Wiki page */
export type SubWiki = Node & {
  __typename?: 'SubWiki'
  content: Scalars['String']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<SubWiki>
  /** List of SubWiki versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy: Maybe<User>
  wiki: Maybe<Wiki>
}

/** Sub Wiki page */
export type SubWikiCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Sub Wiki page */
export type SubWikiDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Sub Wiki page */
export type SubWikiHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride: InputMaybe<Stage>
}

/** Sub Wiki page */
export type SubWikiPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Sub Wiki page */
export type SubWikiScheduledInArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<ScheduledOperationWhereInput>
}

/** Sub Wiki page */
export type SubWikiUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Sub Wiki page */
export type SubWikiWikiArgs = {
  locales: InputMaybe<Array<Locale>>
}

export type SubWikiConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SubWikiWhereUniqueInput
}

/** A connection to a list of items. */
export type SubWikiConnection = {
  __typename?: 'SubWikiConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SubWikiEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SubWikiCreateInput = {
  content: Scalars['String']
  createdAt: InputMaybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt: InputMaybe<Scalars['DateTime']>
  wiki: InputMaybe<WikiCreateOneInlineInput>
}

export type SubWikiCreateManyInlineInput = {
  /** Connect multiple existing SubWiki documents */
  connect: InputMaybe<Array<SubWikiWhereUniqueInput>>
  /** Create and connect multiple existing SubWiki documents */
  create: InputMaybe<Array<SubWikiCreateInput>>
}

export type SubWikiCreateOneInlineInput = {
  /** Connect one existing SubWiki document */
  connect: InputMaybe<SubWikiWhereUniqueInput>
  /** Create and connect one SubWiki document */
  create: InputMaybe<SubWikiCreateInput>
}

/** An edge in a connection. */
export type SubWikiEdge = {
  __typename?: 'SubWikiEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: SubWiki
}

/** Identifies documents */
export type SubWikiManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<SubWikiWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<SubWikiWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<SubWikiWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  content: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  slug: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
  wiki: InputMaybe<WikiWhereInput>
}

export enum SubWikiOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type SubWikiUpdateInput = {
  content: InputMaybe<Scalars['String']>
  slug: InputMaybe<Scalars['String']>
  title: InputMaybe<Scalars['String']>
  wiki: InputMaybe<WikiUpdateOneInlineInput>
}

export type SubWikiUpdateManyInlineInput = {
  /** Connect multiple existing SubWiki documents */
  connect: InputMaybe<Array<SubWikiConnectInput>>
  /** Create and connect multiple SubWiki documents */
  create: InputMaybe<Array<SubWikiCreateInput>>
  /** Delete multiple SubWiki documents */
  delete: InputMaybe<Array<SubWikiWhereUniqueInput>>
  /** Disconnect multiple SubWiki documents */
  disconnect: InputMaybe<Array<SubWikiWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing SubWiki documents */
  set: InputMaybe<Array<SubWikiWhereUniqueInput>>
  /** Update multiple SubWiki documents */
  update: InputMaybe<Array<SubWikiUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple SubWiki documents */
  upsert: InputMaybe<Array<SubWikiUpsertWithNestedWhereUniqueInput>>
}

export type SubWikiUpdateManyInput = {
  content: InputMaybe<Scalars['String']>
}

export type SubWikiUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubWikiUpdateManyInput
  /** Document search */
  where: SubWikiWhereInput
}

export type SubWikiUpdateOneInlineInput = {
  /** Connect existing SubWiki document */
  connect: InputMaybe<SubWikiWhereUniqueInput>
  /** Create and connect one SubWiki document */
  create: InputMaybe<SubWikiCreateInput>
  /** Delete currently connected SubWiki document */
  delete: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected SubWiki document */
  disconnect: InputMaybe<Scalars['Boolean']>
  /** Update single SubWiki document */
  update: InputMaybe<SubWikiUpdateWithNestedWhereUniqueInput>
  /** Upsert single SubWiki document */
  upsert: InputMaybe<SubWikiUpsertWithNestedWhereUniqueInput>
}

export type SubWikiUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubWikiUpdateInput
  /** Unique document search */
  where: SubWikiWhereUniqueInput
}

export type SubWikiUpsertInput = {
  /** Create document if it didn't exist */
  create: SubWikiCreateInput
  /** Update document if it exists */
  update: SubWikiUpdateInput
}

export type SubWikiUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubWikiUpsertInput
  /** Unique document search */
  where: SubWikiWhereUniqueInput
}

/** Identifies documents */
export type SubWikiWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<SubWikiWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<SubWikiWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<SubWikiWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  content: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  slug: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
  wiki: InputMaybe<WikiWhereInput>
}

/** References SubWiki record uniquely */
export type SubWikiWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
  slug: InputMaybe<Scalars['String']>
  title: InputMaybe<Scalars['String']>
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  isActive: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>
  kind: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<UserKind>>
  /** All values that are not equal to given value. */
  kind_not: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<UserKind>>
  name: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>
  picture: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  picture_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  isActive: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>
  kind: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<UserKind>>
  /** All values that are not equal to given value. */
  kind_not: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<UserKind>>
  name: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>
  picture: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  picture_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

/** Wiki aggregator */
export type Wiki = Node & {
  __typename?: 'Wiki'
  /** Page content (don't link sub-wikis) */
  content: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Wiki>
  /** List of Wiki versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** Auto generated slug for Wiki */
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  subWikis: Array<SubWiki>
  /** Wiki title */
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy: Maybe<User>
}

/** Wiki aggregator */
export type WikiCreatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Wiki aggregator */
export type WikiDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Wiki aggregator */
export type WikiHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride: InputMaybe<Stage>
}

/** Wiki aggregator */
export type WikiPublishedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

/** Wiki aggregator */
export type WikiScheduledInArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<ScheduledOperationWhereInput>
}

/** Wiki aggregator */
export type WikiSubWikisArgs = {
  after: InputMaybe<Scalars['String']>
  before: InputMaybe<Scalars['String']>
  first: InputMaybe<Scalars['Int']>
  last: InputMaybe<Scalars['Int']>
  locales: InputMaybe<Array<Locale>>
  orderBy: InputMaybe<SubWikiOrderByInput>
  skip: InputMaybe<Scalars['Int']>
  where: InputMaybe<SubWikiWhereInput>
}

/** Wiki aggregator */
export type WikiUpdatedByArgs = {
  locales: InputMaybe<Array<Locale>>
}

export type WikiConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: WikiWhereUniqueInput
}

/** A connection to a list of items. */
export type WikiConnection = {
  __typename?: 'WikiConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<WikiEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type WikiCreateInput = {
  content: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  slug: Scalars['String']
  subWikis: InputMaybe<SubWikiCreateManyInlineInput>
  title: Scalars['String']
  updatedAt: InputMaybe<Scalars['DateTime']>
}

export type WikiCreateManyInlineInput = {
  /** Connect multiple existing Wiki documents */
  connect: InputMaybe<Array<WikiWhereUniqueInput>>
  /** Create and connect multiple existing Wiki documents */
  create: InputMaybe<Array<WikiCreateInput>>
}

export type WikiCreateOneInlineInput = {
  /** Connect one existing Wiki document */
  connect: InputMaybe<WikiWhereUniqueInput>
  /** Create and connect one Wiki document */
  create: InputMaybe<WikiCreateInput>
}

/** An edge in a connection. */
export type WikiEdge = {
  __typename?: 'WikiEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Wiki
}

/** Identifies documents */
export type WikiManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<WikiWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<WikiWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<WikiWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  content: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  slug: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>
  subWikis_every: InputMaybe<SubWikiWhereInput>
  subWikis_none: InputMaybe<SubWikiWhereInput>
  subWikis_some: InputMaybe<SubWikiWhereInput>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

export enum WikiOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WikiUpdateInput = {
  content: InputMaybe<Scalars['String']>
  slug: InputMaybe<Scalars['String']>
  subWikis: InputMaybe<SubWikiUpdateManyInlineInput>
  title: InputMaybe<Scalars['String']>
}

export type WikiUpdateManyInlineInput = {
  /** Connect multiple existing Wiki documents */
  connect: InputMaybe<Array<WikiConnectInput>>
  /** Create and connect multiple Wiki documents */
  create: InputMaybe<Array<WikiCreateInput>>
  /** Delete multiple Wiki documents */
  delete: InputMaybe<Array<WikiWhereUniqueInput>>
  /** Disconnect multiple Wiki documents */
  disconnect: InputMaybe<Array<WikiWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Wiki documents */
  set: InputMaybe<Array<WikiWhereUniqueInput>>
  /** Update multiple Wiki documents */
  update: InputMaybe<Array<WikiUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Wiki documents */
  upsert: InputMaybe<Array<WikiUpsertWithNestedWhereUniqueInput>>
}

export type WikiUpdateManyInput = {
  content: InputMaybe<Scalars['String']>
}

export type WikiUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WikiUpdateManyInput
  /** Document search */
  where: WikiWhereInput
}

export type WikiUpdateOneInlineInput = {
  /** Connect existing Wiki document */
  connect: InputMaybe<WikiWhereUniqueInput>
  /** Create and connect one Wiki document */
  create: InputMaybe<WikiCreateInput>
  /** Delete currently connected Wiki document */
  delete: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Wiki document */
  disconnect: InputMaybe<Scalars['Boolean']>
  /** Update single Wiki document */
  update: InputMaybe<WikiUpdateWithNestedWhereUniqueInput>
  /** Upsert single Wiki document */
  upsert: InputMaybe<WikiUpsertWithNestedWhereUniqueInput>
}

export type WikiUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WikiUpdateInput
  /** Unique document search */
  where: WikiWhereUniqueInput
}

export type WikiUpsertInput = {
  /** Create document if it didn't exist */
  create: WikiCreateInput
  /** Update document if it exists */
  update: WikiUpdateInput
}

export type WikiUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WikiUpsertInput
  /** Unique document search */
  where: WikiWhereUniqueInput
}

/** Identifies documents */
export type WikiWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<WikiWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<WikiWhereInput>>
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<WikiWhereInput>>
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>
  content: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  createdBy: InputMaybe<UserWhereInput>
  id: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>
  publishedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  publishedBy: InputMaybe<UserWhereInput>
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>
  slug: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>
  subWikis_every: InputMaybe<SubWikiWhereInput>
  subWikis_none: InputMaybe<SubWikiWhereInput>
  subWikis_some: InputMaybe<SubWikiWhereInput>
  title: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<Scalars['DateTime']>>
  updatedBy: InputMaybe<UserWhereInput>
}

/** References Wiki record uniquely */
export type WikiWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>
  slug: InputMaybe<Scalars['String']>
  title: InputMaybe<Scalars['String']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type GetSubWikiQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>
}>

export type GetSubWikiQuery = {
  __typename?: 'Query'
  subWiki: {
    __typename?: 'SubWiki'
    title: string
    content: string
    seeMore: {
      __typename?: 'Wiki'
      subWikis: Array<{ __typename?: 'SubWiki'; slug: string; title: string }>
    } | null
  } | null
}
