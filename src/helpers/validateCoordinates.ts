export function validateCoordinates(lat: number, lon: number) {
  return (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) ? true : false
}