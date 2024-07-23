import * as express from "express";
import {Request, Response, NextFunction} from "express";
import {ExpressUserRouter} from "./lib/User/infrastructure/ExpressUserRouter";


const app = express();

app.use(express.json());
app.use(ExpressUserRouter);


app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).json({message:err.message});
    }
    console.error(err);
    res.status(500).json({message:'Something broke!'});

});
app.listen(6500, () => {
    console.log("Server is running on http://localhost:6500");
});
