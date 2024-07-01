import { sleep } from "@/modules/shared/util/sleep";
import {
  ProfileFormSchema,
  ProfilePasswordSchema,
} from "../zod-schemas/profile-schemas";
import axios from "@/modules/shared/components/axios";

export async function updateProfile(data: ProfileFormSchema) {
  await sleep(300);

  //   await axios.put("/v1/profile", data);
}

export async function updatePassword(data: ProfilePasswordSchema) {
  await sleep(300);

  // await axios.put("/v1/profile/password", data);
}
