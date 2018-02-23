import http from './../http'
import { getFormattedDate } from './../utils/dateFormatter'

export async function getImages() {
  const options = {
    page: 1,
    camera: 'MAST',
    earth_date: getFormattedDate(new Date('2015-04-15'))
  }
  return (await http.get('/photos', options)).photos
}
