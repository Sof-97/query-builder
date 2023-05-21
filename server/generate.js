import openaiClient from './api.js'

const generate = async(query) => {
    const response = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into a SQL query:\n\n${query}.`,
        max_tokens: 60,
        temperature: 0.2,
    })
    return response.data.choices[0].text
}

export default generate