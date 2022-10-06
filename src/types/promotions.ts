import { ACFImage } from './acf'

export interface TuffShedPromotion {
    featured_media: unknown[]
    homepage_featured_image: ACFImage
    promo_type: 'ts_promo' | 'financing_promo' | 'default_financing_promo'
    body: string
    id: number
    status: string
    title: string
    market: 'test_market' | 'high_wind_market' | 'miami_market' | 'normal_market'
}

export interface PromoProps {
    HWSpecial: boolean
    HDHighWindOptionRule: string
    ApplicableMarket: string | null
}
