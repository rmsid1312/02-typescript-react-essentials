import { z } from "zod";
import axios from "axios";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // something: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;
