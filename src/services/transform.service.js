export class TransformService {
  static fireBaseObjectToArray(fbData) {
    return Object.keys(fbData).map(key => {
      const item = fbData[key]
      item.id = key
      return item
    })
  }
}