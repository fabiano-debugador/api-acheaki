import { Request, Response } from "express";
import { UpdateProfileUseCase } from "./UpdateProfileUseCase";

export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      slogan,
      description,
      titleSlug,
      imageProfile,
      banner,
      tag,
      follower,
      point,
      vote,
    } = request.body;

    try {
      await this.updateProfileUseCase.execute({
        id,
        name,
        slogan,
        description,
        titleSlug,
        imageProfile,
        banner,
        tag,
        follower,
        point,
        vote,
      });

      return response.status(200).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
