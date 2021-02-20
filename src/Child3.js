import { memo } from "react";

export default memo(function Child() {
  console.log("did render child3?");
  return (
    <div>
      <h1>"Child 3"</h1>
    </div>
  );
});
