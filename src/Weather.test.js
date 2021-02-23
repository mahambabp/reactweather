test("fetch is working", async () => {
  const name = "Johannesburg";
  const country = "ZA";
  const api_key = process.env.REACT_APP_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&units=metric&appid=${api_key}`
  );
  const data = await res.json();

  expect(data.sys.country).toBe(country);
  // Expect the coutnry information coming from API
  // matches the country we have as a variable (country)
});
