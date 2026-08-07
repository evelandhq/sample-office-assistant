import { eveChannel } from "eve/channels/eve";
import { localDev, placeholderAuth } from "eve/channels/auth";
import { evelandIdentity } from "eveland/auth";

export default eveChannel({
  auth: [
    // Lets Eveland-authenticated callers reach the deployed agent.
    evelandIdentity(),
    // Open on localhost for `eve dev` and the REPL; ignored in production.
    localDev(),
    // This placeholder will not allow browser requests in production.
    // Replace it with your app's auth provider, like Auth.js or Clerk,
    // or use none() for a public demo.
    placeholderAuth(),
  ],
});
