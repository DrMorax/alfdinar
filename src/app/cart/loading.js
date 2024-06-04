import { Spinner } from "@/assets/icons/spinner";

export default function Loading() {
  return (
    <div
      className="flex justify-center align-center"
      style={{ marginTop: "4rem" }}
    >
      <Spinner w="10vh" h="10vh" />
    </div>
  );
}
