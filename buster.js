var config = module.exports;

config["My tests"] = {
    environment: "node",  // or "node"
    rootPath: "./",
    sources: [
        "src/**/*"
    ],
    tests: [
        "test/*-test.js"
    ]
};
