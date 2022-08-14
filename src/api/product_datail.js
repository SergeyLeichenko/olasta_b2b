export default function (instance) {
  return {
    get(slug) {
      return instance.get(`product/${slug}/`);
    },
  };
}
