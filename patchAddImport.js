const fs = require('fs');
const file = 'client/src/pages/AdminList.jsx';
const fullPath = require('path').join(__dirname, file);
let lines = fs.readFileSync(fullPath, 'utf8').split('\n');
// insert import after second line if not already present
if (!lines.includes('import { formatPrice } from "../utils/formatPrice";')) {
    lines.splice(2, 0, 'import { formatPrice } from "../utils/formatPrice";');
    fs.writeFileSync(fullPath, lines.join('\n'));
    console.log('Inserted import line');
} else {
    console.log('Import already exists');
}
