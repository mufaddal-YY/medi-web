import JobApplication from "@models/jobApplication";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {

    await connectToDB();
    const jobApplications = await JobApplication.find();

    return new Response(JSON.stringify(jobApplications), {
      status: 200,
    });

  } catch (error) {
    return new Response("Failed to fetch details", { status: 500 });
  }
};

