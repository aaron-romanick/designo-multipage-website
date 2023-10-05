
export function useImages(imagesGlob: Record<string, any>) {
  return async function imageFromGlob(path: string) {
    return await imagesGlob[path]()
  }
}