const index = require('./index');
const app = index.app;
const port = 3004;

app.listen(port, () => console.log(`Server listening on port ${port}`));