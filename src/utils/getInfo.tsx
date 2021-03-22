export const GetJoke = async () => {
  let joke: any;
  await fetch("https://icanhazdadjoke.com/slack")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      joke = data.attachments[0].text as string;
    });
  return joke;
};
