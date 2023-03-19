const config = {
  mongo: {
    MONGO_URI:
      'mongodb+srv://Lukasz:mypassword@cluster0.7ujwipg.mongodb.net/?retryWrites=true&w=majority',
  },

  server: {
    PORT: 8080,
    HOST: 'localhost',
  },
  jsonWebToken: {
    JWT_KEY:
      'hbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NzQ4MzcwNCwiaWF0IjoxNjc',
  },
};

export default config;
