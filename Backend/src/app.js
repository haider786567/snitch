import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import productRouter from '../src/routes/product.routes.js'
import cartRouter from '../src/routes/cart.routes.js'
import config from './config/config.js';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'));
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    // Here you would typically find or create a user in your database
    // For simplicity, we'll just return the profile
    return done(null, profile);
}));
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));    

app.use(express.json());
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
export default app;