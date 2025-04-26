module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "your-default-secret-here"), // <- fallback optional
      register: {
        allowedFields: ["accountType"],
      },
  },
}});
