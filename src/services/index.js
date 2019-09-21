const request = {
  baseURL: `https://${process.env.VUE_APP_BASE_API}/api/v1/places/`,
  // eslint-disable-next-line consistent-return
  async get(endPoint) {
    try {
      const response = await fetch(this.baseURL + endPoint, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      if (error.status === '404') {
        return { error: 'Заведение не найдено' };
      }
      return { error: 'Ошибка при получении информации' };
    }
  },
};

export default request;
