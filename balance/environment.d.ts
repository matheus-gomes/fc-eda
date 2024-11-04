declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_NAME: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      KAFKA_HOST: string;
      KAFKA_CONSUMER_GROUP_ID: string;
      KAFKA_TOPIC: string;
    }
  }
}

export {};
