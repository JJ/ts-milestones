const { src, dest } = require("gulp");

const jester = require("gulp-jest").default;

function testing() {
  return src("src/__tests__").pipe(
    jester({
      preprocessorIgnorePatterns: [
        "<rootDir>/dist/",
        "<rootDir>/node_modules/"
      ],
      automock: false
    })
  );
}

exports.default = testing;
