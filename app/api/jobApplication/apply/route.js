import { connectToDB } from "@utils/database";
import JobApplication from "@models/jobApplication";

export const POST = async (req) => {

    const { userId, jobId } = await req.json();

    try {
      await connectToDB();
      const newJobApplication = new JobApplication({
        
        creator: userId,
        job: jobId,
       
      });

      await newJobApplication.save();

      return new Response(JSON.stringify(newJobApplication), { status: 201 })
    } catch (error) {
      console.error("Failed to apply:", error);
      return new Response("Failed to Apply", { status: 500 });
    }
};

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const jobId = params.id; // Assuming you are passing the job ID as a parameter in the URL
    const jobApplications = await JobApplication.find({ job: jobId });


    return new Response(JSON.stringify(jobApplications), {
      status: 200,
    });

  } catch (error) {
    console.error("Failed to fetch job applications:", error);
    return new Response("Failed to fetch job applications", { status: 500 });
  }
};



