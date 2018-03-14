const mapData = [
  {
    code: 'AF', name: 'Afghanistan', value: 2, color: 'asia',
  },
  {
    code: 'AL', name: 'Albania', value: 4, color: 'europe',
  },
  // {
  //   code: 'DZ', name: 'Algeria', value: 35980193, color: 'africa',
  // },
  // {
  //   code: 'AO', name: 'Angola', value: 19618432, color: 'africa',
  // },
  // {
  //   code: 'AR', name: 'Argentina', value: 40764561, color: 'southAmerica',
  // },
  // {
  //   code: 'AM', name: 'Armenia', value: 3100236, color: 'europe',
  // },
  // {
  //   code: 'AU', name: 'Australia', value: 22605732, color: 'oceania',
  // },
  // {
  //   code: 'AT', name: 'Austria', value: 8413429, color: 'europe',
  // },
  // {
  //   code: 'AZ', name: 'Azerbaijan', value: 9306023, color: 'europe',
  // },
  // {
  //   code: 'BH', name: 'Bahrain', value: 1323535, color: 'asia',
  // },
  // {
  //   code: 'BD', name: 'Bangladesh', value: 150493658, color: 'asia',
  // },
  // {
  //   code: 'BY', name: 'Belarus', value: 9559441, color: 'europe',
  // },
  // {
  //   code: 'BE', name: 'Belgium', value: 10754056, color: 'europe',
  // },
  // {
  //   code: 'BJ', name: 'Benin', value: 9099922, color: 'africa',
  // },
  // {
  //   code: 'BT', name: 'Bhutan', value: 738267, color: 'asia',
  // },
  // {
  //   code: 'BO', name: 'Bolivia', value: 10088108, color: 'southAmerica',
  // },
  // {
  //   code: 'BA', name: 'Bosnia and Herzegovina', value: 3752228, color: 'europe',
  // },
  // {
  //   code: 'BW', name: 'Botswana', value: 2030738, color: 'africa',
  // },
  // {
  //   code: 'BR', name: 'Brazil', value: 196655014, color: 'southAmerica',
  // },
  // {
  //   code: 'BN', name: 'Brunei', value: 405938, color: 'asia',
  // },
  // {
  //   code: 'BG', name: 'Bulgaria', value: 7446135, color: 'europe',
  // },
  // {
  //   code: 'BF', name: 'Burkina Faso', value: 16967845, color: 'africa',
  // },
  // {
  //   code: 'BI', name: 'Burundi', value: 8575172, color: 'africa',
  // },
  // {
  //   code: 'KH', name: 'Cambodia', value: 14305183, color: 'asia',
  // },
  // {
  //   code: 'CM', name: 'Cameroon', value: 20030362, color: 'africa',
  // },
  // {
  //   code: 'CA', name: 'Canada', value: 34349561, color: 'northAmerica',
  // },
  // {
  //   code: 'CV', name: 'Cape Verde', value: 500585, color: 'africa',
  // },
  // {
  //   code: 'CF', name: 'Central African Rep.', value: 4486837, color: 'africa',
  // },
  // {
  //   code: 'TD', name: 'Chad', value: 11525496, color: 'africa',
  // },
  // {
  //   code: 'CL', name: 'Chile', value: 17269525, color: 'southAmerica',
  // },
  // {
  //   code: 'CN', name: 'China', value: 1347565324, color: 'asia',
  // },
  // {
  //   code: 'CO', name: 'Colombia', value: 46927125, color: 'southAmerica',
  // },
  // {
  //   code: 'KM', name: 'Comoros', value: 753943, color: 'africa',
  // },
  // {
  //   code: 'CD', name: 'Congo, Dem. Rep.', value: 67757577, color: 'africa',
  // },
  // {
  //   code: 'CG', name: 'Congo, Rep.', value: 4139748, color: 'africa',
  // },
  // {
  //   code: 'CR', name: 'Costa Rica', value: 4726575, color: 'northAmerica',
  // },
  // {
  //   code: 'CI', name: 'Cote d\'Ivoire', value: 20152894, color: 'africa',
  // },
  // {
  //   code: 'HR', name: 'Croatia', value: 4395560, color: 'europe',
  // },
  // {
  //   code: 'CU', name: 'Cuba', value: 11253665, color: 'northAmerica',
  // },
  // {
  //   code: 'CY', name: 'Cyprus', value: 1116564, color: 'europe',
  // },
  // {
  //   code: 'CZ', name: 'Czech Rep.', value: 10534293, color: 'europe',
  // },
  // {
  //   code: 'DK', name: 'Denmark', value: 5572594, color: 'europe',
  // },
  // {
  //   code: 'DJ', name: 'Djibouti', value: 905564, color: 'africa',
  // },
  // {
  //   code: 'DO', name: 'Dominican Rep.', value: 10056181, color: 'northAmerica',
  // },
  // {
  //   code: 'EC', name: 'Ecuador', value: 14666055, color: 'southAmerica',
  // },
  // {
  //   code: 'EG', name: 'Egypt', value: 82536770, color: 'africa',
  // },
  // {
  //   code: 'SV', name: 'El Salvador', value: 6227491, color: 'northAmerica',
  // },
  // {
  //   code: 'GQ', name: 'Equatorial Guinea', value: 720213, color: 'africa',
  // },
  // {
  //   code: 'ER', name: 'Eritrea', value: 5415280, color: 'africa',
  // },
  // {
  //   code: 'EE', name: 'Estonia', value: 1340537, color: 'europe',
  // },
  // {
  //   code: 'ET', name: 'Ethiopia', value: 84734262, color: 'africa',
  // },
  // {
  //   code: 'FJ', name: 'Fiji', value: 868406, color: 'oceania',
  // },
  // {
  //   code: 'FI', name: 'Finland', value: 5384770, color: 'europe',
  // },
  // {
  //   code: 'FR', name: 'France', value: 63125894, color: 'europe',
  // },
  // {
  //   code: 'GA', name: 'Gabon', value: 1534262, color: 'africa',
  // },
  // {
  //   code: 'GM', name: 'Gambia', value: 1776103, color: 'africa',
  // },
  // {
  //   code: 'GE', name: 'Georgia', value: 4329026, color: 'europe',
  // },
  // {
  //   code: 'DE', name: 'Germany', value: 82162512, color: 'europe',
  // },
  // {
  //   code: 'GH', name: 'Ghana', value: 24965816, color: 'africa',
  // },
  // {
  //   code: 'GR', name: 'Greece', value: 11390031, color: 'europe',
  // },
  // {
  //   code: 'GT', name: 'Guatemala', value: 14757316, color: 'northAmerica',
  // },
  // {
  //   code: 'GN', name: 'Guinea', value: 10221808, color: 'africa',
  // },
  // {
  //   code: 'GW', name: 'Guinea-Bissau', value: 1547061, color: 'africa',
  // },
  // {
  //   code: 'GY', name: 'Guyana', value: 756040, color: 'southAmerica',
  // },
  // {
  //   code: 'HT', name: 'Haiti', value: 10123787, color: 'northAmerica',
  // },
  // {
  //   code: 'HN', name: 'Honduras', value: 7754687, color: 'northAmerica',
  // },
  // {
  //   code: 'HK', name: 'Hong Kong, China', value: 7122187, color: 'asia',
  // },
  // {
  //   code: 'HU', name: 'Hungary', value: 9966116, color: 'europe',
  // },
  // {
  //   code: 'IS', name: 'Iceland', value: 324366, color: 'europe',
  // },
  // {
  //   code: 'IN', name: 'India', value: 1241491960, color: 'asia',
  // },
  // {
  //   code: 'ID', name: 'Indonesia', value: 242325638, color: 'asia',
  // },
  // {
  //   code: 'IR', name: 'Iran', value: 74798599, color: 'asia',
  // },
  // {
  //   code: 'IQ', name: 'Iraq', value: 32664942, color: 'asia',
  // },
  // {
  //   code: 'IE', name: 'Ireland', value: 4525802, color: 'europe',
  // },
  // {
  //   code: 'IL', name: 'Israel', value: 7562194, color: 'asia',
  // },
  // {
  //   code: 'IT', name: 'Italy', value: 60788694, color: 'europe',
  // },
  // {
  //   code: 'JM', name: 'Jamaica', value: 2751273, color: 'northAmerica',
  // },
  // {
  //   code: 'JP', name: 'Japan', value: 126497241, color: 'asia',
  // },
  // {
  //   code: 'JO', name: 'Jordan', value: 6330169, color: 'asia',
  // },
  // {
  //   code: 'KZ', name: 'Kazakhstan', value: 16206750, color: 'asia',
  // },
  // {
  //   code: 'KE', name: 'Kenya', value: 41609728, color: 'africa',
  // },
  // {
  //   code: 'KP', name: 'Korea, Dem. Rep.', value: 24451285, color: 'asia',
  // },
  // {
  //   code: 'KR', name: 'Korea, Rep.', value: 48391343, color: 'asia',
  // },
  // {
  //   code: 'KW', name: 'Kuwait', value: 2818042, color: 'asia',
  // },
  // {
  //   code: 'KG', name: 'Kyrgyzstan', value: 5392580, color: 'asia',
  // },
  // {
  //   code: 'LA', name: 'Laos', value: 6288037, color: 'asia',
  // },
  // {
  //   code: 'LV', name: 'Latvia', value: 2243142, color: 'europe',
  // },
  // {
  //   code: 'LB', name: 'Lebanon', value: 4259405, color: 'asia',
  // },
  // {
  //   code: 'LS', name: 'Lesotho', value: 2193843, color: 'africa',
  // },
  // {
  //   code: 'LR', name: 'Liberia', value: 4128572, color: 'africa',
  // },
  // {
  //   code: 'LY', name: 'Libya', value: 6422772, color: 'africa',
  // },
  // {
  //   code: 'LT', name: 'Lithuania', value: 3307481, color: 'europe',
  // },
  // {
  //   code: 'LU', name: 'Luxembourg', value: 515941, color: 'europe',
  // },
  // {
  //   code: 'MK', name: 'Macedonia, FYR', value: 2063893, color: 'europe',
  // },
  // {
  //   code: 'MG', name: 'Madagascar', value: 21315135, color: 'africa',
  // },
  // {
  //   code: 'MW', name: 'Malawi', value: 15380888, color: 'africa',
  // },
  // {
  //   code: 'MY', name: 'Malaysia', value: 28859154, color: 'asia',
  // },
  // {
  //   code: 'ML', name: 'Mali', value: 15839538, color: 'africa',
  // },
  // {
  //   code: 'MR', name: 'Mauritania', value: 3541540, color: 'africa',
  // },
  // {
  //   code: 'MU', name: 'Mauritius', value: 1306593, color: 'africa',
  // },
  // {
  //   code: 'MX', name: 'Mexico', value: 114793341, color: 'northAmerica',
  // },
  // {
  //   code: 'MD', name: 'Moldova', value: 3544864, color: 'europe',
  // },
  // {
  //   code: 'MN', name: 'Mongolia', value: 2800114, color: 'asia',
  // },
  // {
  //   code: 'ME', name: 'Montenegro', value: 632261, color: 'europe',
  // },
  // {
  //   code: 'MA', name: 'Morocco', value: 32272974, color: 'africa',
  // },
  // {
  //   code: 'MZ', name: 'Mozambique', value: 23929708, color: 'africa',
  // },
  // {
  //   code: 'MM', name: 'Myanmar', value: 48336763, color: 'asia',
  // },
  // {
  //   code: 'NA', name: 'Namibia', value: 2324004, color: 'africa',
  // },
  // {
  //   code: 'NP', name: 'Nepal', value: 30485798, color: 'asia',
  // },
  // {
  //   code: 'NL', name: 'Netherlands', value: 16664746, color: 'europe',
  // },
  // {
  //   code: 'NZ', name: 'New Zealand', value: 4414509, color: 'oceania',
  // },
  // {
  //   code: 'NI', name: 'Nicaragua', value: 5869859, color: 'northAmerica',
  // },
  // {
  //   code: 'NE', name: 'Niger', value: 16068994, color: 'africa',
  // },
  // {
  //   code: 'NG', name: 'Nigeria', value: 162470737, color: 'africa',
  // },
  // {
  //   code: 'NO', name: 'Norway', value: 4924848, color: 'europe',
  // },
  // {
  //   code: 'OM', name: 'Oman', value: 2846145, color: 'asia',
  // },
  // {
  //   code: 'PK', name: 'Pakistan', value: 176745364, color: 'asia',
  // },
  // {
  //   code: 'PA', name: 'Panama', value: 3571185, color: 'northAmerica',
  // },
  // {
  //   code: 'PG', name: 'Papua New Guinea', value: 7013829, color: 'oceania',
  // },
  // {
  //   code: 'PY', name: 'Paraguay', value: 6568290, color: 'southAmerica',
  // },
  // {
  //   code: 'PE', name: 'Peru', value: 29399817, color: 'southAmerica',
  // },
  // {
  //   code: 'PH', name: 'Philippines', value: 94852030, color: 'asia',
  // },
  // {
  //   code: 'PL', name: 'Poland', value: 38298949, color: 'europe',
  // },
  // {
  //   code: 'PT', name: 'Portugal', value: 10689663, color: 'europe',
  // },
  // {
  //   code: 'PR', name: 'Puerto Rico', value: 3745526, color: 'northAmerica',
  // },
  // {
  //   code: 'QA', name: 'Qatar', value: 1870041, color: 'asia',
  // },
  // {
  //   code: 'RO', name: 'Romania', value: 21436495, color: 'europe',
  // },
  // {
  //   code: 'RU', name: 'Russia', value: 142835555, color: 'europe',
  // },
  // {
  //   code: 'RW', name: 'Rwanda', value: 10942950, color: 'africa',
  // },
  // {
  //   code: 'SA', name: 'Saudi Arabia', value: 28082541, color: 'asia',
  // },
  // {
  //   code: 'SN', name: 'Senegal', value: 12767556, color: 'africa',
  // },
  // {
  //   code: 'RS', name: 'Serbia', value: 9853969, color: 'europe',
  // },
  // {
  //   code: 'SL', name: 'Sierra Leone', value: 5997486, color: 'africa',
  // },
  // {
  //   code: 'SG', name: 'Singapore', value: 5187933, color: 'asia',
  // },
  // {
  //   code: 'SK', name: 'Slovak Republic', value: 5471502, color: 'europe',
  // },
  // {
  //   code: 'SI', name: 'Slovenia', value: 2035012, color: 'europe',
  // },
  // {
  //   code: 'SB', name: 'Solomon Islands', value: 552267, color: 'oceania',
  // },
  // {
  //   code: 'SO', name: 'Somalia', value: 9556873, color: 'africa',
  // },
  // {
  //   code: 'ZA', name: 'South Africa', value: 50459978, color: 'africa',
  // },
  // {
  //   code: 'ES', name: 'Spain', value: 46454895, color: 'europe',
  // },
  // {
  //   code: 'LK', name: 'Sri Lanka', value: 21045394, color: 'asia',
  // },
  // {
  //   code: 'SD', name: 'Sudan', value: 34735288, color: 'africa',
  // },
  // {
  //   code: 'SR', name: 'Suriname', value: 529419, color: 'southAmerica',
  // },
  // {
  //   code: 'SZ', name: 'Swaziland', value: 1203330, color: 'africa',
  // },
  // {
  //   code: 'SE', name: 'Sweden', value: 9440747, color: 'europe',
  // },
  // {
  //   code: 'CH', name: 'Switzerland', value: 7701690, color: 'europe',
  // },
  // {
  //   code: 'SY', name: 'Syria', value: 20766037, color: 'asia',
  // },
  // {
  //   code: 'TW', name: 'Taiwan', value: 23072000, color: 'asia',
  // },
  // {
  //   code: 'TJ', name: 'Tajikistan', value: 6976958, color: 'asia',
  // },
  // {
  //   code: 'TZ', name: 'Tanzania', value: 46218486, color: 'africa',
  // },
  // {
  //   code: 'TH', name: 'Thailand', value: 69518555, color: 'asia',
  // },
  // {
  //   code: 'TG', name: 'Togo', value: 6154813, color: 'africa',
  // },
  // {
  //   code: 'TT', name: 'Trinidad and Tobago', value: 1346350, color: 'northAmerica',
  // },
  // {
  //   code: 'TN', name: 'Tunisia', value: 10594057, color: 'africa',
  // },
  // {
  //   code: 'TR', name: 'Turkey', value: 73639596, color: 'europe',
  // },
  // {
  //   code: 'TM', name: 'Turkmenistan', value: 5105301, color: 'asia',
  // },
  // {
  //   code: 'UG', name: 'Uganda', value: 34509205, color: 'africa',
  // },
  // {
  //   code: 'UA', name: 'Ukraine', value: 45190180, color: 'europe',
  // },
  // {
  //   code: 'AE', name: 'United Arab Emirates', value: 7890924, color: 'asia',
  // },
  // {
  //   code: 'GB', name: 'United Kingdom', value: 62417431, color: 'europe',
  // },
  // {
  //   code: 'US', name: 'United States', value: 313085380, color: 'northAmerica',
  // },
  // {
  //   code: 'UY', name: 'Uruguay', value: 3380008, color: 'southAmerica',
  // },
  // {
  //   code: 'UZ', name: 'Uzbekistan', value: 27760267, color: 'asia',
  // },
  // {
  //   code: 'VE', name: 'Venezuela', value: 29436891, color: 'southAmerica',
  // },
  // {
  //   code: 'PS', name: 'West Bank and Gaza', value: 4152369, color: 'asia',
  // },
  // {
  //   code: 'VN', name: 'Vietnam', value: 88791996, color: 'asia',
  // },
  // {
  //   code: 'YE', name: 'Yemen, Rep.', value: 24799880, color: 'asia',
  // },
  // {
  //   code: 'ZM', name: 'Zambia', value: 13474959, color: 'africa',
  // },
  // {
  //   code: 'ZW', name: 'Zimbabwe', value: 12754378, color: 'africa',
  // },
];

export default mapData;
