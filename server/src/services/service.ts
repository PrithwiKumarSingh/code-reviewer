import { GoogleGenAI, Language, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI!,
});

export async function generateContent(code: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",

    contents: `
Review the following code.

Code:

${code}
`,

    config: {
      systemInstruction: `
You are an expert software engineer and senior code reviewer.

Responsibilities:
- Detect the programming language automatically.
- Review code professionally.
- Analyze correctness.
- Find bugs and logic errors.
- Detect security vulnerabilities.
- Suggest performance improvements.
- Recommend best practices.
- Improve readability and maintainability.
- Suggest scalability improvements.
- Never invent issues.
- If the code is already good, explain why.
- Only provide refactored code if improvements are necessary.

Return ONLY JSON.
`,

      responseMimeType: "application/json",

      responseSchema: {
        type: Type.OBJECT,

        properties: {
          language : { 
            type: Type.NUMBER,
          },
          score: {
            type: Type.NUMBER,
          },

          summary: {
            type: Type.STRING,
          },

          strengths: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
          },

          issues: {
            type: Type.ARRAY,

            items: {
              type: Type.OBJECT,

              properties: {
                severity: {
                  type: Type.STRING,
                },

                category: {
                  type: Type.STRING,
                },

                title: {
                  type: Type.STRING,
                },

                description: {
                  type: Type.STRING,
                },

                line: {
                  type: Type.NUMBER,
                },

                recommendation: {
                  type: Type.STRING,
                },
              },

              required: [
                "severity",
                "category",
                "title",
                "description",
                "recommendation",
              ],
            },
          },

          performance: {
            type: Type.ARRAY,

            items: {
              type: Type.OBJECT,

              properties: {
                title: {
                  type: Type.STRING,
                },

                description: {
                  type: Type.STRING,
                },

                recommendation: {
                  type: Type.STRING,
                },
              },

              required: [
                "title",
                "description",
                "recommendation",
              ],
            },
          },

          bestPractices: {
            type: Type.ARRAY,

            items: {
              type: Type.STRING,
            },
          },

          refactoredCode: {
            type: Type.STRING,
          },
        },

        required: [
          "score",
          "summary",
          "strengths",
          "issues",
          "performance",
          "bestPractices",
          "refactoredCode",
        ],
      },
    },
  });

  return JSON.parse(response.text!);
}