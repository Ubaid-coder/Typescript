import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { authenticate, authorize } from './middleware/auth.js';


interface User {
    id: number;
    username: string;
    email: string
}

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

//In-memory database
const users: User[] = [
    { id: 1, username: "user1", email: "user1@gmail.com" },
    { id: 2, username: "user2", email: "user2@gmail.com" },
    { id: 3, username: "user3", email: "user3@gmail.com" }
]

//Routes
app.get('/api/users', (req: Request, res: Response) => {
    res.json(users);
})

app.get('/api/users/:id', (req: Request<{ id: string }>, res: Response) => {
    console.log(req.params.id)
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'user not found' });
    res.json(user);
})

app.get('api/admin', authenticate, authorize(['admin']), (req: Request, res:Response) => {
    res.json({message: `Hello Admin ${req.user?.id}`})
})
 
app.post('/api/users', (req: Request, res: Response) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' })
    }

    const newUser: User = {
        id: users.length + 1,
        username,
        email
    }

    users.push(newUser);
    res.status(201).json(newUser);
})

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.cause);
    res.status(500).json({ message: 'Something went wrong!' });
});

//Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})