import { ORIGIN } from '../config.js';
export const wikipediaResource = async (params) => {
    const URL = `${ORIGIN}${params}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
