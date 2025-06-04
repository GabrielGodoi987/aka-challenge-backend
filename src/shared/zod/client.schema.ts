import { z } from 'zod'
import { CreateClient } from '../../domain/interfaces/client/client.interface'

export const createClientSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export type CreateClientInput = z.infer<typeof createClientSchema>
