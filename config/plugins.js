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
        host: "mail.dixiflor.ro",
        secure: false,
        port: 587,
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
        requireTLS: true,
        auth: {
          user: "noreply@dixiflor.ro",
          pass: "onr^lLa0pNLZ",
        },
      },
      // providerOptions: {
      //   host: 'localhost',
      //   port: 1025,
      //   ignoreTLS: true,
      // },
      settings: {
        defaultFrom: "noreply@dixiflor.ro",
        defaultReplyTo: "noreply@dixiflor.ro",
      },
    },
  },
});
