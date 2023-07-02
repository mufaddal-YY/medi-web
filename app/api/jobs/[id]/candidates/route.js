import JobApplication from "@models/jobApplication";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {

    await connectToDB();
    const jobs = await JobApplication.find({creator: params.id}).populate('creator');

    return new Response(JSON.stringify(jobs), {
      status: 200,
    });

  } catch (error) {
    return new Response("Failed to fetch details", { status: 500 });
  }
};

