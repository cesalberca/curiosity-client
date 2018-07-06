export interface Image {
  camera: Camera
  earth_date: string
  id: number
  img_src: string
  rover: {
    cameras: Camera[]
    id: number
    landing_date: string
    launch_date: string
    max_date: string
    max_sol: number
    name: string
    status: string
    total_photos: number
  }
  sol: number
}

interface Camera {
  id?: number
  rover_id?: number
  full_name: string
  name: string
}
