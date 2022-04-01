import dotenv from 'dotenv';

dotenv.config();

const config = {
	API_KEY: process.env.API_KEY,
}

export const {
	API_KEY,
	
} = config;
