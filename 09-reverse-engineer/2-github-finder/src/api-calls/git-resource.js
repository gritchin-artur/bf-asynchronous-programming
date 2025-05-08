import { ORIGIN } from '../config.js';
export const gitResource = async (userName) => {
    const URL = `${ORIGIN}${userName}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
