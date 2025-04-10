/**
 * Represents a native ad for rendering in {@link NativeAdView}. This type is intended for internal use only.
 */
export type NativeAd = {
    /**
     * The native ad title text.
     */
    title?: string | null;

    /**
     * The native ad advertiser text.
     */
    advertiser?: string | null;

    /**
     * The native ad body text.
     */
    body?: string | null;

    /**
     * The native ad CTA button text.
     */
    callToAction?: string | null;

    /**
     * Whether or not this has an image icon.
     */
    image?: boolean;

    /**
     * The data of the icon.
     */
    imageSource?: string | null;

    /**
     * The URL string of the icon.
     */
    url?: string;

    /**
     * The star rating of the native ad.
     */
    starRating?: number;

    /**
     * Whether or not the Options view is available.
     */
    isOptionsViewAvailable: boolean;

    /**
     * Whether or not the Media view is available.
     */
    isMediaViewAvailable: boolean;
};
