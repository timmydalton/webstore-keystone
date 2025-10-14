export const countries_data = Object.freeze([
  {
    country: "Vietnam",
    code: "84",
    currency: "VND",
    validate: "^(\\+84|84|0)(3([2-9])|5(2|5|6|8|9)|7(0|[6-9])|8([1-9])|9([0-4]|[6-9]))([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Philippines",
    code: "63",
    currency: "PHP",
    validate: "\^(09|\\+639|639)\\d{9}$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: "Cambodia",
    code: "855",
    currency: "KHR",
    validate: "^(\\+855|855|0)[0-9]{8,9}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Laos",
    code: "856",
    currency: "LAK",
    validate: "^(\\+856|856|0)[0-9]{8,10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Indonesia",
    code: "62",
    currency: "IDR",
    validate: "^(\\+62|62|08)(\\d{3,4}-?){1,2}\\d{3,4}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Taiwan",
    code: "886",
    currency: "TWD",
    validate: "^(\\+886|0)([0-9]{9})$",
    postalFormat: "^[0-9]{3}(-[0-9]{2})?$"
  },
  {
    country: "Thailand",
    code: "66",
    currency: "THB",
    validate: "^(\\+66|66|0)(8|9|6)([0-9]{8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Malaysia",
    code: "60",
    currency: "MYR",
    validate: "^(?:\\+?6?0)(?:3[1-9]|1[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[1-9]|9[0-9])\\d{7,8}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "India",
    code: "91",
    currency: "INR",
    validate: "^(\\+91|91|0|)([0-9]{9,10})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: "Myanmar",
    code: "95",
    currency: "MMK",
    validate: "^(0|\\+95|95|)\\d{6,10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Bangladesh",
    code: "880",
    currency: "BDT",
    validate: "^(\\+8801|8801|01|008801)(1|[3-9]){1}([0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: "UAE",
    code: "971",
    currency: "AED",
    validate: "^(?:\\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\\d{7}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "USA",
    code: "1",
    currency: "USD",
    validate: "^(?:\\+1[ ]?)?\\(?[2-9][0-9]{2}\\)?[ .\\-]?[2-9][0-9]{2}[ .\\-]?[0-9]{4}$",
    // validate: "^(\\+1)?[0-9]{3}[0-9]{3}[0-9]{4}$",
    postalFormat: "^[0-9]{5}(-[0-9]{4})?$"
  },
  {
    country: "Colombia",
    code: "57",
    currency: "COP",
    validate: "^(\\+57|57|0|)[0-9]{10}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: "Ecuador",
    code: "593",
    currency: "USD",
    validate: "^(\\+593|593|0)[0-9]{9}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: "Saudi Arabia",
    code: "966",
    currency: "SAR",
    validate: "^(009665|9665|\\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$",
    postalFormat: "^[0-9]{5}(-[0-9]{4})?$"
  },
  {
    country: "Qatar",
    code: "974",
    currency: "QAR",
    validate: "^(\\+974|974|0)(3|4|5|6|9)([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Singapore",
    code: "65",
    currency: "SGD",
    validate: "^(\\+65|65|0)(6|8|9)\\d{7}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: "Peru",
    code: "51",
    currency: "PEN",
    validate: "^(\\+51|51)?9\\d{8}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Chile",
    code: "56",
    currency: "CLP",
    validate: "^(\\+56|56|)([0-9]{9})$",
    postalFormat: "^[0-9]{7}$"
  },
  {
    country: "Brazil",
    code: "55",
    currency: "BRL",
    validate: "^(\\+55|55|0)([1-9]{2})([0-9]{8,9})$",
    postalFormat: "^[0-9]{5}-[0-9]{3}$"
  },
  {
    country: "Nepal",
    code: "977",
    currency: "NPR",
    validate: "^(\\+977|977|0)(9)([0-9]{9})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "South Korea",
    code: "82",
    currency: "KRW",
    validate: "^(\\+82|82|0)(10|1[1-9])([0-9]{7,8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: "Japan",
    code: "81",
    currency: "JPY",
    validate: "^(\\+81|81|0)(70|80|90)([0-9]{8})$",
    postalFormat: "^[0-9]{3}-[0-9]{4}$"
  },
  {
    country: "Hong Kong",
    code: "852",
    currency: "HKD",
    validate: "^(\\+852|852|0)(5|6|9)([0-9]{7})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: 'Nigeria',
    code: '234',
    currency: 'NGN',
    validate: "^(\\+234|234|0)(7|8|9)([0-9]{9})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: 'Afghanistan',
    code: '93',
    currency: 'AFN',
    validate: "^(\\+93|93|0)([2-9][0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Kuwait',
    code: '965',
    currency: 'KWD',
    validate: "^(\\+965|965)([5|6|9][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Oman',
    code: '968',
    currency: 'OMR',
    validate: "^(\\+968|968)(9[0-9]{7})$",
    postalFormat: "^[0-9]{3}$"
  },
  {
    country: 'Bahrain',
    code: '973',
    currency: 'BHD',
    validate: "^(\\+973|973)([3|6|7|9][0-9]{7})$",
    postalFormat: "^[0-9]{3,4}$"
  },
  {
    country: 'Mongolia',
    code: '976',
    currency: 'MNT',
    validate: "^(\\+976|976)([8|9][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Spain',
    code: '34',
    currency: 'EUR',
    validate: "^(\\+34|34)(6|7)([0-9]{8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Mexico',
    code: '52',
    currency: 'MXN',
    validate: "^(?:\\+52|0052|52)?\\s?\\d{10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Argentina',
    code: '54',
    currency: 'ARS',
    validate: "^(\\+54|54|0)?(9[0-9]{2})([0-9]{7,8})$",
    postalFormat: "^[a-zA-Z][0-9]{4}[a-zA-Z]{3}$"
  },
  {
    country: 'Venezuela',
    code: '58',
    currency: 'VES',
    validate: "^(\\+58|58|0)(4)([0-9]{9})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Costa Rica',
    code: '506',
    currency: 'CRC',
    validate: "^(\\+506|506)([2-8][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Bolivia',
    code: '591',
    currency: 'BOB',
    validate: "^(\\+591|591|0)([6-7][0-9]{7})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Paraguay',
    code: '595',
    currency: 'PYG',
    validate: "^(\\+595|595)(9[0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Dominican',
    code: '1000',
    currency: 'DOP',
    validate: "^(\\+1|1)?(809|829|849)([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Honduras',
    code: '504',
    currency: 'HNL',
    validate: "^(\\+504|504)(9[0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Australia',
    code: '61',
    currency: 'AUD',
    validate: "^(\\+61|61)4([0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'New Zealand',
    code: '64',
    currency: 'NZD',
    validate: "^(\\+64|64)2([0-9]{7,9})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Canada',
    code: '1001',
    currency: 'CAD',
    validate: "^(\\+1|1)([2-9][0-9]{2})([0-9]{7})$",
    postalFormat: "^[a-zA-Z][0-9][a-zA-Z][ ]?[0-9][a-zA-Z][0-9]$"
  },
  {
    country: 'China',
    code: '86',
    currency: 'CNY',
    validate: "^(\\+86|86)(1[3-9][0-9])([0-9]{8})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    country: 'Panama',
    code: '507',
    currency: 'PAB',
    validate: "^(\\+507|507)(6)([0-9]{7})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    country: 'Guatemala',
    code: '502',
    currency: 'GTQ',
    validate: "^[2-6]\\d{7}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    country: 'Jamaica',
    code: '1002',
    currency: 'JMD',
    validate: "^(876|658)\\d{7}",
    postalFormat: "^[0-9]{2}$"
  }
])