import React from "react";
import useFetch from ".";

function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h1>Use fetch hook</h1>
      {pending ? <h3>Pending! Please wait!</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}

export default UseFetchHookTest;
