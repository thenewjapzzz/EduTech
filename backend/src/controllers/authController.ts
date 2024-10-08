import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

class AuthController {
    async loginUser(req: Request, res: Response) {
        try {
            // Obtém o email e a senha do corpo da requisição
            const { email, password } = req.body; 

            const authServiceInstance = new AuthService(); 
            const { token, user } = await authServiceInstance.login(email, password); 

            // Responde com sucesso
            return res.json({
                message: "Successfully logged in",
                token,
                user: {
                    id: user.user_id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: "Error" });
        }
    }
}

export default new AuthController(); 
