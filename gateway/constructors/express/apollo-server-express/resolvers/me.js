// Return the currently logged in user
module.exports = async (_, $, { session }) => {
  if (session && session.user) return session.user;
  return null;
};
