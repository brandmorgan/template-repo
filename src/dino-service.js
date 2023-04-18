
export default class Dinoservice {
  static getDino() {

    return fetch(`https://dinoipsum.com/api/?format=html&paragraphs=1&words=1`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.text();
        }
      })
      .catch(function (error) {
        return error;
      });
    // console.log(response);
  }
}
