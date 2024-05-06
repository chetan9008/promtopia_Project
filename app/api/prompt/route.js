// import Prompt from "@models/prompt";
// import { connectToDB } from "./../../../utils/datatbase";

// export const GET = async (request) => {
//   try {
//     await connectToDB();

//     const prompts = await Prompt.find({}).populate("creator");

//     return new Response(JSON.stringify(prompts), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch all prompts", { status: 500 });
//   }
// };
import Prompt from "@models/prompt";
import { connectToDB } from "./../../../utils/datatbase";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    if (!prompts) {
      throw new Error("No prompts found");
    }

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch all prompts:", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
