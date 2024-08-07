import { Suspense } from "react";
import { headers } from "next/headers";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <IP />
    </Suspense>
  );
}
