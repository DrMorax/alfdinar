import { Spinner } from "@/assets/icons/spinner";

export default function Loading() {
  return (
    <div
      className="align-center flex justify-center"
      style={{ marginTop: "4rem" }}
    >
      <Spinner w="32px" h="32px" />
    </div>
  );
}
