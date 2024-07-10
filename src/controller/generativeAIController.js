const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBBM3pVpjmu1P5OKhEfc3fQUztgtDc2X6A");
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log("🚀 ~ genAI:", genAI);

// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

const doGetResponse = async (req, res) => {
  try {
    const { prompt } = req.query;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const prompt = "Write a story about a magic backpack.";
    const result = await model.generateContent(prompt);
    const aiResponse = await result.response;
    const text = aiResponse.text();
    console.log("data", text);

    const response = {
      success: true,
      message: "Response send successsfully",
      data: {
        senderId: "01",
        text,
      },
    };
    res.status(200).json(response);
  } catch (e) {
    const response = {
      success: false,
      error: e.message,
      message: "Error in sending response",
    };
    res.status(500).json(response);
  }
};

module.exports = { doGetResponse };
