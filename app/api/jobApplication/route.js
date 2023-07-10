import { connectToDB } from "@utils/database";
import JobApplication from "@models/jobApplication";

export const GET = async (request, { params }) => {
    try {
      await connectToDB();
      const jobApplications = await JobApplication.find();
  
  
      return new Response(JSON.stringify(jobApplications), {
        status: 200,
      });
  
    } catch (error) {
      console.error("Failed to fetch job applications:", error);
      return new Response("Failed to fetch job applications", { status: 500 });
    }
  };