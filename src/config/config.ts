import dotenv from 'dotenv';

dotenv.config();

export const config: IConfig = {
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/matala1',
    PORT: parseInt(process.env.PORT || '5000'),
}
interface IConfig {
    DATABASE_URL: string;
    PORT: number 
}