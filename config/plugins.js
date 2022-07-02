module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
  },
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
  //...
});
