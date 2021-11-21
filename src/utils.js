export const randomId = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
}

