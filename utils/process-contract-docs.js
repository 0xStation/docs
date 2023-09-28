const fs = require('fs');
const path = require('path');

function renameFilesAndRecordChanges(directoryPath) {
  const changeLog = [];

  function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const isDirectory = fs.statSync(itemPath).isDirectory();

      if (isDirectory) {
        processDirectory(itemPath);
      } else if (item.endsWith('.md') && !item.startsWith('README')) {
        const newItemName = item.replace(/\.md$/, '.mdx');
        const newPath = path.join(dirPath, newItemName);

        fs.renameSync(itemPath, newPath);

        // changeLog.push(`Renamed: ${itemPath} => ${newPath.slice(0, -4)}`); // verbose option
        changeLog.push(`"${newPath.slice(0, -4)}",`); // remove '.mdx' and push it to array
      }
    }
  }

  processDirectory(directoryPath);

  if (changeLog.length > 0) {
    const logFile = path.join(directoryPath, 'stored-changes.md');
    fs.writeFileSync(logFile, changeLog.join('\n'));
    console.log(`Changes recorded in ${logFile}`);
  } else {
    console.log('No .md files found to rename.');
  }
}

// Hardcoded dir param: if using this in a different dir, change this value
const directoryPath = 'groupos-technical-docs/src';
renameFilesAndRecordChanges(directoryPath);
