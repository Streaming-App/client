export default function emailValidate(param) {
  const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+\.?[a-z]+$/;
  return emailRegex.test(param);
}