const validate = (payload, setValid) => {

  const newErr = {}

  // if (!payload.name) {
  //   newErr.name = 'Không được để trống'
  // }


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
export default validate