import fs from "fs";
const createAfile = (fileName, fileData) => {
    fs.writeFileSync(`./root/${fileName}.txt`,fileData)
};
export default createAfile;
