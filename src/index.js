import https from "https";
import querystring from "querystring";

/**
 * Generates a CSR (Certificate Signing Request) and key using OpenSSL command.
 * @param {string} subject - Subject Alt names
 * @param {string} C - The Country field of CSR.
 * @param {string} CN - The Common name field of CSR.
 * @param {string} OU - Organizational Unit field of CSR
 * @param {string} O - Organization field of CSR
 * @param {string} L - Locality field of CSR
 * @param {string} ST - State field of CSR
 * @param {string} SC - SC field of CSR
 * @returns {Promise<object>} - A Promise that resolves with an object containing the generated CSR, key, and full string.
 */
export const generateCSRAndKey = (C = "HU", CN = "happygastro.org", subject = "", OU = "Software development", O = "Happy Gastro Kft.", L = "Pest megye", ST = "Hungary", SC = "") => {
    return new Promise((resolve, reject) => {
        const formData = querystring.stringify({
            keySize: 4096,
            C: C,
            CN: CN,
            subjectAltNames: subject,
            OU: OU,
            O: O,
            L: L,
            ST: ST,
            SC: SC,
            // Add more key-value pairs as needed
        });

        const options = {
            hostname: 'csrgenerator.com',
            port: 443, // HTTPS port
            path: '/generate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': formData.length
            }
        };
        let data = "";
        const req = https.request(options, (res) => {
            res.on('data', (chunk) => {
                data += chunk.toString()
            });
            res.on('end', () => {
                const csr = getStringBetween(data, "-----BEGIN CERTIFICATE REQUEST-----", "-----END CERTIFICATE REQUEST-----")
                const key = getStringBetween(data, "-----BEGIN PRIVATE KEY-----", "-----END PRIVATE KEY-----")

                return resolve({
                    string: data,
                    certificateRequest: csr,
                    privateKey: key,
                })
            });
        });
        req.write(formData);
        req.end();
    });
};
