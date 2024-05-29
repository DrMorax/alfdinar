import { getProfile } from "@/lib/actions";

export const Profile = async (props: { id: string }) => {
  const user = (await getProfile(props.id)) as any;
  return <h1>{user}</h1>;
};
