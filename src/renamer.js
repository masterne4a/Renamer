export function rename (elem) {
  
  const firsPart = 'yandex_disk://ПневмоСПБ-Товары/';
  let str = firsPart + elem
  const str1 = str + `/1-1.jpg | `;
  const str2 = str + `/1-2.jpg | `;
  const str3 = str + `/1-3.jpg | `;
  const str4 = str + `/1-4.jpg | `;
  const str5 = str + `/1-5.jpg | `;
  const str6 = str + `/1-6.jpg | `;
  const str7 = str + `/1-7.jpg | `;
  const str8 = str + `/1-8.jpg`;
  return str1.concat(str2, str3, str4, str5, str6, str7, str8)
}