import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminAuth, adminDb } from "./firebase-admin";

export const authOptions: NextAuthOptions = {
    // Who are we giving the authenticatin handler to 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    callbacks: {
        session: async ({ session, token}) => {
            if (session?.user) {
                if (token.sub) {
                    session.user.id = token.sub;

                    // Pass the user's ID to create a custom token and use it to 
                    // authenticate on Firebase
                    // This fix the Firebase authentication problem
                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
                }
            }

            return session;
        },
        // Get the user ID to add it to the user data
        jwt: async ({ user, token }) => {
            if (user) {
                token.sub = user.id;
            }

            return token;
        },
    },
    // Synchronizing all the user logged in sessions with Firebase adapter
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;