const info = (...params) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...params);
  }
};

const error = (...params) => {
  if (process.env.NODE_ENV === "development") {
    console.error(...params);
  }
};

export default { info, error };
