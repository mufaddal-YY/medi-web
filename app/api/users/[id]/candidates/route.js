import Candidate from "@models/candidate";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {

    await connectToDB();
    const candidates = await Candidate.find({creator: params.id}).populate('creator');

    return new Response(JSON.stringify(candidates), {
      status: 200,
    });

  } catch (error) {
    return new Response("Failed to fetch details", { status: 500 });
  }
};

