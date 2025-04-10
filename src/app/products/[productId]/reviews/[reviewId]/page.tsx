export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;

  return (
    <>
      <h2>Product Id</h2>
      <p>{productId}</p>
      <h2>Review Id</h2>
      <p>{reviewId}</p>
    </>
  );
}
