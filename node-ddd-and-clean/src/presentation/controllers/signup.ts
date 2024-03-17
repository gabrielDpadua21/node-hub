import { InvalidParamError, MissinParamError } from '../errors'
import { badRequest, sucess, serverError } from '../helpers/http-helper'
import { Controller, EmailValidator, Request, Response } from '../protocols'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  async handle (request: Request): Promise<Response> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!request.body[field]) return badRequest(new MissinParamError(field))
      }
      if (!this.emailValidator.isValid(request.body.email)) return badRequest(new InvalidParamError('email'))
      return sucess({})
    } catch (error) {
      return serverError()
    }
  }
}
