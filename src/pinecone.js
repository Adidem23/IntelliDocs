import { Pinecone } from "@pinecone-database/pinecone";

const pinecone= new Pinecone({apiKey:''})

console.log('pinecone initialized')

export default pinecone
