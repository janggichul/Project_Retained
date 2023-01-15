export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "장기철" }), 2000);
  });
};
