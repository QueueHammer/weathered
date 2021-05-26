declare type ForecastType = 'hourly' | 'baseline';
declare type Area = 'AL' | 'AK' | 'AS' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY' | 'PZ' | 'PK' | 'PH' | 'PS' | 'PM' | 'AN' | 'AM' | 'GM' | 'LS' | 'LM' | 'LH' | 'LC' | 'LE' | 'LO';
declare type Region = 'AL' | 'AT' | 'GL' | 'GM' | 'PA' | 'PI';
declare type RegionType = 'land' | 'marine';
declare type Urgency = 'immediate' | 'expected' | 'future' | 'past' | 'unknown';
declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
declare type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
interface AreaOption {
    area?: Area | Area[];
}
interface PointOption {
    latitude?: number;
    longitude?: number;
}
interface RegionOption {
    region?: Region | Region[];
}
interface RegionTypeOption {
    regionType?: RegionType;
}
interface ActiveOption {
    active: boolean;
}
interface UrgencyOption {
    urgency?: Urgency;
}
declare type AlertOptions = ActiveOption & UrgencyOption & XOR<AreaOption, XOR<PointOption, XOR<RegionOption, RegionTypeOption>>>;
interface ClientOptions {
    userAgent?: string;
}
interface PointResponse {
    properties: {
        forecast: string;
        forecastHourly: string;
    };
}
interface ForecastPeriod {
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend?: string;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}
interface ForecastProperties {
    updated: string;
    units: string;
    forecastGenerator: string;
    generatedAt: string;
    updateTime: string;
    validTimes: string;
    elevation: {
        value: number;
        unitCode: string;
    };
    periods: ForecastPeriod[];
}
interface ForecastResponse {
    properties: ForecastProperties;
}
export { ForecastType, Area, Region, RegionType, Urgency, AlertOptions, ClientOptions, PointResponse, ForecastResponse };
