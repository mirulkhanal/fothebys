import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '../../../model/user';
import db from '../../../config/db';

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: 'sjdbsajhdbsidnjsndiawniudskdjshdbwubdbuasbdubawudbuab',
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        db();
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error('No email or password provided');
        }
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Invalid email or password');
        }

        const decryptedPassword = await user.decryptPassword(password);

        if (!decryptedPassword) {
          throw new Error('Invalid email or password');
        }
        // console.debug(user);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
