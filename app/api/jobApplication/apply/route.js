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





