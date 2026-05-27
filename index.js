export const COUNTRIES_DATA = Object.freeze([
  {
    name: "Vietnam",
    code: "84",
    currency: "VND",
    iso_alpha_2: "VN",
    validate: "^(\\+84|84|0)(3([2-9])|5(2|5|6|8|9)|7(0|[6-9])|8([1-9])|9([0-4]|[6-9]))([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Philippines",
    code: "63",
    currency: "PHP",
    iso_alpha_2: "PH",
    validate: "\^(09|\\+639|639)\\d{9}$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: "Cambodia",
    code: "855",
    currency: "KHR",
    iso_alpha_2: "KH",
    validate: "^(\\+855|855|0)[0-9]{8,9}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Laos",
    code: "856",
    currency: "LAK",
    iso_alpha_2: "LA",
    validate: "^(\\+856|856|0)[0-9]{8,10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Indonesia",
    code: "62",
    currency: "IDR",
    iso_alpha_2: "ID",
    validate: "^(\\+62|62|08)(\\d{3,4}-?){1,2}\\d{3,4}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Taiwan",
    code: "886",
    currency: "TWD",
    iso_alpha_2: "TW",
    validate: "^(\\+886|0)([0-9]{9})$",
    postalFormat: "^[0-9]{3}(-[0-9]{2})?$"
  },
  {
    name: "Thailand",
    code: "66",
    currency: "THB",
    iso_alpha_2: "TH",
    validate: "^(\\+66|66|0)(8|9|6)([0-9]{8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Malaysia",
    code: "60",
    currency: "MYR",
    iso_alpha_2: "MY",
    validate: "^(?:\\+?6?0)(?:3[1-9]|1[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[1-9]|9[0-9])\\d{7,8}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "India",
    code: "91",
    currency: "INR",
    iso_alpha_2: "IN",
    validate: "^(\\+91|91|0|)([0-9]{9,10})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: "Myanmar",
    code: "95",
    currency: "MMK",
    iso_alpha_2: "MM",
    validate: "^(0|\\+95|95|)\\d{6,10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Bangladesh",
    code: "880",
    currency: "BDT",
    iso_alpha_2: "BD",
    validate: "^(\\+8801|8801|01|008801)(1|[3-9]){1}([0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: "UAE",
    code: "971",
    currency: "AED",
    iso_alpha_2: "AE",
    validate: "^(?:\\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\\d{7}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "USA",
    code: "1",
    currency: "USD",
    iso_alpha_2: "US",
    validate: "^(?:\\+1[ ]?)?\\(?[2-9][0-9]{2}\\)?[ .\\-]?[2-9][0-9]{2}[ .\\-]?[0-9]{4}$",
    // validate: "^(\\+1)?[0-9]{3}[0-9]{3}[0-9]{4}$",
    postalFormat: "^[0-9]{5}(-[0-9]{4})?$"
  },
  {
    name: "Colombia",
    code: "57",
    currency: "COP",
    iso_alpha_2: "CO",
    validate: "^(\\+57|57|0|)[0-9]{10}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: "Ecuador",
    code: "593",
    currency: "USD",
    iso_alpha_2: "EC",
    validate: "^(\\+593|593|0)[0-9]{9}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: "Saudi Arabia",
    code: "966",
    currency: "SAR",
    iso_alpha_2: "SA",
    validate: "^(009665|9665|\\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$",
    postalFormat: "^[0-9]{5}(-[0-9]{4})?$"
  },
  {
    name: "Qatar",
    code: "974",
    currency: "QAR",
    iso_alpha_2: "QA",
    validate: "^(\\+974|974|0)(3|4|5|6|9)([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Singapore",
    code: "65",
    currency: "SGD",
    iso_alpha_2: "SG",
    validate: "^(\\+65|65|0)(6|8|9)\\d{7}$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: "Peru",
    code: "51",
    currency: "PEN",
    iso_alpha_2: "PE",
    validate: "^(\\+51|51)?9\\d{8}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Chile",
    code: "56",
    currency: "CLP",
    iso_alpha_2: "CL",
    validate: "^(\\+56|56|)([0-9]{9})$",
    postalFormat: "^[0-9]{7}$"
  },
  {
    name: "Brazil",
    code: "55",
    currency: "BRL",
    iso_alpha_2: "BR",
    validate: "^(\\+55|55|0)([1-9]{2})([0-9]{8,9})$",
    postalFormat: "^[0-9]{5}-[0-9]{3}$"
  },
  {
    name: "Nepal",
    code: "977",
    currency: "NPR",
    iso_alpha_2: "NP",
    validate: "^(\\+977|977|0)(9)([0-9]{9})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "South Korea",
    code: "82",
    currency: "KRW",
    iso_alpha_2: "KR",
    validate: "^(\\+82|82|0)(10|1[1-9])([0-9]{7,8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: "Japan",
    code: "81",
    currency: "JPY",
    iso_alpha_2: "JP",
    validate: "^(\\+81|81|0)(70|80|90)([0-9]{8})$",
    postalFormat: "^[0-9]{3}-[0-9]{4}$"
  },
  {
    name: "Hong Kong",
    code: "852",
    currency: "HKD",
    iso_alpha_2: "HK",
    validate: "^(\\+852|852|0)(5|6|9)([0-9]{7})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: 'Nigeria',
    code: '234',
    currency: 'NGN',
    iso_alpha_2: "NG",
    validate: "^(\\+234|234|0)(7|8|9)([0-9]{9})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: 'Afghanistan',
    code: '93',
    currency: 'AFN',
    iso_alpha_2: "AF",
    validate: "^(\\+93|93|0)([2-9][0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Kuwait',
    code: '965',
    currency: 'KWD',
    iso_alpha_2: "KW",
    validate: "^(\\+965|965)([5|6|9][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Oman',
    code: '968',
    currency: 'OMR',
    iso_alpha_2: "OM",
    validate: "^(\\+968|968)(9[0-9]{7})$",
    postalFormat: "^[0-9]{3}$"
  },
  {
    name: 'Bahrain',
    code: '973',
    currency: 'BHD',
    iso_alpha_2: "BH",
    validate: "^(\\+973|973)([3|6|7|9][0-9]{7})$",
    postalFormat: "^[0-9]{3,4}$"
  },
  {
    name: 'Mongolia',
    code: '976',
    currency: 'MNT',
    iso_alpha_2: "MN",
    validate: "^(\\+976|976)([8|9][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Spain',
    code: '34',
    currency: 'EUR',
    iso_alpha_2: "ES",
    validate: "^(\\+34|34)(6|7)([0-9]{8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Mexico',
    code: '52',
    currency: 'MXN',
    iso_alpha_2: "MX",
    validate: "^(?:\\+52|0052|52)?\\s?\\d{10}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Argentina',
    code: '54',
    currency: 'ARS',
    iso_alpha_2: "AR",
    validate: "^(\\+54|54|0)?(9[0-9]{2})([0-9]{7,8})$",
    postalFormat: "^[a-zA-Z][0-9]{4}[a-zA-Z]{3}$"
  },
  {
    name: 'Venezuela',
    code: '58',
    currency: 'VES',
    iso_alpha_2: "VE",
    validate: "^(\\+58|58|0)(4)([0-9]{9})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Costa Rica',
    code: '506',
    currency: 'CRC',
    iso_alpha_2: "CR",
    validate: "^(\\+506|506)([2-8][0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Bolivia',
    code: '591',
    currency: 'BOB',
    iso_alpha_2: "BO",
    validate: "^(\\+591|591|0)([6-7][0-9]{7})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Paraguay',
    code: '595',
    currency: 'PYG',
    iso_alpha_2: "PY",
    validate: "^(\\+595|595)(9[0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Dominican',
    code: '1000',
    currency: 'DOP',
    iso_alpha_2: "DO",
    validate: "^(\\+1|1)?(809|829|849)([0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Honduras',
    code: '504',
    currency: 'HNL',
    iso_alpha_2: "HN",
    validate: "^(\\+504|504)(9[0-9]{7})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Australia',
    code: '61',
    currency: 'AUD',
    iso_alpha_2: "AU",
    validate: "^(\\+61|61)4([0-9]{8})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'New Zealand',
    code: '64',
    currency: 'NZD',
    iso_alpha_2: "NZ",
    validate: "^(\\+64|64)2([0-9]{7,9})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Canada',
    code: '1001',
    currency: 'CAD',
    iso_alpha_2: "CA",
    validate: "^(\\+1|1)([2-9][0-9]{2})([0-9]{7})$",
    postalFormat: "^[a-zA-Z][0-9][a-zA-Z][ ]?[0-9][a-zA-Z][0-9]$"
  },
  {
    name: 'China',
    code: '86',
    currency: 'CNY',
    iso_alpha_2: "CN",
    validate: "^(\\+86|86)(1[3-9][0-9])([0-9]{8})$",
    postalFormat: "^[0-9]{6}$"
  },
  {
    name: 'Panama',
    code: '507',
    currency: 'PAB',
    iso_alpha_2: "PA",
    validate: "^(\\+507|507)(6)([0-9]{7})$",
    postalFormat: "^[0-9]{4}$"
  },
  {
    name: 'Guatemala',
    code: '502',
    currency: 'GTQ',
    iso_alpha_2: "GT",
    validate: "^[2-6]\\d{7}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Jamaica',
    code: '1002',
    currency: 'JMD',
    iso_alpha_2: "JM",
    validate: "^(876|658)\\d{7}",
    postalFormat: "^[0-9]{2}$"
  },
  {
    name: 'Brunei',
    code: '673',
    currency: 'BND',
    iso_alpha_2: "BN",
    validate: "^(\\+673|673)([0-9]{8})$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'United Kingdom',
    code: '44',
    currency: 'GBP',
    iso_alpha_2: "GB",
    validate: "^(\\+44|44|0)(7)([0-9]{9})$",
    postalFormat: "^[A-Z0-9 ]{5,8}$"
  },
  {
    name: 'Iran',
    code: '98',
    currency: 'IRR',
    iso_alpha_2: "IR",
    validate: "^(\\+98|98|0)?9\\d{9}$",
    postalFormat: "^[0-9]{10}$"
  },
  {
    name: 'Iraq',
    code: '964',
    currency: 'IQD',
    iso_alpha_2: "IQ",
    validate: "^(\\+964|964|0)?7\\d{9}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Morocco',
    code: '212',
    currency: 'MAD',
    iso_alpha_2: "MA",
    validate: "^(\\+212|212|0)?[5-7]\\d{8}$",
    postalFormat: "^[0-9]{5}$"
  },
  {
    name: 'Germany',
    code: '49',
    currency: 'EUR',
    iso_alpha_2: "DE",
    validate: "^(\\+49|49|0)?1\\d{9,10}$",
    postalFormat: "^[0-9]{5}$"
  }
])