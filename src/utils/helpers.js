import jwtDecode from "jwt-decode";
import moment from "moment";

export const dateFormat = "YYYY-MM-DD";

export const initDateFrom = moment()
  .subtract(7, "d")
  .format(dateFormat);
export const initDateTo = moment().format(dateFormat);

export function addZeroes(num, decimalScale) {
  const dec = num.split(".")[1];
  const len = dec && dec.length > decimalScale ? dec.length : decimalScale;
  return Number(num).toFixed(len);
}

export function decodeToken(token) {
  return jwtDecode(token);
}

export function isWhitespaceOrEmpty(text) {
  return !/[^\s]/.test(text);
}

export function downloadCSV(response, fileName) {
  const url = window.URL.createObjectURL(new Blob([response]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName || "file.csv"); //or any other extension
  document.body.appendChild(link);
  link.click();
}

export function isQuillEmpty (text) {
  return text.replace(/<(.|\n)*?>/g, '').trim().length === 0
}
