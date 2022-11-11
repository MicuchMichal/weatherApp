//data from API stored here
export interface forecastData {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  hourly_units: HourlyUnits,
  hourly: Hourly
}
export interface HourlyUnits {
  time: string,
  temperature_2m: string,
  relativehumidity_2m: string,
  weathercode: string,
  surface_pressure: string,
  windspeed_10m: string
}
export interface Hourly {
  time: string[],
  temperature_2m: number[],
  relativehumidity_2m: number[],
  weathercode: number[],
  surface_pressure: number[],
  windspeed_10m: number[]
}

//actual data of diplayed weather forecast data
export interface HourlyData  {
  time: string,
  temperature_2m: number,
  relativehumidity_2m: number,
  weathercode: number,
  surface_pressure: number,
  windspeed_10m: number
}