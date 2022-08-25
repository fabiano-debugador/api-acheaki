"use strict";
// import { Request, Response } from "express";
// import { CreateProfileUseCase } from "./CreateProfileUseCase";
// export class CreateProfileController {
//   constructor(private createProfileUseCase: CreateProfileUseCase) {}
//   async handle(request: Request, response: Response): Promise<Response> {
//     const {
//       idLogin,
//       name,
//       slogan,
//       description,
//       titleSlug,
//       imageProfile,
//       banner,
//       tag,
//       follower,
//       point,
//       vote,
//     } = request.body;
//     const data = {
//       idLogin,
//       name,
//       slogan,
//       description,
//       titleSlug,
//       imageProfile,
//       banner,
//       tag,
//       follower,
//       point,
//       vote,
//     };
//     try {
//       await this.createProfileUseCase.execute(data);
//       return response.status(201).send();
//     } catch (error: any) {
//       return response.status(400).json({
//         message: error.message || "Unexpedted error.",
//       });
//     }
//   }
// }
