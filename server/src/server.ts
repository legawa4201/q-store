import app from "./index";
import { connect } from "./config/dataSource";

const PORT: string = process.env.PORT || `3000`;

connect()
.then((_) => {
    console.log(`Connected to database...`)
    app.listen(+PORT, () => console.log(`Server is listening on port ${PORT}`));
})
.catch((err) => {
    console.error(err);
})