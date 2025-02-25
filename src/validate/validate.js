export const validate = (payload, setValid) => {
  const newErr = {}
  if (!payload.emailOrPhone) {
    newErr.emailOrPhone = 'Không được để trống'
  } else if (!/\S+@\S+\.\S+/.test(payload.emailOrPhone)) {
    newErr.emailOrPhone = 'Email không hợp lệ'
  }

  if (!payload.password) {
    newErr.password = 'Không được để trống'
  } else if (payload.password.length < 6) {
    newErr.password = 'Mật khẩu ít nhất phải có 6 kí tự'
  }

  setValid(newErr)
  return (Object.keys(newErr).length === 0);

}

export const validateProduct = (payload, setValid) => {
  const field = Object.entries(payload)
  const newErr = {}
  field.forEach((item) => {
    switch (item[0]) {
      case 'name':
        if (!payload.name) {
          newErr.name = 'VUi lòng điền'
        }
        break;
      case 'price':
        if (!payload.price) {
          newErr.price = 'Vui lòng điền'
        }
        break;

      case 'quantity':
        if (!payload.quantity) {
          newErr.quantity = 'Vui lòng điền'
        }
        break;

      case 'description':
        if (!payload.description) {
          newErr.description = 'Vui lòng điền'
        }
        break;
      case 'imageId':
        if (!payload.imageId || payload.imageId.length < 1) {
          newErr.imageId = 'Không được bỏ trống'
        }
      default:
        break;
    }
  })
  setValid(newErr)
  return (Object.keys(newErr).length === 0)
}