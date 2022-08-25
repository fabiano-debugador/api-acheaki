// import { Profile } from "../../../entities/Profile";
// import { IProfileSaveRepository } from "../../../repositories/IProfileRepository";
// import { ICreateProfileRequestDTO } from "../../Profile/CreateProfile/CreateProfile.DTO";

// export class CreateProfileUseCase {
//   constructor(private profileRepository: IProfileSaveRepository) {}

//   async execute(data: ICreateProfileRequestDTO) {
//     const profileAlreadyExists = await this.profileRepository.findByIdLogin(
//       data.idLogin
//     );

//     if (profileAlreadyExists) {
//       throw new Error("Profile already exists.");
//     }

//     const profile = new Profile(data);

//     await this.profileRepository.save(profile);
//   }
// }
