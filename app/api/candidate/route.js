import { connectToDB } from "@utils/database";
import Candidate from "@models/candidate";

export const POST = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    bio,
    phoneNumber,
    address,
    dob,
    gender,
    experiences,
    qualifications,
    creator,
  } = await req.json();

  const candidateExists = await Candidate.findOne({ email });

  if (candidateExists) {
    return new Response(JSON.stringify(Candidate), { status: 201 })
  }

  try {
    await connectToDB();
    const newCandidate = new Candidate({
      firstName,
      lastName,
      email,
      bio,
      phoneNumber,
      address,
      dob,
      gender,
      experiences,
      qualifications,
      creator,
    });

    await newCandidate.save();

    return new Response(JSON.stringify(newCandidate), { status: 201 })
  } catch (error) {
    console.error("Failed to create candidate:", error);
    return new Response("Failed to Created", { status: 500 });
  }
};
