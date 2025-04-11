export default async function Docs({
  params,
}: {
  params: Promise<{ segment: string[] }>;
}) {
  console.log(await params);
  return <h1>Docs home page</h1>;
}
