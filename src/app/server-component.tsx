import { client } from "@/server/client";

export const ServerComponent = async () => {
  const res = await client.time.$get();
  const { message } = await res.json();

  return (
    <>
      <div className="text-2xl tabular-nums">S: {message}</div>
    </>
  );
};
