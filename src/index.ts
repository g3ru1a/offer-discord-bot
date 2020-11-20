import { Client, Collection } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

import Commands, { Command } from './utils/Commands';

const client: Client = new Client();
const commands: Collection<string, Command> = Commands();

client.on("ready", () => {

});

client.on("message", (message) => {

});

client.on("guildCreate", (guild) => {

});

client.on("guildDelete", (guild) => {
    
});

client.login(process.env.TOKEN);