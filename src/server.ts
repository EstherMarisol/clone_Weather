
import app from "./app";
import { MY_ENV } from "./myUtils/myConst";

app.listen(MY_ENV.PORT, () => {
  console.log(`server started at ${MY_ENV.PORT}`);
});

