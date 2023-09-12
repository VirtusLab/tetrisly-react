export const warnInDevelopment: typeof console.warn = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(...args);
  }
};
