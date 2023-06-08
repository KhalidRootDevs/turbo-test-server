import prisma from '../../prisma/index.js';

export const findAllUser = async (req, res) => {
    console.log('Inside find all user');
    try {
        const users = await prisma.User.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const findUser = async (req, res) => {
    console.log('Inside find user');
    try {
        const user = await prisma.User.findUnique({
            where: { id: matchId }
        });
        if (!user) {
            res.send("User doesn't exists");
        } else {
            res.json(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const updateUser = async (req, res) => {
    console.log('Inside update user');
    try {
        const user = await prisma.User.update({
            where: {
                email: 'admin@super.com'
            },
            data: {
                isAdmin: true
            }
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const deleteUser = async (req, res) => {
    console.log('Inside update user');
    try {
        const user = await prisma.User.update({
            where: {
                email: 'admin@super.com'
            },
            data: {
                name: 'Super Admin'
            }
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};