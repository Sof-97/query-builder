import openaiClient from './api.js'

const generate = async(query, davinci=false) => {

    const daVinciText = async(query) => {
        const response = await openaiClient.createCompletion({
            model: "text-davinci-003",
            prompt: `Convert the following natural language description into a SQL query:\n\n${query}.`,
            max_tokens: 60,
            temperature: 0.2,
        })
        return response.data.choices[0].text
    }

    const gpt3Api = async(query) => {
        const messages = [
            {
                role: "system",
                content: `You are a translator translating a natural language description into a SQL query, you respond only with the query.` 
            },
            {
                role: "user",
                content: `Convert the following natural language description into a SQL query: \n\nshow all element from the table users.`
            },
            {
                role: "assistant",
                content: `SELECT * FROM users;`
            },
            {
                role: "user",
                content: `Convert the following natural language description into a SQL query: \n\n${query}.`
            }
        ]

        const response = await openaiClient.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
            max_tokens: 60,
        })

        return response.data.choices[0].message.content
    }

    return  await  davinci ? daVinciText(query) : gpt3Api(query)
}

export default generate