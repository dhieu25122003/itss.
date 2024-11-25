const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

let users = []; // Lưu trữ người dùng đã đăng ký

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Kiểm tra username trùng lặp
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ error: 'ユーザー名が既に使用されています' });
    }

    // Thêm người dùng mới vào danh sách
    users.push({ username, email, password });
    res.status(200).json({ message: '登録が完了しました' });
});

app.listen(3000, () => {
    console.log('サーバーがポート3000で実行されています');
});
