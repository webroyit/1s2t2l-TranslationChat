import NextAuth, { DefaultSession } from "next-auth";

// Module augmentation
// Extend the default session
declare module 'next-auth' {
    interface Session extends DefaultSession {
        firebaseToken?: string,
        user: {
            id: string;
        } & DefaultSession["user"]
    }
}