export class Validators {
  static required(value = '') {
    return value && value.trim() 
  }
  static minLenhth(length) {
    return value => {
      return value.length >= length
    }
  }

}