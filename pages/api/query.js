import pinecone from "@/src/pinecone";
import {getCompletion, getEmbeddings} from "@/src/openaiServices";
import {connectDB} from "@/src/db";
import MyFileModel from "@/src/models/MyFile";

export default async function handler(req, res) {

	// 1. check for POST call

	const {query, id} = req.body

	// 2. connect to mongodb
	await connectDB()

	// 3. query the file by id
	const myFile = await MyFileModel.findById(id)
	console.log("line 17")

	if(!myFile) {
		return res.status(400).send({message: 'invalid file id'})
	}

	// 4. get embeddings for the query
	const questionEmb = await getEmbeddings(query)
	console.log("line 25")

	// 5. initialize pinecone
	// await initialize()

	// 6. connect to index
	const index = pinecone.Index(myFile.vectorIndex)
	console.log("line 32 n")

	// 7. query the pinecone db
	// const queryRequest = {
	// 	vector: questionEmb,
	// 	topK: 5,
	// 	includeValues: true,
	// 	includeMetadata: true,
	// };
	// console.log("line 41")

	let result = await index.query({
		vector:questionEmb,
		topK:5,
		includeMetadata:true,
		includeValues:true
	})
	console.log("line 44")

	// 8. get the metadata from the results
	let contexts = result['matches'].map(item => item['metadata'].text)

	contexts = contexts.join("\n\n---\n\n")

	console.log('--contexts--', contexts)

	// 9. build the prompt
	const promptStart = `Answer the question based on the context below:\n\n`
	const promptEnd = `\n\nQuestion: ${query} \n\nAnswer:`

	const prompt = `${promptStart} ${contexts} ${promptEnd}`

	console.log('--prompt--', prompt)

	// 10. get the completion from openai
	let response = await getCompletion(prompt)

	console.log('--completion--', response)

	// 11. return the response
	res.status(200).json({response})
}
