import app from "./application";

const port = process.env.PORT || 7000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
