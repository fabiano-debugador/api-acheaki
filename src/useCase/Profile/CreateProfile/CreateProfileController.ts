import { Request, Response } from "express";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

export class CreateProfileController {
  constructor (
    private createProfileUseCase: CreateProfileUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // let obj = {name:'', age: ''};
    function empetyObject(obj: any) {
      for (var prop in obj) {
        if (obj[prop] === '') return false;
      }
      return true;
    }

    const {
      idLogin,
      name,
      slogan,
      description,
      titleSlug,
      imageProfile,
      banner,
      tag,
      follower,
      point,
      vote
    } = request.body;

    try {
      if (empetyObject({
        idLogin,
        name,
        slogan,
        description,
        titleSlug,
        imageProfile,
        banner,
        tag,
        follower,
        point,
        vote
      })) {
        await this.createProfileUseCase.execute({
          idLogin,
          name,
          slogan,
          description,
          titleSlug,
          imageProfile,
          banner,
          tag,
          follower,
          point,
          vote
        })

        return response.status(201).send();

      }
      return response.status(400).json({
        message: 'Some field is empty.'
      })
    } catch (error) {
      return response.status(400).json({
        message: error || 'Unexpedted error.'
      })
    }
  }
}
