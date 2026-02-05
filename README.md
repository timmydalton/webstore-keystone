# @webstore/keystone

A library providing country data with phone validation patterns, postal code formats, and currency information.

## Installation

```bash
npm install @webstore/keystone
```

## Usage

```javascript
import { countries_data } from '@webstore/keystone';

// Access all country data
console.log(countries_data);

// Find a specific country
const vietnam = countries_data.find(country => country.country === 'Vietnam');
console.log(vietnam);
// Output: { country: "Vietnam", code: "84", currency: "VND", validate: "...", postalFormat: "..." }
```

## Data Structure

Each country object contains:

- `country`: Country name
- `code`: Country calling code  
- `currency`: Currency code
- `validate`: Regex pattern for phone validation
- `postalFormat`: Regex pattern for postal code validation

## Supported Countries

Vietnam, Philippines, Cambodia, Laos, Indonesia, Taiwan, Thailand, Malaysia, India, Myanmar, Bangladesh, UAE, USA, Colombia, Ecuador, Saudi Arabia, Qatar, Singapore, Peru, Chile, Brazil, Nepal, South Korea, Japan, Hong Kong, Nigeria, Afghanistan, Kuwait, Oman, Bahrain, Mongolia, Spain, Mexico, Argentina, Venezuela, Costa Rica, Bolivia, Paraguay, Dominican Republic, Honduras, Australia, New Zealand, Canada, China, Panama, Guatemala, Jamaica, United Kingdom

## License

MIT
