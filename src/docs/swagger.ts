import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.1",
  info: {
    title: "API SCIFI Documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8084",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    // TO DO METER TODOS LOS SCHEMAS
    schemas: {
      user: {
        type: "object",
        required: ["name", "album", "cover", "artist", "duration", "mediaId"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
        },
      },
      item: {
        type: "object",
        required: ["price", "qty"],
        properties: {
          price: {
            type: "string",
          },
          qty: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/**/*.js"],
};

export default swaggerJSDoc(swaggerOptions);