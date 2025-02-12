import ejs from "ejs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const templatePath = path.join(__dirname, "views", "index.ejs");
const outputPath = path.join(__dirname, "public", "index.html");

const data = {
    title: "My static Website",
    content: "This is a static file using EJS templating."
};

ejs.renderFile(templatePath, data, (err, str) => {
    if(err) {
        console.error(err);
        return;
    }
    fs.writeFileSync(outputPath, str), (err) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log("File written successfully!");
    };
});