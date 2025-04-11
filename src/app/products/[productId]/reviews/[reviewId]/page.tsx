import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;

  if (parseInt(reviewId) > 1000) {
    console.log("here");
    notFound();
  }

  return (
    <>
      <h2>Product Id</h2>
      <p>{productId}</p>
      <h2>Review Id</h2>
      <p>{reviewId}</p>
    </>
  );
}
