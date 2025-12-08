import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? process.env.GITHUB_ID ?? "",
      clientSecret:
        process.env.AUTH_GITHUB_SECRET ?? process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
