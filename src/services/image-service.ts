import { http } from '@/http'
import { getFormattedDate } from '@/utils/date-formatter'
import { Image } from '@/models/Image'

export async function getImages(): Promise<Image[]> {
  return (await http.get('photos', {
    params: {
      page: 1,
      camera: 'MAST',
      earth_date: getFormattedDate(new Date('2016-04-15'))
    }
  })).data.photos
}
