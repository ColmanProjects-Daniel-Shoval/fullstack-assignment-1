import initApp from "./server";
const port = process.env.PORT;

initApp().then((app) => {
    app.listen(port, () => {
        console.log(`Example app listening and running on http://localhost:${port}`);
    });
});
