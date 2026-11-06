import { app } from "./app.js";
import { env } from "./config/environment.js";

app.listen(env.PORT, () => {
  console.log(`NOVA OMNIVERSE AI listening on port ${env.PORT}`);
});
