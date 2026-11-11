import fs from 'fs';
import path from 'path';
import {join } from 'path';
export default {
    read: (filename) => {
    const data = fs.readFileSync(path.join(process.cwd(), 'src', 'db', filename + '.json'), 'utf8');
    return JSON.parse(data);
    },
    write:(filename, data )=>{
        fs.writeFileSync(join(process.cwd(), "src", "db", `${filename}.json` ), JSON.stringify(data));
    }
}   
