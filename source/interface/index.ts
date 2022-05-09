export interface GlobalTextProps {
  size?: 'small' | 'medium' | 'large' | 'normal'
  color?: string
  style?: any
  children?: any
  type?:
    | 'Bold'
    | 'BoldItalic'
    | 'ExtraBold'
    | 'ExtraBoldItalic'
    | 'Italic'
    | 'Light'
    | 'LightItalic'
    | 'Medium'
    | 'MediumItalic'
    | 'Regular'
    | 'SemiBold'
    | 'SemiBoldItalic'
  fontName?: string
}
export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  role: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email?: any
}

export interface Sponsor {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name?: any
  twitter_username: string
  portfolio_url: string
  bio: string
  location?: any
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Sponsorship {
  impression_urls: string[]
  tagline: string
  tagline_url: string
  sponsor: Sponsor
}

export interface BusinessWork {
  status: string
  approved_on: Date
}

export interface Wallpapers {
  status: string
  approved_on: Date
}

export interface Interiors {
  status: string
  approved_on: Date
}

export interface Covid19 {
  status: string
  approved_on: Date
}

export interface ArchitectureInterior {
  status: string
  approved_on: Date
}

export interface Links3 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email?: any
}

export interface User {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: Links3
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface Type {
  slug: string
  pretty_slug: string
}

export interface Category {
  slug: string
  pretty_slug: string
}

export interface Ancestry {
  type: Type
  category: Category
}

export interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links4 {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TexturesPatterns {
  status: string
  approved_on: Date
}

export interface Wallpapers2 {
  status: string
}

export interface Monochrome {
  status: string
}

export interface Links5 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage3 {
  small: string
  medium: string
  large: string
}

export interface Social3 {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email?: any
}

export interface User2 {
  id: string
  updated_at: Date
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: Links5
  profile_image: ProfileImage3
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social3
}

export interface CoverPhoto {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at?: any
  width: number
  height: number
  color: string
  blur_hash: string
  description?: any
  alt_description: string
  urls: Urls2
  links: Links4
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship?: any
  user: User2
}

export interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}

export interface Tag {
  type: string
  title: string
  source: Source
}

export interface Result {
  id: string
  created_at: Date
  updated_at: Date
  promoted_at?: Date
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  urls: Urls
  links: Links
  categories: any[]
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: Sponsorship
  user: User
  tags: Tag[]
}

export interface ImageRoot {
  total: number
  total_pages: number
  results: Result[]
}
