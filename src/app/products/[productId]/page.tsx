export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  console.log(await params);
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
