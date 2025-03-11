export default async function ProductDetail({ params }) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
