import React from "react";

import Layout from "../../components/layout";

import Cart from "../../components/cart";
export default function ViewCartPage() {
  return (
    <Layout title="My cart">
      <Cart stripeToken="pk_test_OgzotKwKUj8WfKkHkvcnoDGd000koYKsrd" />,
    </Layout>
  );
}
