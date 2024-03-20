module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "mail.spitalulsamaritean.ro",
        secure: false,
        port: 587,
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
        requireTLS: true,
        auth: {
          user: "no-reply@spitalulsamaritean.ro",
          pass: "tA-^sdwFq^CZ",
        },
      },
      // providerOptions: {
      //   host: 'localhost',
      //   port: 1025,
      //   ignoreTLS: true,
      // },
      settings: {
        defaultFrom: "no-reply@spitalulsamaritean.ro",
        defaultReplyTo: "no-reply@spitalulsamaritean.ro",
      },
    },
  },
});
