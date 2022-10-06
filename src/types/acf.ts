export interface ACFImageSizes {
    '1536x1536': string
    '1536x1536-height': number
    '1536x1536-width': number
    '2048x2048': string
    '2048x2048-height': number
    '2048x2048-width': number
    large: string
    'large-height': number
    'large-width': number
    medium: string
    'medium-height': number
    'medium-width': number
    thumbnail: string
    'thumbnail-height': number
    'thumbnail-width': number
}

export interface ACFImage {
    ID: number
    alt: string
    author: string
    caption: string
    date: Date
    desciption: string
    filename: string
    filesize: number
    height: number
    icon: string
    id: number
    link: string
    menu_order: number
    mime_type: string
    modified: Date
    name: string
    sizes: ACFImageSizes
    status: string
    subtype: string
    title: string
    type: string
    uploaded_to: number
    url: string
    width: number
}
