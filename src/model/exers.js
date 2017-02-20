export default {
  list: () => {
    return window.fetch('http://www.extrategy.net/it/services/exer')
    .then(res => res.json());
  }
};
