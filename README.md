# CSR and Key Generator
This package provides a simple and straightforward way to generate Certificate Signing Requests (CSRs) and keys using HTTP SSL service so you don't need OpenSSL installed. It utilizes the `csrgenerator.com` service to facilitate the generation process.

## Installation

```bash
npm install csr-key-generator
```

## Usage
To use this package, import the generateCSRAndKey function and call it with optional parameters:

```javascript
import { generateCSRAndKey } from 'csr-key-generator';

// Example usage:
generateCSRAndKey('HU', 'happygastro.org', '', 'Software development', 'Happy Gastro Kft.', 'Pest megye', 'Hungary', '')
    .then((result) => {
        console.log('Generated CSR:', result.certificateRequest);
        console.log('Generated Key:', result.privateKey);
    })
    .catch((error) => {
        console.error('Error generating CSR and key:', error);
    });
```

## API Documentation
```javascript
generateCSRAndKey(C: string, CN: string, subject: string, OU: string, O: string, L: string, ST: string, SC: string): Promise<object>
```
\
***Here are the fields you can fill with your own parameters:***

\
C: The Country field of CSR.\
CN: The Common name field of CSR.\
subject: (Optional) Subject Alt names.\
OU: Organizational Unit field of CSR.\
O: Organization field of CSR.\
L: Locality field of CSR.\
ST: State field of CSR.\
SC: SC field of CSR.


##### Returns a Promise that resolves with an object containing the generated CSR (certificateRequest), key (privateKey), and the full string response (string) from the generation service.

## Example
```javascript
import { generateCSRAndKey } from 'csr-key-generator';

// Example usage:
generateCSRAndKey('HU', 'happygastro.org', '', 'Software development', 'Happy Gastro Kft.', 'Pest megye', 'Hungary', '')
    .then((result) => {
        console.log('Generated CSR:', result.certificateRequest);
        console.log('Generated Key:', result.privateKey);
    })
    .catch((error) => {
        console.error('Error generating CSR and key:', error);
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Author

This project is developed and maintained by Farkas Ferenc.

- **Name**: Farkas Ferenc
- **Email**: [ferenc.farkas@happygastro.hu](mailto:ferenc.farkas@happygastro.hu)
- **Website**: [www.happygastro.org](http://www.happygastro.org)

## Company

Happy Gastro Ltd.

## License
[MIT](https://choosealicense.com/licenses/mit/)
