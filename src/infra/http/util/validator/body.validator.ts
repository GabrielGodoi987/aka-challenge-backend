import { FastifyRequest, FastifyReply } from 'fastify'
import { ZodSchema } from 'zod'

export function validateBody<T extends ZodSchema<any>>(schema: T) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    const result = schema.safeParse(request.body)
    if (!result.success) {
      return reply.status(400).send({
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      })
    }
    request.body = result.data
  }
}