import { Request, Response, NextFunction } from "express";

import userPsychologistModel from "../../models/userPsychologist";
import userPsychologist from "../../models/userPsychologist";


const getUserPsychologistOne = async (req: Request, res: Response) => {
  try {
    const { IdUserPsychologist } = req.params;
    const psychologistUser = await userPsychologistModel.findById(IdUserPsychologist);
    res.status(200).json(psychologistUser)
  } catch (err) {
    res.status(404).json({ data: err })
  }
}

const getUserPsychologist = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.query;
    
    if (name) {
      userPsychologist.find({
        $or: [{ firstName: { $regex: name, $options: 'i' } },
        { lastName: { $regex: name, $options: 'i' } }]
      })
        .then((psychologist) => {
          res.status(200).json(psychologist)
        })
      .catch((error:any) => next(error))
    } else {
      const userPsychologist = await userPsychologistModel.find();
      res.status(200).json(userPsychologist)
    }

  } catch (err) {
    res.status(404).json({ data: err })
  }
}
////Post/////

const postUserPsychologist = async (req: Request, res: Response) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      birthdate,
      country,
      license,
      dni,
      specialties,
      profileimage,
      rating,
      education,
      about
    } = req.body;
    const userP = await userPsychologistModel.create({
      firstName: firstname,
      lastName: lastname,
      email,
      password,
      birthDate: birthdate,
      country,
      License: license,
      DNI: dni,
      Specialties: specialties,
      profileImage: profileimage,
      rating,
      appointments: [],
      about,
      education,
    });
    res.status(201).send(userP);
  } catch (error) {
    res.status(404).send(error);
  }
};
///// Delete /////

const deleteUserPsychologist = async (req: Request, res: Response) => {
  const { idPsychologist } = req.params;
  try {
    await userPsychologistModel.findOneAndDelete({ idPsychologist });
    res.send("User deleted succesfully");
  } catch (error) {
    res.status(404).send(error);
  }
};


const putUserPsychologist = async (req: Request, res: Response) => {
  const { IdUserPsychologist } = req.params;
  console.log(IdUserPsychologist)
  try {
    await userPsychologistModel.findByIdAndUpdate(IdUserPsychologist, req.body, { new: true })
    res.status(200).send('Usuario editado correctamente')
  } catch (error) {
    res.status(404).send(error);
  }
}



module.exports = {
  getUserPsychologistOne,
  getUserPsychologist,
  postUserPsychologist,
  deleteUserPsychologist,
  putUserPsychologist,
}
