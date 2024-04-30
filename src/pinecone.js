import { Pinecone } from "@pinecone-database/pinecone";

const pinecone= new Pinecone({apiKey:'ce68792c-9c25-466b-998d-acbd26b2b015'})

console.log('pinecone initialized')

export default pinecone